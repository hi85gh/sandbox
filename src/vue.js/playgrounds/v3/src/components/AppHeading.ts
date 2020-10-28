import { defineComponent, h } from 'vue'
import type { Prop } from 'vue'

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
const targets = ['_blank', '_parent', '_self', '_top'] as const

type Tag = typeof tags[number]
type Target = typeof targets[number]

export default defineComponent({
  name: 'AppHeading',
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required: false,
      validator: (value: string) => /^(https?:\/\/.+|\/.*|#.*)$/.test(value),
    } as Prop<string>,
    tag: {
      type: String,
      required: false,
      validator: (value: Tag) => tags.includes(value),
    } as Prop<Tag>,
    target: {
      type: String,
      required: false,
      validator: (value: Target) => targets.includes(value),
    } as Prop<Target>,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { href, tag, target } = props
      const Heading = h(tag || 'h1', attrs, slots)

      if (href) {
        return h(
          'a',
          {
            href: props.href,
            target,
            ...(target === '_blank' ? { rel: 'noreferrer noopener' } : {}),
          },
          Heading
        )
      }

      return Heading
    }
  },
})
