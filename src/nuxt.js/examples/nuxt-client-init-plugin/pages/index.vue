<template>
  <div>
    <div>
      <h1>nuxt-client-init-plugin</h1>
      <p><NuxtLink to="/secret">Secret page</NuxtLink></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    if (process.client) {
      alert('created')
    }
  },
})
</script>
