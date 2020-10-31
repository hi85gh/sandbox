# @nuxtjs/composition-api

- @nuxtjs/composition-api
  - Repository: <https://github.com/nuxt-community/composition-api>
  - Documentation: <https://composition-api.nuxtjs.org/>
  - Release notes: <https://github.com/nuxt-community/composition-api/releases>
- Vue Composition API:
  - Repository: <https://github.com/vuejs/composition-api>
  - Documentation: <https://composition-api.vuejs.org/>
  - Release notes: <https://github.com/vuejs/composition-api/releases>

## Setup

```sh
$ npx create-nuxt-app composition-api

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in composition-api
? Project name: composition-api
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

$ cd composition-api

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

$ npm install @nuxtjs/composition-api --save-exact
```

`nuxt.config.js`

```diff
export default {
- buildModules: ['@nuxt/typescript-build'],
+ buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
}
```
