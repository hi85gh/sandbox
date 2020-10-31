<script lang="ts">
import { computed, defineComponent, useMeta } from '@nuxtjs/composition-api'

const title = 'composition-api'

export default defineComponent({
  setup() {
    useMeta({ title })
    const heading = computed(() => title)
    const links = computed(() => [
      { href: 'https://nuxtjs.org/', text: 'Documentation' },
      { href: 'https://github.com/nuxt/nuxt.js', text: 'GitHub' },
    ])

    return {
      heading,
      links,
    }
  },
  head: {},
})
</script>

<template>
  <div>
    <h1>{{ heading }}</h1>
    <p>
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ link.text }}
      </a>
    </p>
  </div>
</template>
