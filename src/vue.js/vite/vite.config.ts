import { UserConfig } from 'vite/dist/node/config'

const config: UserConfig = {
  define: {
    /**
     * Disable Options API
     * Referred: https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
     */
    __VUE_OPTIONS_API__: false,
  },
}

export default config
