export default {
  buildModules: ['@nuxt/typescript-build'],
  components: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
  },
  modules: ['nuxt-i18n'],
  target: 'static',
}
