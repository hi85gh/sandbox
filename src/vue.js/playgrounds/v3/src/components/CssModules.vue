<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <p
    :class="[
      /**
       * 複数のプロジェクトが混在している場合 Vetur で $style を認識できないため注意
       * エラーが発生する場合は Visual Studio Code でプロジェクトを開き直す
       *
       * ```sh
       * $ code src/vue.js/playgrounds/v3
       * ```
       */
      $style.fontColor,
      $style.fontStyle
    ]"
  >
    CssModules component.
  </p>
</template>

<style module>
.fontColor {
  color: cyan;
}

.fontStyle {
  font-style: italic;
}
</style>
