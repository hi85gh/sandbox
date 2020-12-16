<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {
      /* Readonly */
      links: computed(() => ['checkboxes', 'switches'])
    }
  }
})
</script>

<template>
  <VContainer class="fill-height">
    <VRow align="center" class="align-self-end" justify="center">
      <VCol cols="8">
        <VCard>
          <VCardTitle class="headline justify-center">
            Welcome to the Vuetify + Nuxt.js template
          </VCardTitle>
        </VCard>
      </VCol>
    </VRow>
    <VRow align="center" class="align-self-start" justify="center">
      <VCol v-for="link in links" :key="link" class="text-center" cols="2">
        <NuxtLink :to="`/${link}/`">{{ link }}</NuxtLink>
      </VCol>
    </VRow>
  </VContainer>
</template>
