import { computed, defineComponent, h } from 'vue'
import type { PropType } from 'vue'

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
type ModelModifierKey = 'lazy' | 'number' | 'trim'

type ModelModifiers = {
  [key in ModelModifierKey]?: boolean
}

/** type 属性で "button", "checkbox", "color", "file", "hidden", "image", "radio", "range", "reset", "submit" は許容しない */
type AllowType = typeof allowTypes[number]

export default defineComponent({
  name: 'AppInputField',
  inheritAttrs: false,
  props: {
    modelValue: {} as any,
    modelModifiers: {
      type: Object as PropType<ModelModifiers>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<AllowType>,
      default: 'text',
      validator: (value: AllowType) => allowTypes.includes(value),
    },
  },
  emits: {
    'update:modelValue': (payload: string | number) =>
      /* v-model に number 修飾子が指定された場合に引数が数値となる場合がある */
      typeof payload === 'string' || typeof payload === 'number',
  },
  setup(props, { attrs, emit }) {
    const modelModifiers = computed(() => props.modelModifiers)
    const type = computed(() => props.type)

    /**
     * 入力された文字列を数値に変換する関数。
     * 入力された文字列全体が数字に変換できる場合にのみ数値を返すよう、デフォルトの number 修飾子の挙動から変更している。
     * （v-model のデフォルトの number 修飾子は parseFloat() 関数を使って文字列を数値に変換するため文字列が残るってしまう場合があるため。）
     */
    function convertValueToNumber(value: HTMLInputElement['value']) {
      if (!!value.trim() && Number.isFinite(Number(value))) {
        return Number(value)
      }
    }

    function onChange(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        if (modelModifiers.value.trim && !modelModifiers.value.lazy) {
          emit('update:modelValue', event.target.value.trim())
        } else if (modelModifiers.value.lazy) {
          if (modelModifiers.value.number) {
            const convertedValue = convertValueToNumber(event.target.value)

            if (convertedValue) {
              emit('update:modelValue', convertedValue)
              return
            }
          }

          if (modelModifiers.value.trim) {
            emit('update:modelValue', event.target.value.trim())
          } else {
            emit('update:modelValue', event.target.value)
          }
        }
      }
    }

    function onInput(event: Event) {
      if (
        !modelModifiers.value.lazy &&
        event.target instanceof HTMLInputElement
      ) {
        if (modelModifiers.value.number) {
          const convertedValue = convertValueToNumber(event.target.value)

          if (convertedValue) {
            emit('update:modelValue', convertedValue)
            return
          }
        }

        emit('update:modelValue', event.target.value)
      }
    }

    return () =>
      h('input', {
        ...attrs,
        type: type.value,
        value: props.modelValue,
        onChange,
        onInput,
      })
  },
})
