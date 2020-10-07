<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import AppHeading from './components/AppHeading'
import AppInputField from './components/AppInputField'
import AppTeleport from './components/AppTeleport'

export default defineComponent({
  name: 'App',
  components: {
    AppHeading,
    AppInputField,
    AppTeleport,
  },
  setup() {
    const state = reactive({
      appInputFieldModelValue: 'Hello, World!',
      teleported: false,
    })

    return toRefs(state)
  },
})
</script>

<template>
  <!-- AppHeading -->
  <AppHeading href="#" tag="h1" target="_blank">
    AppHeading component
  </AppHeading>

  <!-- AppInputField -->
  <p>value: {{ appInputFieldModelValue }}</p>
  <p><AppInputField v-model="appInputFieldModelValue" /></p>

  <!-- AppTeleport -->
  <button @click="teleported = !teleported">Toggle teleport</button>
  <AppTeleport to="#teleport-target" :teleported="teleported">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis
    natus itaque eius necessitatibus officia similique maiores doloremque
    numquam! Non, doloribus impedit? Beatae debitis nihil quasi reprehenderit,
    consequuntur vitae harum?
  </AppTeleport>
</template>
