# vue.js/vite

- Vite:
  [Repository](https://github.com/vitejs/vite)

## Setup

```sh
$ npm init vite-app vite

$ cd vite

$ npm install

$ node_modules/.bin/vite -v
vite v1.0.0-rc.4
```

## Features

### Disable Options API

`define` オプションに `__VUE_OPTIONS_API__: false` を設定することで Options API を無効化することができる。

- References:
  - [vue-next/packages/vue at master · vuejs/vue-next](https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags)
  - [kazu_pon / Twitter](https://twitter.com/kazu_pon/status/1306991285660606466)

1.  `define.__VUE_OPTIONS_API__`: `true` (default)

    ```sh
    $ git rev-parse HEAD
    f0c7434d0c4b9df6e2b26691a683c87ef0c82a9f

    $ npm run build

    > @ build /sandbox/src/vue.js/vite
    > vite build src --outDir dist

    vite v1.0.0-rc.4
    [write] dist/_assets/index.21c7b06c.js 40.73kb, brotli: 14.82kb
    [write] dist/_assets/style.9e6be708.css 0.16kb, brotli: 0.10kb
    [write] dist/index.html 0.36kb, brotli: 0.16kb
    Build completed in 3.17s.
    ```

2.  `define.__VUE_OPTIONS_API__`: `false` (overwrite `vite.config.ts`)

    ```sh
    $ git rev-parse HEAD
    751b23df5643683542fcec8e61194a55af6eff32

    $ npm run build

    > @ build /sandbox/src/vue.js/vite
    > vite build src --outDir dist

    vite v1.0.0-rc.4
    [write] dist/_assets/index.8bdfec5a.js 35.09kb, brotli: 12.90kb
    [write] dist/_assets/style.9e6be708.css 0.16kb, brotli: 0.10kb
    [write] dist/index.html 0.36kb, brotli: 0.15kb
    Build completed in 3.08s.
    ```

## Issues

- Vue 3 を使用する場合は Vetur の設定を変更する
  - [Linting / Error Checking | Vetur](https://vuejs.github.io/vetur/linting-error.html#error-checking)
- `.vue` ファイル内で `alias` を使用して `.ts` ファイルを `import` しようとすると Vetur でエラーが発生
  ```vue
  <script lang="ts">
  import Foo from "/@/Foo.vue"; // OK
  import { bar } from "/@/bar"; // Cannot find module '/@/bar' or its corresponding type declarations.Vetur(2307)
  </script>
  ```
  - `tsconfig.json` に `compilerOptions.paths` を設定しても Vetur のエラーは解決できない
  - `.vue` ファイルではなく `.ts` ファイル（`render` 関数）を使用すると問題なし
  - Vite は問題なく動作する
  - Vite はデフォルトでプロジェクトの `root` フォルダからのルート相対パスでファイルを `import` できるが、TypeScript（`<script lang="ts">` を設定した `.vue` ファイル）では Vetur のエラーが発生する
