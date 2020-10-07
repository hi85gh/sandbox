import { Prop, PropType, defineComponent, h } from 'vue'

const allowTypes = [
  'date',
  'datetime',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const

/** 対応する v-model 修飾子 */
type ModelModifier = 'number'

/** type 属性で "button", "checkbox", "color", "file", "hidden", "image", "radio", "range", "reset", "submit" は許容しない */
type AllowType = typeof allowTypes[number]

const defaultType: AllowType = 'text'

export default defineComponent({
  name: 'AppInput',
  inheritAttrs: false,
  props: {
    modelValue: {} as Prop<any>,
    modelModifiers: {
      type: Object as PropType<{ [key in ModelModifier]?: boolean }>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<AllowType>,
      default: defaultType,
      validator: (value: AllowType) => allowTypes.includes(value),
    },
  },
  emits: {
    'update:modelValue': (payload: string | number) =>
      /* v-model に number 修飾子が指定された場合は引数は数値とする */
      typeof payload === 'string' || typeof payload === 'number',
  },
  setup(props, { attrs, emit }) {
    return () =>
      h('input', {
        ...attrs,
        type: allowTypes.includes(props.type) ? props.type : defaultType,
        value: props.modelValue,
        onInput: (event: Event) => {
          if (event.target instanceof HTMLInputElement) {
            if (props.modelModifiers.number) {
              /* v-model に number 修飾子が指定された場合の処理 */
              const parsedValue = parseFloat(event.target.value)

              if (Number.isFinite(parsedValue)) {
                emit('update:modelValue', parsedValue)
                return
              }
            }

            emit('update:modelValue', event.target.value)
          }
        },
      })
  },
})
