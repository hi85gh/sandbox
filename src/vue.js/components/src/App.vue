<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import AppHeading from './components/AppHeading'
import AppInput from './components/AppInput'

export default defineComponent({
  name: 'App',
  components: {
    AppHeading,
    AppInput,
  },
  setup() {
    const state = reactive({
      appInputModelValue: 'Hello, World!',
    })

    return toRefs(state)
  },
})
</script>

<template>
  <AppHeading href="#" tag="h1" target="_blank">
    AppHeading component
  </AppHeading>
  <p><AppInput v-model="appInputModelValue" /></p>
  <p>value: {{ appInputModelValue }}</p>
</template>
