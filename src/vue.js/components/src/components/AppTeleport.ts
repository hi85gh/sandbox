import { PropType, Teleport, defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AppTeleport',
  inheritAttrs: false,
  props: {
    teleported: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    to: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      // @ts-expect-error (Error on v3.0.0)
      h(Teleport, { ...attrs, to: props.to }, props.teleported ? slots : {})
  },
})
