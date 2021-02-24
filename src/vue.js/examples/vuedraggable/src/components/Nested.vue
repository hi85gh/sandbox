<script lang="ts">
import { defineComponent, ref } from 'vue'
import Recursive from './Recursive.vue'

type Items = InstanceType<typeof Recursive>['items']

export default defineComponent({
  components: {
    Recursive,
  },
  setup() {
    const items = ref<Items>([
      {
        name: 'foo-1',
        nestedItems: [
          { name: 'bar-1', nestedItems: [{ name: 'baz-1', nestedItems: [] }] },
        ],
      },
      {
        name: 'foo-2',
        nestedItems: [
          { name: 'bar-2', nestedItems: [{ name: 'baz-2', nestedItems: [] }] },
        ],
      },
      {
        name: 'foo-3',
        nestedItems: [
          { name: 'bar-3', nestedItems: [{ name: 'baz-3', nestedItems: [] }] },
        ],
      },
    ])

    return {
      items,
    }
  },
})
</script>

<template>
  <Recursive v-model:items="items" />
</template>
