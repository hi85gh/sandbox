<script lang="ts">
import { defineComponent } from 'vue'
import UseLocalStorage from './components/UseLocalStorage.vue'
import UseMouse from './components/UseMouse.vue'

export default defineComponent({
  components: {
    UseLocalStorage,
    UseMouse,
  },
})
</script>

<template>
  <h1>Hello Vue 3 + TypeScript + Vite</h1>
  <UseLocalStorage />
  <UseMouse />
</template>
