<script lang="ts">
import { PropType, defineComponent } from 'vue'

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

type Tag = typeof tags[number]

export default defineComponent({
  name: 'AppHeading',
  inheritAttrs: false,
  props: {
    tag: {
      type: String as PropType<Tag>,
      default: 'h1',
      validator: (value: Tag) => tags.includes(value),
    },
  },
})
</script>

<template>
  <component v-bind="$attrs" :is="tag">
    <slot />
  </component>
</template>
