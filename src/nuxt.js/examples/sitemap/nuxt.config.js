export default {
  buildModules: ['@nuxt/typescript-build'],
  components: true,
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'http://localhost/', // required
  },
  target: 'static',
}
