/**
 * References:
 * - https://vuetifyjs.com/en/features/internationalization/
 * - https://github.com/nuxt-community/vuetify-module/issues/198
 */
// @ts-expect-error
import { en, ja } from 'vuetify/lib/locale' // Not 'vuetify/src/locale'
import type { GlobalVuetifyPreset } from 'vuetify/types/services/presets'

const options: GlobalVuetifyPreset = {
  icons: {
    iconfont: 'mdiSvg',
  },
  lang: {
    locales: { en, ja },
    current: 'ja',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1976D2',
      },
    },
  },
}

export default options
