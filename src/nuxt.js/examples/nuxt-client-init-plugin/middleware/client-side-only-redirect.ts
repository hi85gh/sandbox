import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ redirect, route }) => {
  /* Client side only */
  if (process.client) {
    if (/^\/secret\/?$/.test(route.path)) {
      alert('Middleware: Redirect to index.')

      return redirect({
        name: 'index',
      })
    }
  }
}

export default middleware
