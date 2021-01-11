<template>
  <div>
    <div>
      <h1>nuxt-typed-vuex</h1>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    message() {
      return this.$accessor.example.message
    },
  },
})
</script>
