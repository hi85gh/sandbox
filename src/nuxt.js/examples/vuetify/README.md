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
