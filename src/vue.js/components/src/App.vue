<script lang="ts">
import { defineComponent } from 'vue'
import AppHeading from './components/AppHeading.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeading,
  },
})
</script>

<template>
  <AppHeading tag="h1">AppHeading component</AppHeading>
</template>
