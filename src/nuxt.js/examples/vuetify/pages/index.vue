<template>
  <VContainer class="fill-height">
    <VRow justify="center" align="center">
      <VCol cols="8">
        <VCard>
          <VCardTitle class="headline justify-center">
            Welcome to the Vuetify + Nuxt.js template
          </VCardTitle>
        </VCard>
      </VCol>
      <VCol class="text-center" cols="12">
        <NuxtLink to="/checkboxes/">checkboxes</NuxtLink>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
