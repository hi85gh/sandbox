<script lang="ts">
import { defineComponent } from 'vue'
import { useMouse } from '@vueuse/core'

export default defineComponent({
  setup() {
    const { x, y } = useMouse({ touch: false })

    return { x, y }
  },
})
</script>

<template>
  <p>Mouse x: {{ x }}</p>
  <p>Mouse y: {{ y }}</p>
</template>
