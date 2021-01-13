import { Plugin } from '@nuxt/types'

const plugin: Plugin = async (context) => {
  try {
    if (process.client) {
      await context.store.dispatch('nuxtClientInit', context)
    }
  } catch (error) {
    if (context.isDev) {
      console.error(error)
    }
  } finally {
    window.onNuxtReady(() => {
      alert('Nuxt is ready.')
    })
  }
}

export default plugin
