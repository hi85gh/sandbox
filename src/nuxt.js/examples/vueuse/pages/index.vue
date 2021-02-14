<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useMouse } from '@vueuse/core'

export default defineComponent({
  setup() {
    const { x, y } = useMouse({ touch: false })

    return { x, y }
  }
})
</script>

<template>
  <div class="container">
    <h1>vueuse</h1>
    <p>Mouse x: {{ x }}</p>
    <p>Mouse y: {{ y }}</p>
  </div>
</template>
