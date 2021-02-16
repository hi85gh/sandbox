import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  /**
   * 以下の設定は `v2.15.0` 以降機能しない
   * Reference: <https://github.com/nuxt/nuxt.js/pull/8520>
   */
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
