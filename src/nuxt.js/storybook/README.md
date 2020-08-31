# nuxt.js/storybook

- @nuxtjs/storybook:
  [Repository](https://github.com/nuxt-community/storybook) /
  [Documentation](https://storybook.nuxtjs.org/)
- Storybook:
  [Repository](https://github.com/storybookjs/storybook) /
  [Documentation](https://storybook.js.org/)

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
