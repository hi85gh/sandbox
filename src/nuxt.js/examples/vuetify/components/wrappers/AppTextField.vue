<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <VTextField v-bind="$attrs" v-on="$listeners">
    <template v-for="(_, slot) in $slots" #[slot]>
      <slot :name="slot" />
    </template>
    <template
      v-for="key in Object.keys($scopedSlots).filter((key) => !$slots[key])"
      #[key]="scope"
    >
      <slot :name="key" v-bind="scope" />
    </template>
  </VTextField>
</template>
