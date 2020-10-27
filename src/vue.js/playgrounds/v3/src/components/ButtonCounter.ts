import { defineComponent, h } from 'vue'
import { useStore } from '../composables/use-store'

export default defineComponent({
  name: 'ButtonCounter',
  setup() {
    const store = useStore()

    return () =>
      h(
        'button',
        {
          onClick: () => {
            store.counter.setClick(store.counter.click + 1)
          },
        },
        'click'
      )
  },
})
