import { actionTree, getterTree, mutationTree } from 'typed-vuex'

type State = {
  message: string
}

export const state = (): State => ({
  message: '',
})

export const getters = getterTree(state, {
  message: (state) => state.message,
})

export const mutations = mutationTree(state, {
  setMessage(state, newValue: State['message']) {
    state.message = newValue
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    setHelloWorld({ commit }): void {
      commit('setMessage', 'Hello, World!')
    },
  }
)

export type ExampleState = ReturnType<typeof state>
