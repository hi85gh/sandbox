import { computed, defineComponent, h } from 'vue'
import type { PropType } from 'vue'

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

const targets = ['_blank', '_parent', '_self', '_top'] as const

type Tag = typeof tags[number]

type Target = typeof targets[number]

export default defineComponent({
  name: 'AppHeading',
  inheritAttrs: false,
  props: {
    href: {
      type: String as PropType<string | undefined>,
      default: undefined,
      validator: (value: string) =>
        !value || /^(https?:\/\/.+|\/.*|#.*)$/.test(value),
    },
    tag: {
      type: String as PropType<Tag>,
      default: 'h1',
      validator: (value: Tag) => tags.includes(value),
    },
    target: {
      type: String as PropType<Target | undefined>,
      default: undefined,
      validator: (value: Target) => targets.includes(value),
    },
  },
  setup(props, { attrs, slots }) {
    const Heading = computed(() => h(props.tag, attrs, slots))

    return () => {
      if (props.href) {
        return h(
          'a',
          {
            href: props.href,
            target: props.target,
            ...(props.target === '_blank'
              ? { rel: 'noreferrer noopener' }
              : {}),
          },
          Heading.value
        )
      }

      return Heading.value
    }
  },
})
