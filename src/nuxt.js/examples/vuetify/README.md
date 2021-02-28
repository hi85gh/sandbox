# @nuxtjs/vuetify

- Repository: <https://github.com/nuxt-community/vuetify-module>
- Release notes: <https://github.com/nuxt-community/vuetify-module/releases>
- Changelog: <https://github.com/nuxt-community/vuetify-module/blob/master/CHANGELOG.md>

## Setup

```sh
$ npx create-nuxt-app vuetify

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in vuetify
? Project name: vuetify
? Programming language: TypeScript
? Package manager: Npm
? UI framework: Vuetify.js
? Nuxt.js modules:
? Linting tools:
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
? Development tools:
? What is your GitHub username?
? Version control system: None

$ cd vuetify

$ node_modules/.bin/nuxt-ts --version
@nuxt/cli v2.14.11

$ rm -rf \
  .editorconfig \
  .gitignore \
  assets/README.md \
  components/README.md \
  layouts/README.md \
  middleware \
  pages/README.md \
  plugins \
  static/README.md \
  store
```

`tsconfig.json`

```diff
{
  "compilerOptions": {
-   "types": ["@types/node", "@nuxt/types"]
+   "types": ["@types/node", "@nuxt/types", "@nuxtjs/vuetify"]
  }
}
```

## Notes

### 開発環境と本番環境で表示が異なる

開発環境と本番環境でエクスポートされた CSS の内容が変わることがあるため `treeShake` を有効にし本番環境と同じ条件で開発する。  
\*使用メモリ、Hot Module Replacement (HMR) にかかる時間は増え開発効率は下がる。

Reference: <https://github.com/nuxt-community/vuetify-module/issues/208>

### Sass の設定変更

Vuetify の Sass の設定を変更する場合は **webpack の Tree shaking の有効化が必須**。

`nuxt.config.ts`

```ts
export default {
  vuetify: {
    treeShake: true,
  },
};
```

Reference: <https://github.com/nuxt-community/vuetify-module#customvariables>

### CSS の肥大化

Vuetify がエクスポートする CSS はファイルサイズが大きいため対応が必要。

#### 不要な設定の削除

Sass の color pack を無効化し、テーマから不要な色の指定を削除する。

`nuxt.config.ts`

```ts
export default {
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    optionsPath: "~~/vuetify.options.ts",
  },
};
```

`variables.scss`

```scss
$color-pack: false;
```

`vuetify.options.ts`

```ts
import type { GlobalVuetifyPreset } from "vuetify/types/services/presets";

const options: GlobalVuetifyPreset = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#1976D2", // primary は必須

        /* 以下、不要な設定を削除 */
        // accent: colors.grey.darken3,
        // secondary: colors.amber.darken3,
        // info: colors.teal.lighten1,
        // warning: colors.amber.base,
        // error: colors.deepOrange.accent4,
        // success: colors.green.accent3,
      },
    },
  },
};

export default options;
```

References:

- <https://vuetifyjs.com/en/features/theme/>
- <https://vuetifyjs.com/en/styles/colors/#sass-color-pack>

#### PurgeCSS を利用

PurgeCSS を利用し不要な CSS を削除する。

References:

- <https://purgecss.com/>
- <https://purgecss.com/guides/nuxt.html#postcss-plugin>

```ts
export default {
  build: {
    postcss: {
      plugins: {
        "@fullhuman/postcss-purgecss": {
          content: [
            "./components/**/*.vue",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./node_modules/vuetify/dist/vuetify.js", // Vuetify のファイルを追加
          ],
          safelist: [
            "html",
            "body",
            /^col.*$/, // 必要な class を追加
          ],
        },
      },
    },
  },
};
```

## Issues

### キー操作下における `VCombobox` コンポーネントのバグ

`VCombobox` コンポーネントをキーで操作する場合はエラーを避けるため以下の対応が必要。  
\*Vuetify `v2.3.23` と `v2.4.5` にて確認

1.  `update:search-input` イベントで `search-input` の値に合わせ `items` に渡す選択肢の配列をフィルタリング
2.  上記 `1` の対応で入力時の処理が重くなるため `useDebounceFn` 関数（vueuse）などを使用して負荷を軽減
3.  `useDebounceFn` 関数内で `VCombobox` コンポーネントにアクセスし `setMenuIndex(-1)` を実行し `listIndex` の値をリセット

補足:

- マウスでクリックするなどキー操作をしなければ問題はない
- 処理のタイミングが変わるため `VCombobox` コンポーネント内部の `filter` の処理は使用しない
  - `no-filter` プロパティを追加
- `update:search-input` イベントで遅延処理（`useDebounceFn` 関数など）をせず `setMenuIndex(-1)` を実行しても
  `VCombobox` コンポーネント内部で `listIndex` の値が更新されるため問題は解消されない
- 入力を確定するまで `input` イベントが発生しないため `update:search-input` を `input` イベントとして使用
- 以下の issues が `VCombobox` コンポーネントにおいては解決されていないと思われる  
  <https://github.com/vuetifyjs/vuetify/issues/7440>

再現:

例として `<VCombobox v-model="value" :items="['foo', 'bar', 'baz']" />` というコンポーネントを使用するものとする。

1.  以下の操作で `VCombobox` コンポーネント内部でエラーが発生しすべての処理が停止する
    1.  選択肢を表示
    2.  アローキーを使用して末尾の `baz` を選択した状態にし `Enter` キーを押下
    3.  1 文字削除し `bar` と `baz` が表示された状態にする
    4.  そのまま `Enter` キーを押下すると `Cannot read property 'click' of undefined` のエラーが発生
2.  以下の操作で値が直前に入力した値に上書きされてしまう
    1.  選択肢を表示
    2.  `bar` または `baz` を選択
    3.  `Enter` キーを押下で確定
    4.  `bar` を選んだ場合は `baz`、`baz` を選んだ場合は `bar` を選択
    5.  そのまま `Enter` キーを押下で直前の値に上書きされる

原因:

- `VCombobox` コンポーネント内部で `VMenu` コンポーネントの `listIndex` の値が正しくリセットされていない
  - `VCombobox` コンポーネントにアクセスし `getMenuIndex` 関数で確認
  - プロパティの設定（`menu-props="auto"` の有無など）によっては再現手順が異なる
