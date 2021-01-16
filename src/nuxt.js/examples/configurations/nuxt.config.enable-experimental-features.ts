import { NuxtConfig } from '@nuxt/types'

const isDevelopment = process.env.NODE_ENV === 'development'

const config = {
  /**
   * Build configuration
   * @see {@link https://nuxtjs.org/api/configuration-build}
   */
  build: {
    /** @see {@link https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build/#cache} */
    cache: isDevelopment,

    /** @see {@link https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build/#hardsource} */
    hardSource: isDevelopment,

    /** @see {@link https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build/#parallel} */
    parallel: isDevelopment,
  },
}

export default config
