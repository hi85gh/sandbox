<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

type ChangeEvent = Partial<{
  added: {
    newIndex: number
    element: any
  }
  removed: {
    oldIndex: number
    element: any
  }
  moved: {
    newIndex: number
    oldIndex: number
    element: any
  }
}>

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const state = reactive({
      items: [...Array(100)].map((_, index) => ({ id: ++index })),
    })
    const items = computed({
      get: () => state.items,
      set: (value) => {
        state.items = value
      },
    })
    const onChange = (event: ChangeEvent) => {
      if (event.moved) {
        console.log('moved', event.moved)
      }
    }

    return {
      items,
      onChange,
    }
  },
})
</script>

<template>
  <draggable v-model="items" @change="onChange">
    <div v-for="item in items" :key="item" class="item">
      {{ item.id }}
    </div>
  </draggable>
</template>

<style scoped>
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  background: #000;
  color: #fff;
  font-size: 30px;
}
</style>
