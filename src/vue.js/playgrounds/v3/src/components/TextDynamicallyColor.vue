<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'red',
    },
  },
})
</script>

<template>
  <p class="text">TextDynamicallyColor component.</p>
</template>

<style scoped>
.text {
  /* Reference: https://github.com/vuejs/rfcs/pull/231 */
  color: v-bind('color');
}
</style>
