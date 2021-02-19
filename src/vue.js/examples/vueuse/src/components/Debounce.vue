<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDebounce } from '@vueuse/core'

export default defineComponent({
  setup() {
    const input = ref('')
    const debouncedInput = useDebounce(input, 500)

    return { debouncedInput, input }
  },
})
</script>

<template>
  <p>Debounced input: {{ debouncedInput || '""' }}</p>
  <p>
    <input v-model="input" type="text" />
  </p>
</template>
