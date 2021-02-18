<script lang="ts">
import { defineComponent } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export default defineComponent({
  setup() {
    const count = useLocalStorage<number | null>('count', 0)
    const increment = () => {
      if (count.value !== null) {
        count.value = count.value + 1
      }
    }
    const decrement = () => {
      if (count.value !== null) {
        count.value = count.value - 1
      }
    }
    const deleteCount = () => {
      count.value = null
    }

    return { count, decrement, deleteCount, increment }
  },
})
</script>

<template>
  <p>Count: {{ count }}</p>
  <p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="deleteCount">delete</button>
  </p>
</template>
