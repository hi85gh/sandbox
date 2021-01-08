<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <VTextField v-bind="$attrs" v-on="$listeners">
    <template v-for="name in Object.keys($slots)" #[name]>
      <slot :name="name">
        {{ name }}
      </slot>
    </template>
  </VTextField>
</template>
