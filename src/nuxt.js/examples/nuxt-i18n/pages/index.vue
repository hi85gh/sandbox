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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    locales(): string[] {
      return (this.$i18n.locales || []).map(locale =>
        typeof locale === 'string' ? locale : locale.code
      )
    }
  }
})
</script>
