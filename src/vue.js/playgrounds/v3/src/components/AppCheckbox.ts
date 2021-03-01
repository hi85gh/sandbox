import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AppCheckbox',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': (payload: boolean) => typeof payload === 'boolean',
  },
  setup(props, { attrs, emit }) {
    return () =>
      h('input', {
        ...attrs,
        type: 'checkbox',
        checked: props.modelValue,
        onChange: (event: Event) => {
          if (event.target instanceof HTMLInputElement) {
            emit('update:modelValue', event.target.checked)
          }
        },
      })
  },
})
