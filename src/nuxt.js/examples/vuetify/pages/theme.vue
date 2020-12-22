<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

/**
 * Vuetify の Theme について
 *
 * References:
 * - https://vuetifyjs.com/en/features/theme/
 */
export default defineComponent({})
</script>

<template>
  <VContainer class="pb-16 pt-8 px-8">
    <VRow>
      <VCol cols="auto">
        <VSwitch
          v-model="$vuetify.theme.dark"
          :label="`Vuetify Theme: ${$vuetify.theme.dark ? 'Dark' : 'Light'}`"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
