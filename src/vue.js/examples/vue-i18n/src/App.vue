<template>
  <Simple />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Simple from './components/Simple.vue'

export default defineComponent({
  name: 'App',
  components: {
    Simple,
  },
})
</script>
