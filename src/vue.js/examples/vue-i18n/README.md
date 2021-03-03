# vue-i18n

- Official site:
  - \>=v9: <https://vue-i18n.intlify.dev/>
  - \<v9: <https://kazupon.github.io/vue-i18n/>
- Repository:
  - \>=v9: <https://github.com/intlify/vue-i18n-next>
  - \<v9: <https://github.com/kazupon/vue-i18n>
- Release notes:
  - \>=v9: <https://github.com/intlify/vue-i18n-next/releases>
  - \<v9: <https://github.com/kazupon/vue-i18n/releases>
- Changelog:
  - \>=v9: <https://github.com/intlify/vue-i18n-next/blob/master/CHANGELOG.md>
  - \<v9: <https://github.com/kazupon/vue-i18n/blob/v8.x/CHANGELOG.md>

## Setup

```sh
$ npm init @vitejs/app vue-i18n

Scaffolding project in src/vue.js/examples/vue-i18n...
✔ Select a template: · vue-ts

$ cd vue-i18n

$ npm install

$ node_modules/.bin/vite --version
vite/2.0.5 darwin-x64 node-v14.16.0

$ npm install vue-i18n@next @intlify/vite-plugin-vue-i18n
```

`src/main.ts`

```diff
import { createApp } from 'vue'
+import { createI18n } from 'vue-i18n'
import App from './App.vue'

+const i18n = createI18n({
+  legacy: false,
+})

-createApp(App).mount('#app')
+createApp(App).use(i18n).mount('#app')
```

`src/main.ts`

```diff
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
+import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
-  plugins: [vue()],
+  plugins: [vue(), vueI18n()],
})
```

## Notes

### Composition API の使用

vue-i18n を `setup` 関数内で使用するには `createI18n` 関数の `legacy` オプションに `false` を設定する。

```ts
const i18n = createI18n({
  legacy: false,
});
```

Reference: <https://vue-i18n-next.intlify.dev/guide/advanced/composition.html#basic-usage>

\*@intlify/vite-plugin-vue-i18n の導入でも可

### カスタムプロパティの使用

`$i18n` や `$t` など vue-i18n のカスタムプロパティを `<template>` 内で使用するには `createI18n` 関数の `globalInjection` オプションに `true` を設定する。

```ts
const i18n = createI18n({
  globalInjection: true,
});
```

Composition API の `useI18n` 関数でもグローバルな値を参照することはできるため必須ではない。

```ts
const { locale } = useI18n({ useScope: "global" });
```

References:

- <https://vue-i18n.intlify.dev/api/general.html#globalinjection>
- <https://vue-i18n.intlify.dev/guide/advanced/composition.html#implicit-with-injected-properties-and-functions>
- <https://vue-i18n.intlify.dev/api/injection.html#componentcustomproperties>
