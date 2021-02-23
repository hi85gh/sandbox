<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import VueDraggable from 'vuedraggable'

type Item = {
  name: string
  nestedItems: Item[]
}

export default defineComponent({
  name: 'recursive',
  components: {
    VueDraggable,
  },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => [],
    },
  },
})
</script>

<template>
  <!--
    Warning: list prop is updated by draggable component using splice method.
    Reference: https://github.com/SortableJS/vue.draggable.next#list
  -->
  <VueDraggable :group="{ name: 'recursive' }" item-key="index" :list="items">
    <template #item="{ element }">
      <div class="container">
        <div>{{ element.name }}</div>
        <Recursive class="inner" :list="element.nestedItems" />
      </div>
    </template>
  </VueDraggable>
</template>

<style scoped>
.container {
  padding-top: 1em;
  padding-left: 1em;
  box-shadow: 0 0 0 1px currentColor;
}

.inner:empty {
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
