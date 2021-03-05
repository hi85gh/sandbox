<template>
  <div>
    <div>
      <h1>nuxt-i18n</h1>
      <p>{{ $t('greeting') }}</p>
      <div>
        <p>Locale: {{ $i18n.locale }}</p>
        <p>
          <select v-model="$i18n.locale">
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
import Vue from 'vue'

export default Vue.extend({
  computed: {
    availableLocales(): string[] {
      return (this.$i18n.locales || []).reduce<string[]>((arr, locale) => {
        const str = typeof locale === 'string' ? locale : locale.code
        return str !== this.$i18n.locale ? [...arr, str] : arr
      }, [])
    },
    locales(): string[] {
      return (this.$i18n.locales || []).map(locale =>
        typeof locale === 'string' ? locale : locale.code
      )
    }
  }
})
</script>
