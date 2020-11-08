# @nuxtjs/storybook

- @nuxtjs/storybook:
  - Repository: <https://github.com/nuxt-community/storybook>
  - Documentation: <https://storybook.nuxtjs.org/>
  - Release notes: <https://github.com/nuxt-community/storybook/releases>
- Storybook:
  - Repository: <https://github.com/storybookjs/storybook>
  - Documentation: <https://storybook.js.org/>
  - Release notes: <https://github.com/storybookjs/storybook/releases>

## Setup

```sh
$ npx create-nuxt-app storybook

create-nuxt-app v3.2.0
✨  Generating Nuxt.js project in storybook
? Project name: storybook
? Programming language: TypeScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules:
? Linting tools:
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools:

$ cd storybook

$ node_modules/.bin/nuxt-ts --version
@nuxt/cli v2.14.4

$ rm -rf \
  .editorconfig \
  .git \
  .gitignore \
  README.md \
  assets \
  components/README.md \
  layouts/README.md \
  middleware \
  package-lock.json \
  pages/README.md \
  plugins \
  static \
  store

$ npm install --save-dev @nuxtjs/storybook

$ echo ".nuxt-storybook" >> .gitignore && \
  echo "storybook-static" >> .gitignore
```

## Issues

- [Module not found: Error: Can't resolve 'core-js/modules/web.dom-collections.iterator' · Issue #59 · nuxt-community/storybook](https://github.com/nuxt-community/storybook/issues/59)
  - @nuxtjs/storybook `v2.1.0` で core-js@3 のエラーが発生し起動できない
  - core-js@3, @babel/runtime-corejs3 をインストールする
    ```sh
    $ npm install --save-dev core-js@3 @babel/runtime-corejs3
    ```
  - @nuxtjs/storybook `v2.2.0` で core-js@3, @babel/runtime-corejs3 がインストールされていない場合は以下のエラーが表示
    ```sh
     ERROR  Storybook requires core-js@3. Run yarn add --dev core-js@3 @babel/runtime-corejs3
    ```
    - [Release v2.2.0 · nuxt-community/storybook](https://github.com/nuxt-community/storybook/releases/tag/v2.2.0)
    - [fix(webpack): show error when `core-js@3` is missing by farnabaz · Pull Request #111 · nuxt-community/storybook](https://github.com/nuxt-community/storybook/pull/111)
  - nuxt が `v2.14.0` 以上であっても core-js@3 は必須:
    > If you are using Nuxt < 2.14.0, you need to use `core-js@3`
    > (Retrieved from https://storybook.nuxtjs.org/setup/)
