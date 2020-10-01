import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AppInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      required: false,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, { attrs, emit }) {
    function onInput(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        emit('update:modelValue', event.target.value)
      }
    }

    return () =>
      h('input', {
        ...attrs,
        value: props.modelValue,
        onInput,
      })
  },
})
