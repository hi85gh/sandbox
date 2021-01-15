<template>
  <Nuxt />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    /* Client side only */
    if (process.client) {
      if (/^\/secret\/?$/.test(this.$route.path)) {
        alert('Created default.vue: Redirect to index.')

        return this.$nuxt.context.redirect({
          name: 'index'
        })
      }
    }
  }
})
</script>
