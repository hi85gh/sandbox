<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import type { PropType } from 'vue'
import VueDraggable from 'vuedraggable'
import type { ChangeEvent } from 'vuedraggable'

type Item = {
  name: string
  nestedItems: Item[]
}

type State = {
  addedItemIndex: number | undefined
  draggedLayer: number | undefined
  items: Item[]
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
    layer: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const state = reactive<State>({
      addedItemIndex: undefined,
      draggedLayer: undefined,
      items: props.items,
    })

    watch(
      () => props.items,
      (value) => {
        state.items = value
      },
      { deep: true }
    )

    return {
      onChange: (value: ChangeEvent<Item>) => {
        if ('added' in value) {
          /* ドロップ先に item を追加 */
          const { element, newIndex } = value.added
          state.items.splice(newIndex, 0, element)

          if (
            state.draggedLayer !== undefined &&
            state.draggedLayer > props.layer
          ) {
            /* ドロップ先が上層だった場合は追加先の index を保存 */
            state.addedItemIndex = newIndex
          }
        }

        if ('moved' in value) {
          /* ドラッグした item を削除しドロップ先に item を追加 */
          const { element, newIndex, oldIndex } = value.moved
          state.items.splice(oldIndex, 1)
          state.items.splice(newIndex, 0, element)
        }

        if ('removed' in value) {
          /* ドラッグした item を削除 */
          state.items.splice(value.removed.oldIndex, 1)
        }

        emit('update:items', state.items)
      },
      onDraggedLayerUpdate: (value: State['draggedLayer']) => {
        state.draggedLayer = value
        emit('update:dragged-layer', state.draggedLayer)
      },
      onItemsUpdate: (value: Item[], index: number) => {
        /* ドロップ先が上層かつ配列の前方だった場合は index を変更 */
        const targetIndex =
          state.addedItemIndex !== undefined && state.addedItemIndex <= index
            ? index + 1
            : index

        if (state.addedItemIndex !== undefined) {
          state.addedItemIndex = undefined
        }

        state.items.splice(targetIndex, 1, {
          ...state.items[targetIndex],
          nestedItems: value,
        })

        emit('update:items', state.items)
      },
      onEnd: () => {
        state.draggedLayer = undefined
        emit('update:dragged-layer', state.draggedLayer)
      },
      onStart: () => {
        state.draggedLayer = props.layer
        emit('update:dragged-layer', state.draggedLayer)
      },
    }
  },
})
</script>

<template>
  <VueDraggable
    :group="{ name: 'recursive' }"
    item-key="index"
    :model-value="items"
    @end="onEnd"
    @start="onStart"
    @change="onChange"
  >
    <template #item="{ element, index }">
      <div class="container">
        <div>{{ element.name }}</div>
        <Recursive
          class="inner"
          :items="element.nestedItems"
          :layer="layer + 1"
          @update:dragged-layer="onDraggedLayerUpdate"
          @update:items="($event) => onItemsUpdate($event, index)"
        />
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
