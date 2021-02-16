# configurations

## Setup

```sh
$ npx create-nuxt-app configurations

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in configurations
? Project name: configurations
? Programming language: TypeScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules:
? Linting tools:
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
? Development tools:
? What is your GitHub username?
? Version control system: None

$ cd configurations

$ node_modules/.bin/nuxt-ts --version
@nuxt/cli v2.14.7

$ rm -rf \
  .editorconfig \
  .gitignore \
  assets \
  components/README.md \
  layouts/README.md \
  middleware \
  pages/README.md \
  plugins \
  static \
  store
```

## Configurations

### `nuxt.config.add-alias-to-routes.ts`

`index.html` にアクセスされた場合に `index.vue` の内容を返す設定。

### `nuxt.config.delete-file-after-generated.ts`

`generate` コマンドで静的ファイルを書き出した後に不要なファイルを削除する設定。

### `nuxt.config.enable-experimental-features.ts`

実験的機能を有効にする設定。

#### Nuxt.js のビルドの高速化

- 以下のオプションを有効にする
  - `cache`
  - `hardsource`
  - `parallel`
- 実験的機能のためビルドでエラーが発生する可能性が高い
  - CI 利用時のエラーを避けるため `process.env.NODE_ENV` を使用し開発時のみ有効にする
  - ファイルを追加した際など `hardsource` に関連するエラーが多い
  - エラーが発生した場合は以下のディレクトリに保存されているキャッシュを削除
    - `node_modules/.cache/cache-loader`
    - `node_modules/.cache/hard-source`

References:

- <https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build/#cache>
- <https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build/#hardsource>
- <https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build/#parallel>

Commentaries:

- <https://bijutsutecho.com/magazine/news/headline/23031>
- <https://tech.holmescloud.com/entry/2020/12/14/161147>
- <https://github.com/tokyo-metropolitan-gov/covid19/issues/1964>

### `nuxt.config.generate-for-local.ts`

<hr />

**以下の設定は `v2.15.0` 以降機能しない**

Reference: https://github.com/nuxt/nuxt.js/releases/tag/v2.15.0

以下のプルリクエストにより `publicPath` に変更が入っている。

> feat(config, vue-app, vue-renderer): support dynamic `base` and `publicPath` by danielroe · Pull Request #8520 · nuxt/nuxt.js  
> <https://github.com/nuxt/nuxt.js/pull/8520>

> fix(vue-app): enable dynamic publicPath on server-side by danielroe · Pull Request #8759 · nuxt/nuxt.js  
> <https://github.com/nuxt/nuxt.js/pull/8759>

以下のイシューに期待。

> Allow nuxt running from subfolder or `file://` protocol (like vue-cli 3 projects) · Issue #6133 · nuxt/nuxt.js  
> <https://github.com/nuxt/nuxt.js/issues/6133>

<hr />

`generate` コマンドで書き出した静的ファイルをサーバーを起動せずにローカルで確認できるようにする設定。  
ブラウザーのコンソールに以下のようなエラーが表示するが動作確認は可能。

```sh
# Google Chrome
GET file:///_nuxt/static/0000000000/payload.js net::ERR_FILE_NOT_FOUND
```

- Nuxt.js `v2.14.7` で確認
- `payload.js` の読み込みを停止する方法は不明
- `config.hooks.generate.page` で HTML を上書くことは可能だが別のエラーが発生する
  ```ts
  export default {
    hooks: {
      generate: {
        page(args) {
          args.html = args.html.replace(/\/_nuxt\/static\//g, "_nuxt/static/");
        },
      },
    },
  };
  ```
