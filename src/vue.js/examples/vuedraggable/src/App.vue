<script lang="ts">
import { defineComponent } from 'vue'
import Lists from './Lists.vue'
import Simple from './Simple.vue'

export default defineComponent({
  components: {
    Lists,
    Simple,
  },
})
</script>

<template>
  <p>
    <a href="https://sortablejs.github.io/vue.draggable.next/#/simple">
      Simple
    </a>
  </p>
  <Simple />
  <hr />
  <p>
    <a href="https://sortablejs.github.io/vue.draggable.next/#/two-lists">
      Lists
    </a>
  </p>
  <Lists />
</template>
