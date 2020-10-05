<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import AppHeading from './components/AppHeading'
import AppInput from './components/AppInput'
import AppTeleport from './components/AppTeleport'

export default defineComponent({
  name: 'App',
  components: {
    AppHeading,
    AppInput,
    AppTeleport,
  },
  setup() {
    const state = reactive({
      appInputModelValue: 'Hello, World!',
      teleported: false,
    })

    return toRefs(state)
  },
})
</script>

<template>
  <AppHeading href="#" tag="h1" target="_blank">
    AppHeading component
  </AppHeading>
  <p><AppInput v-model="appInputModelValue" /></p>
  <p>value: {{ appInputModelValue }}</p>
  <button @click="teleported = !teleported">Toggle teleport</button>
  <AppTeleport to="#teleport-target" :teleported="teleported">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis
    natus itaque eius necessitatibus officia similique maiores doloremque
    numquam! Non, doloribus impedit? Beatae debitis nihil quasi reprehenderit,
    consequuntur vitae harum?
  </AppTeleport>
</template>
