<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { locale, t } = useI18n()

    return { locale, t }
  },
})
</script>

<template>
  <p>message: {{ t('message') }}</p>
  <select v-model="locale">
    <option v-for="language in ['en', 'ja']" :key="language">
      {{ language }}
    </option>
  </select>
</template>

<i18n>
{
  "en": {
    "message": "Hello, World!"
  },
  "ja": {
    "message": "こんにちは世界！"
  }
}
</i18n>
