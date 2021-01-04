import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'

const config: UserConfig = {
  alias: [
    {
      find: /^@\//,
      replacement: '/',
    },
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  define: {
    /**
     * Disable Options API
     * Reference: https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
     */
    __VUE_OPTIONS_API__: false,
  },
  plugins: [vue()],
  root: resolve(__dirname, 'src'),
}

export default config
