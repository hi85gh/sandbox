import { getAccessorType } from 'typed-vuex'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {},
})

export type RootState = ReturnType<typeof state>
