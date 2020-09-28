<script lang="ts">
import { defineComponent } from 'vue'
import AppHeading from './components/AppHeading'

export default defineComponent({
  name: 'App',
  components: {
    AppHeading,
  },
})
</script>

<template>
  <AppHeading href="#" tag="h1" target="_blank">
    AppHeading component
  </AppHeading>
</template>
