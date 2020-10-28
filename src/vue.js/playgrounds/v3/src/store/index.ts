import type { InjectionKey } from 'vue'
import { counter } from './counter'

export const store = () => ({
  counter: counter(),
})

export type Store = ReturnType<typeof store>

export const StoreKey: InjectionKey<Store> = Symbol('Store')
