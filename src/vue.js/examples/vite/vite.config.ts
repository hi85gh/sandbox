import { resolve } from 'path'
import { UserConfig } from 'vite/dist/node/config'

const config: UserConfig = {
  alias: {
    '/@/': resolve(__dirname, 'src'),
  },
  define: {
    /**
     * Disable Options API
     * Reference: https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
     */
    __VUE_OPTIONS_API__: false,
  },
  outDir: resolve(__dirname, 'dist'),
  resolvers: [
    {
      /**
       * Reference: https://github.com/vitejs/vite/issues/300#issuecomment-708944488
       */
      alias: (id) => id.replace(/^@\//, '/@/'),
    },
  ],
  root: resolve(__dirname, 'src'),
}

export default config
