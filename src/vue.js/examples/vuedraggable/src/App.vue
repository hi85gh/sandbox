<script lang="ts">
import { defineComponent } from 'vue'
import Lists from './components/Lists.vue'
import Nested from './components/Nested.vue'
import Simple from './components/Simple.vue'

export default defineComponent({
  components: {
    Lists,
    Nested,
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
  <hr />
  <p>
    <a href="https://sortablejs.github.io/vue.draggable.next/#/nested-example">
      Nested
    </a>
  </p>
  <Nested />
</template>
