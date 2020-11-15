# nuxt-typed-vuex

- Repository: <https://github.com/danielroe/typed-vuex>
- Documentation: <https://typed-vuex.roe.dev/>
- Release notes: <https://github.com/danielroe/typed-vuex/releases>

## Setup

```sh
$ npx create-nuxt-app nuxt-typed-vuex

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in nuxt-typed-vuex
? Project name: nuxt-typed-vuex
? Programming language: TypeScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules:
? Linting tools:
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools:
? What is your GitHub username?
? Version control system: None

$ cd nuxt-typed-vuex

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

$ npm install nuxt-typed-vuex --save-exact
```

`nuxt.config.js`

```diff
export default {
- buildModules: ['@nuxt/typescript-build'],
+ buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
}
```

## Notes

### 命名規則

`state`, `getters`, `mutations`, `actions` で同じ名前を使用しない。

> Because the accessor is flattened, you should avoid using the same name more than once between your getters, state, mutations and actions or you may receive the following error: `Cannot set property <name> of #<Object> which has only a getter.`
>
> Reference: <https://typed-vuex.roe.dev/accessor-introduction#structure>

### `actions` に戻り値の型を指定

他のモジュールの参照、`actions` を `dispatch` する際に TypeScript のエラーが発生しないように戻り値の型を指定する。

> If you need to reference other modules, or dispatch actions within the module, it should be done in a type-safe way through `this.app.$accessor`. You will need to add a return type to your action to avoid TypeScript complaining about self-referential type definitions.
>
> Reference: <https://typed-vuex.roe.dev/actions#referencing-other-modules>
