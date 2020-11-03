import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  router: {
    extendRoutes(routes, resolve) {
      routes.forEach((route) => {
        route.alias = resolve(route.path, 'index.html')
      })
    },
  },
}

export default config
