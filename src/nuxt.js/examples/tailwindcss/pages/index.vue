<template>
  <div class="flex justify-center items-center h-screen p-12">
    <div class="flex-grow max-w-xl px-6 py-8 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl text-gray-900 font-bold leading-7">
        @nuxtjs/tailwindcss
      </h2>
      <p class="mt-4 text-sm text-gray-500 leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        dolorem illum architecto voluptatum quos voluptatibus consequatur hic
        quibusdam sequi. Fugit laborum vel dignissimos nemo? Quia rerum iusto
        nesciunt voluptatum exercitationem.
      </p>
      <ul class="flex justify-start mt-8">
        <li>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-3 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 leading-5 hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Documentation
          </a>
        </li>
        <li class="ml-4">
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-3 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white leading-5 hover:bg-indigo-500 transition duration-150 ease-in-out"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss">
body {
  @apply bg-gray-300;
}
</style>
