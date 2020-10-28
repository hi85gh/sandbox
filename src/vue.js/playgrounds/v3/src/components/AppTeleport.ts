import { Teleport, defineComponent, h } from 'vue'
import type { Prop } from 'vue'

export default defineComponent({
  name: 'AppTeleport',
  inheritAttrs: false,
  props: {
    teleported: {
      type: Boolean,
      default: false,
    } as Prop<boolean>,
    to: {
      type: String,
      required: true,
    } as Prop<string>,
  },
  setup(props, { attrs, slots }) {
    return () =>
      // @ts-expect-error (Error on v3.0.0)
      h(Teleport, { ...attrs, to: props.to }, props.teleported ? slots : {})
  },
})
