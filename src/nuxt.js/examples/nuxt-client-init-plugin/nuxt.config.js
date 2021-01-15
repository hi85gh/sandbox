export default {
  buildModules: ['@nuxt/typescript-build'],
  components: true,
  plugins: [{ mode: 'client', src: '~/plugins/nuxt-client-init' }],
  router: {
    middleware: 'client-side-only-redirect',
  },
  target: 'static',
}
