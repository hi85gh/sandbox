<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

export default defineComponent({
  setup() {
    const input = ref('')
    const num = ref(0)
    const loop = () => {
      let value = input.value.length

      for (let i = 0; i < 5000; i++) {
        for (let j = 0; j < 5000; j++) {
          value += +i * j
        }
      }

      num.value = value
    }
    const debouncedLoop = useDebounceFn(loop, 500)

    return {
      debouncedLoop,
      input,
      loop,
      num,
    }
  },
})
</script>

<template>
  <p>num: {{ num }}</p>
  <p>
    <label>
      Not debounced: <input v-model="input" type="text" @input="loop" />
    </label>
  </p>
  <p>
    <label>
      Debounced: <input v-model="input" type="text" @input="debouncedLoop" />
    </label>
  </p>
</template>
