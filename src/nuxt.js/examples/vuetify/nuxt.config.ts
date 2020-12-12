import type { NuxtConfig } from '@nuxt/types'
import colors from 'vuetify/es5/util/colors'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  components: true,
  target: 'static',
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      // @ts-expect-error
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
}

export default config
