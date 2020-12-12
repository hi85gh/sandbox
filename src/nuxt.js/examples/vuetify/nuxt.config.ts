import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  components: true,
  target: 'static',
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    optionsPath: '~~/vuetify.options.ts',
    treeShake: true,
  },
}

export default config
