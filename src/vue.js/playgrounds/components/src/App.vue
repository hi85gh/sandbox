<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import AppCheckbox from './components/AppCheckbox'
import AppHeading from './components/AppHeading'
import AppInputField from './components/AppInputField'
import AppRadio from './components/AppRadio'
import AppTeleport from './components/AppTeleport'

export default defineComponent({
  name: 'App',
  components: {
    AppCheckbox,
    AppHeading,
    AppInputField,
    AppRadio,
    AppTeleport,
  },
  setup() {
    const state = reactive({
      appCheckboxModelValue: false,
      appInputFieldModelValue: '',
      appInputFieldModelValueLazy: '',
      appInputFieldModelValueNumber: '',
      appInputFieldModelValueTrim: '',
      appRadioModelValue: '',
      teleported: false,
    })

    return toRefs(state)
  },
})
</script>

<template>
  <!-- AppCheckbox -->
  <p>
    <label>
      <AppCheckbox v-model="appCheckboxModelValue" />
      {{ appCheckboxModelValue }}
    </label>
  </p>

  <!-- AppHeading -->
  <AppHeading href="#" tag="h1" target="_blank">
    AppHeading component
  </AppHeading>

  <!-- AppInputField -->
  <dl>
    <dt><code>v-model</code>:</dt>
    <dd>
      <p><AppInputField v-model="appInputFieldModelValue" /></p>
      <ul>
        <li>Value: {{ appInputFieldModelValue }}</li>
        <li>Type: {{ typeof appInputFieldModelValue }}</li>
      </ul>
    </dd>
    <dt><code>v-model.lazy</code>:</dt>
    <dd>
      <p><AppInputField v-model.lazy="appInputFieldModelValueLazy" /></p>
      <ul>
        <li>Value: {{ appInputFieldModelValueLazy }}</li>
        <li>Type: {{ typeof appInputFieldModelValueLazy }}</li>
      </ul>
    </dd>
    <dt><code>v-model.number</code>:</dt>
    <dd>
      <p><AppInputField v-model.number="appInputFieldModelValueNumber" /></p>
      <ul>
        <li>Value: {{ appInputFieldModelValueNumber }}</li>
        <li>Type: {{ typeof appInputFieldModelValueNumber }}</li>
      </ul>
    </dd>
    <dt><code>v-model.trim</code>:</dt>
    <dd>
      <p><AppInputField v-model.trim="appInputFieldModelValueTrim" /></p>
      <ul>
        <li>Value: {{ appInputFieldModelValueTrim }}</li>
        <li>Type: {{ typeof appInputFieldModelValueTrim }}</li>
      </ul>
    </dd>
  </dl>

  <!-- AppRadio -->
  <p>Value: {{ appRadioModelValue }}</p>
  <ul>
    <li v-for="key in ['foo', 'bar', 'baz']" :key="key">
      <label>
        <AppRadio v-model="appRadioModelValue" :value="key" />{{ key }}
      </label>
    </li>
  </ul>

  <!-- AppTeleport -->
  <button @click="teleported = !teleported">Toggle teleport</button>
  <AppTeleport to="#teleport-target" :teleported="teleported">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis
    natus itaque eius necessitatibus officia similique maiores doloremque
    numquam! Non, doloribus impedit? Beatae debitis nihil quasi reprehenderit,
    consequuntur vitae harum?
  </AppTeleport>
</template>
