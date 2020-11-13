import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  build: {
    extend(config, ctx) {
      if (!ctx.isDev && config.output) {
        config.output.publicPath = '_nuxt/'
      }
    },
  },
  target: 'static',
}

export default config
