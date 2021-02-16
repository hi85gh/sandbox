# @nuxtjs/tailwindcss

- @nuxtjs/tailwindcss:
  - Repository: <https://github.com/nuxt-community/tailwindcss-module>
  - Documentation: <https://tailwindcss.nuxtjs.org/>
  - Release notes: <https://github.com/nuxt-community/tailwindcss-module/releases>
- Tailwind CSS:
  - Repository: <https://github.com/tailwindlabs/tailwindcss>
  - Documentation: <https://tailwindcss.com/>
  - Release notes: <https://github.com/tailwindlabs/tailwindcss/releases>

## Setup

```sh
$ npx create-nuxt-app tailwindcss

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in tailwindcss
? Project name: tailwindcss
? Programming language: TypeScript
? Package manager: Npm
? UI framework: Tailwind CSS
? Nuxt.js modules:
? Linting tools:
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
? Development tools:
? What is your GitHub username?
? Version control system: None

$ cd tailwindcss

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

## Notes

### Purge layers by default

`node_modules/.bin/nuxt generate` で以下の警告が表示された場合、設定を追加する。

```sh
 WARN  warn - The conservative purge mode will be removed in Tailwind 2.0.
 WARN  warn - Please switch to the new layers mode instead.
```

`nuxt.config.js` の `tailwindcss` プロパティは `future` オプション未対応のため `tailwind.config.js` を追加する。
\*@nuxtjs/tailwindcss `v3.4.2` で確認

```js
module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
};
```

Reference: <https://v1.tailwindcss.com/docs/upcoming-changes#purge-layers-by-default>
