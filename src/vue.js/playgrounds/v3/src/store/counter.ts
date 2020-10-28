import { reactive } from 'vue'

type State = {
  click: number
}

export const counter = () => {
  const state = reactive<State>({
    click: 0,
  })

  return {
    /* getters */
    get click() {
      return state.click
    },

    /* setters */
    setClick(value: State['click']) {
      state.click = value
    },
  }
}
