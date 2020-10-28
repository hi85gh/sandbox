import { defineComponent, h } from 'vue'
import type { Prop } from 'vue'

export default defineComponent({
  name: 'AppRadio',
  props: {
    modelValue: {
      type: String,
    } as Prop<string>,
    value: {
      type: String,
    } as Prop<string>,
  },
  emits: {
    'update:modelValue': (payload: string) => typeof payload === 'string',
  },
  setup(props, { attrs, emit }) {
    return () =>
      h('input', {
        ...attrs,
        type: 'radio',
        value: props.value,
        checked: props.value === props.modelValue,
        onChange: (event: Event) => {
          if (event.target instanceof HTMLInputElement) {
            if (event.target.checked) {
              emit('update:modelValue', event.target.value)
            }
          }
        },
      })
  },
})
