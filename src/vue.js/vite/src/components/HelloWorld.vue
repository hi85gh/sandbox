<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { PropType, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String as PropType<string>,
      default: 'Hello World',
    },
  },
  setup() {
    const state = reactive({
      count: 0,
    })

    return toRefs(state)
  },
})
</script>
