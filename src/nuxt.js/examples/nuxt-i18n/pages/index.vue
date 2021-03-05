<template>
  <div>
    <div>
      <h1>nuxt-i18n</h1>
      <p>{{ $t('greeting') }}</p>
      <div>
        <p>Locale: {{ locale }}</p>
        <p>
          <select v-model="locale">
            <option v-for="locale in locales" :key="locale">
              {{ locale }}
            </option>
          </select>
        </p>
      </div>
      <dl>
        <dt>NuxtLinks:</dt>
        <dd v-for="locale in availableLocales" :key="locale">
          <NuxtLink :to="switchLocalePath(locale)">
            {{ locale }}
          </NuxtLink>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const locale = computed({
      get: () => app.i18n.locale,
      set: value => {
        app.i18n.locale = value
      }
    })
    const locales = computed(() =>
      (app.i18n.locales || []).map(value =>
        typeof value === 'string' ? value : value.code
      )
    )
    const availableLocales = computed(() =>
      locales.value.filter(value => value !== locale.value)
    )

    return {
      availableLocales,
      locale,
      locales
    }
  }
})
</script>

<i18n>
{
  "en": { "greeting": "Local: Hello, World!" },
  "ja": { "greeting": "Local: こんにちは世界！" }
}
</i18n>
