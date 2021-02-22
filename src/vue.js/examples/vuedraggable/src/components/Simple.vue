<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import VueDraggable from 'vuedraggable'
import type { ChangeEvent } from 'vuedraggable'

export default defineComponent({
  components: {
    VueDraggable,
  },
  setup() {
    const state = reactive({
      items: [...Array(10)].map((_, index) => ({ id: ++index })),
    })

    return {
      items: computed({
        get: () => state.items,
        set: (value) => {
          state.items = value
        },
      }),
      onChange: (event: ChangeEvent<typeof state.items[number]>) => {
        if ('moved' in event) {
          console.log('moved', event.moved)
        }
      },
    }
  },
})
</script>

<template>
  <VueDraggable v-model="items" item-key="id" @change="onChange">
    <template #item="{ element }">
      <div class="item">{{ element.id }}</div>
    </template>
  </VueDraggable>
</template>

<style scoped>
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #000;
  color: #fff;
  font-size: 30px;
}
</style>
