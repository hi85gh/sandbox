import { inject } from 'vue'
import { StoreKey } from '../store'
import type { Store } from '../store'

export const useStore = () => {
  const store = inject<Store>(StoreKey)

  if (!store) {
    throw new Error(`${StoreKey} is not provided`)
  }

  return store
}
