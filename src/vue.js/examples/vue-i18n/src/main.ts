import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',

  /**
   * Must be set to `false` to use Composition API
   * @see {@link https://vue-i18n-next.intlify.dev/guide/advanced/composition.html#basic-usage Vue I18n}
   */
  legacy: false,
})

createApp(App).use(i18n).mount('#app')
