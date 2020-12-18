import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  build: {
    postcss: {
      plugins: {
        ...(process.env.NODE_ENV === 'production'
          ? {
              '@fullhuman/postcss-purgecss': {
                content: [
                  './components/**/*.vue',
                  './layouts/**/*.vue',
                  './pages/**/*.vue',
                  './node_modules/vuetify/dist/vuetify.js',
                ],
                safelist: ['html', 'body', /^col.*$/],
              },
            }
          : {}),
      },
    },
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/vuetify',
  ],
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
