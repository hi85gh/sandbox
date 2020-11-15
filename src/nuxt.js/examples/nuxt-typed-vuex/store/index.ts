import { Context } from '@nuxt/types'
import { actionTree, getAccessorType } from 'typed-vuex'
import * as example from '~/store/example'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = actionTree(
  { state, getters, mutations },
  {
    nuxtServerInit(_vuexContext, _nuxtContext: Context): void {
      this.app.$accessor.example.setHelloWorld()
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    example,
  },
})

export type RootState = ReturnType<typeof state>
