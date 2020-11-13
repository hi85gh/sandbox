import { ActionTree } from 'vuex'

export const actions: ActionTree<{}, {}> = {
  nuxtClientInit() {
    if (process.client) {
      alert('nuxtClientInit')
    }
  },
}
