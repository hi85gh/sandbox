<script lang="ts">
import { defineComponent } from 'vue'
import LocalStorage from './components/LocalStorage.vue'
import Mouse from './components/Mouse.vue'

export default defineComponent({
  components: {
    LocalStorage,
    Mouse,
  },
})
</script>

<template>
  <h1>Hello Vue 3 + TypeScript + Vite</h1>
  <hr />
  <a href="https://vueuse.org/core/useLocalStorage/">useLocalStorage</a>
  <LocalStorage />

  <hr />
  <a href="https://vueuse.org/core/useMouse/">useMouse</a>
  <Mouse />
</template>
