<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <p>message: {{ $t('globalMessage') }}</p>
  <select v-model="$i18n.locale">
    <option v-for="language in ['en', 'ja']" :key="language">
      {{ language }}
    </option>
  </select>
</template>
