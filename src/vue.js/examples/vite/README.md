# vite

- Official site: <https://vitejs.dev/>
- Repository: <https://github.com/vitejs/vite>
- Changelog: <https://github.com/vitejs/vite/blob/master/CHANGELOG.md>

## Setup

```sh
$ npm init vite-app vite

$ cd vite

$ npm install

$ node_modules/.bin/vite -v
vite v1.0.0-rc.4
```

## Notes

### Disable Options API

`define` オプションに `__VUE_OPTIONS_API__: false` を設定することで Options API を無効化することができる。

References:

- <https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags>
- <https://twitter.com/kazu_pon/status/1306991285660606466>

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

### Use aliases

Vite はデフォルトでルート相対パス指定による `import` ができるが TypeScript を使用する場合は `alias` を設定する。

#### v2

Reference: <https://vitejs.dev/config/#alias>

`vite.config.ts`

```ts
import vue from "@vitejs/plugin-vue";
import { UserConfig } from "vite";

const config: UserConfig = {
  alias: [
    {
      find: /^@\//,
      replacement: "/src/",
    },
  ],
  plugins: [vue()],
};

export default config;
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### v1

References:

- <https://github.com/vitejs/vite/issues/300>
- <https://github.com/vitejs/vite/issues/300#issuecomment-708944488>

`vite.config.ts`

```ts
import { resolve } from "path";
import { UserConfig } from "vite/dist/node/config";

const config: UserConfig = {
  alias: {
    "/@/": resolve(__dirname, "src"), // path aliases must start with / and end with /.
  },
  resolvers: [
    {
      alias: (id) => id.replace(/^@\//, "/@/"), // add slash to particular id, then vite won't resolve it as a module
    },
  ],
};

export default config;
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
