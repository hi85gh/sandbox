<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const messages = {
  en: {
    message: 'Hello, World!',
  },
  ja: {
    message: 'こんにちは世界！',
  },
} as const

export default defineComponent({
  setup() {
    const { availableLocales, locale, t } = useI18n({
      messages,
    })
    const selectedLanguage = ref<keyof typeof messages | ''>('')
    const locales = computed(() => availableLocales)
    const message = computed(() => t('message'))
    const onChange = (event: Event) => {
      if (event.target instanceof HTMLSelectElement) {
        locale.value = event.target.value
      }
    }

    onMounted(() => {
      const language = window.navigator.languages[0]

      if (availableLocales.includes(language)) {
        locale.value = language
      }
    })

    return {
      locales,
      message,
      onChange,
      selectedLanguage,
    }
  },
})
</script>

<template>
  <p>message: {{ message }}</p>
  <p>
    <select v-model="selectedLanguage" @change="onChange">
      <option disabled value="">Please select one</option>
      <option v-for="locale in locales" :key="locale">
        {{ locale }}
      </option>
    </select>
  </p>
</template>
