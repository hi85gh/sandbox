<template>
  <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
})
</script>
