# @nuxtjs/sitemap

- Repository: <https://github.com/nuxt-community/sitemap-module>
- Documentation: <https://sitemap.nuxtjs.org/>
- Changelog: <https://github.com/nuxt-community/sitemap-module/blob/dev/CHANGELOG.md>

## Setup

```sh
$ npx create-nuxt-app sitemap

create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in sitemap
? Project name: sitemap
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

$ cd sitemap

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
  static/README.md \
  store
```

`nuxt.config.js`

```diff
export default {
+ modules: ['@nuxtjs/sitemap'],
+ sitemap: {
+   hostname: 'http://localhost/',
+ },
}
```
