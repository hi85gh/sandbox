<script lang="ts">
import { defineComponent } from 'vue'
import UseMouse from './components/UseMouse.vue'

export default defineComponent({
  components: {
    UseMouse,
  },
})
</script>

<template>
  <h1>Hello Vue 3 + TypeScript + Vite</h1>
  <UseMouse />
</template>
