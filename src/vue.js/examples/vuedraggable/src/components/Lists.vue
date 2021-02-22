<script lang="ts">
import { GroupOptions } from 'sortablejs'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import VueDraggable from 'vuedraggable'

export default defineComponent({
  components: {
    VueDraggable,
  },
  setup() {
    const state = reactive({
      foo: [...Array(5)].map((_, index) => ({ id: ++index, list: 'foo' })),
      bar: [...Array(5)].map((_, index) => ({ id: ++index, list: 'bar' })),
      baz: [...Array(5)].map((_, index) => ({ id: ++index, list: 'baz' })),
    })

    return {
      ...toRefs(state),
      group: computed<GroupOptions>(() => ({ name: 'lists' })),
    }
  },
})
</script>

<template>
  <div class="container">
    <VueDraggable v-model="foo" group="group" item-key="id">
      <template #item="{ element }">
        <div class="item">{{ element.list }}{{ element.id }}</div>
      </template>
    </VueDraggable>
    <VueDraggable v-model="bar" group="group" item-key="id">
      <template #item="{ element }">
        <div class="item">{{ element.list }}{{ element.id }}</div>
      </template>
    </VueDraggable>
    <VueDraggable v-model="baz" group="group" item-key="id">
      <template #item="{ element }">
        <div class="item">{{ element.list }}{{ element.id }}</div>
      </template>
    </VueDraggable>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.container > * {
  box-sizing: border-box;
  min-width: 140px;
  padding: 10px;
}

.container > :nth-child(1) {
  background-color: #f00;
}

.container > :nth-child(2) {
  background-color: #0f0;
}

.container > :nth-child(3) {
  background-color: #00f;
}

.item {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  font-size: 30px;
  color: #fff;
  background-color: #000;
}
</style>
