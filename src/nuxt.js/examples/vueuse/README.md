# @vueuse/core

- Official site: <https://vueuse.js.org/>
- Repository: <https://github.com/vueuse/vueuse>
- Release notes: <https://github.com/vueuse/vueuse/releases>

## Setup

```sh
$ npm init nuxt-app vueuse

create-nuxt-app v3.5.2
✨  Generating Nuxt.js project in vueuse
? Project name: vueuse
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

$ cd vueuse

$ node_modules/.bin/nuxt-ts --version
@nuxt/cli v2.14.12

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

$ npm install @vueuse/core @nuxtjs/composition-api --save-exact
```

`nuxt.config.js`

```diff
export default {
- buildModules: ['@nuxt/typescript-build'],
+ buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
}
```
