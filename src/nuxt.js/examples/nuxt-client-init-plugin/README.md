# nuxt-client-init-plugin

## Referenced package

- nuxt-client-init-module
  - Repository: <https://github.com/potato4d/nuxt-client-init-module>
  - Changelog: <https://github.com/potato4d/nuxt-client-init-module/blob/master/CHANGELOG.md>
  - Commentary: <https://qiita.com/potato4d/items/cc5d8ea24949e86f8a5b>

## Setup

```sh
$ npx create-nuxt-app nuxt-client-init-plugin

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in nuxt-client-init-plugin
? Project name: nuxt-client-init-plugin
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

$ cd nuxt-client-init-plugin

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

`nuxt.config.js`

```diff
export default {
+ plugins: [{ mode: 'client', src: '~/plugins/nuxt-client-init' }],
}
```

`~/plugins/nuxt-client-init.ts`

<!-- prettier-ignore -->
```ts
import { Plugin } from '@nuxt/types'

const plugin: Plugin = async (context) => {
  try {
    if (process.client) {
      await context.store.dispatch('nuxtClientInit', context)
    }
  } catch (error) {
    if (context.isDev) {
      console.error(error)
    }
  }
}

export default plugin
```
