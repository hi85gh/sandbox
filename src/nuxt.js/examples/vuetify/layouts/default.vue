<template>
  <VApp>
    <VAppBar app>
      <VToolbarTitle>Vuetify.js</VToolbarTitle>
    </VAppBar>
    <VMain>
      <Nuxt />
    </VMain>
    <VFooter app>
      <small>&copy; {{ new Date().getFullYear() }}</small>
    </VFooter>
  </VApp>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
