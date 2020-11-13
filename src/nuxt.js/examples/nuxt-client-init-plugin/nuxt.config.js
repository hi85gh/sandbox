export default {
  buildModules: ['@nuxt/typescript-build'],
  components: true,
  plugins: [{ mode: 'client', src: '~/plugins/nuxt-client-init' }],
  target: 'static',
}
