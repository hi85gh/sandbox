<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <p :class="[$style.fontColor, $style.fontStyle]">CssModules component.</p>
</template>

<style module>
.fontColor {
  color: cyan;
}

.fontStyle {
  font-style: italic;
}
</style>
