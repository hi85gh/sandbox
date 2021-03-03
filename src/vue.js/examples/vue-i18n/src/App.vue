<template>
  <h2>Simple usage</h2>
  <Simple />
  <hr />

  <h2>Use custom blocks</h2>
  <CustomBlock />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomBlock from './components/CustomBlock.vue'
import Simple from './components/Simple.vue'

export default defineComponent({
  name: 'App',
  components: {
    CustomBlock,
    Simple,
  },
})
</script>
