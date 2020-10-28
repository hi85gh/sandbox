<script lang="ts">
import { defineComponent } from 'vue'
import type { Prop } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
    } as Prop<string>,
  },
})
</script>

<template>
  <p class="text">Hello, World!</p>
</template>

<style scoped vars="{ color }">
.text {
  color: var(--color, red);
}
</style>
