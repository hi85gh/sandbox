export default {
  buildModules: ['@nuxt/typescript-build'],
  components: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: { greeting: 'Hello, World!' },
        ja: { greeting: 'こんにちは世界！' },
      },
    },
  },
  modules: ['nuxt-i18n'],
  target: 'static',
}
