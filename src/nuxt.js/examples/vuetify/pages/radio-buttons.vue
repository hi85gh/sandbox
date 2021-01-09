<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
} from '@nuxtjs/composition-api'

const values = ['foo', 'bar', 'baz'] as const

type Value = typeof values[number]

type State = {
  radioGroup: Value | ''
}

/**
 * Vuetify の VRadioGroup, VRadio コンポーネントについて
 *
 * References:
 * - https://vuetifyjs.com/en/components/radio-buttons/
 * - https://vuetifyjs.com/en/api/v-radio-group/
 * - https://vuetifyjs.com/en/api/v-radio/
 */
export default defineComponent({
  setup() {
    const state = reactive<State>({
      radioGroup: '',
    })

    return {
      /* Public */
      ...toRefs(state),

      /* Readonly */
      values: computed(() => values),

      /* Methods */
      onChange: (value: Value) => {
        state.radioGroup = value
      },
      onClick: (value: Value) => {
        state.radioGroup = state.radioGroup === value ? '' : value
      },
    }
  },
})
</script>

<template>
  <VContainer class="pb-16 pt-8 px-8">
    <VRow tag="dl">
      <VCol cols="auto" tag="dt">Radio buttons:</VCol>
      <VCol cols="auto" tag="dd">{{ radioGroup }}</VCol>
    </VRow>
    <VRow>
      <VCol cols="4" tag="dl">
        <dt>Use v-model</dt>
        <dd>
          <VRadioGroup v-model="radioGroup">
            <VRadio
              v-for="value in values"
              :key="value"
              :label="value"
              :value="value"
            />
          </VRadioGroup>
        </dd>
      </VCol>
      <VCol cols="4" tag="dl">
        <dt>Do not use v-model</dt>
        <dd>
          <VRadioGroup :value="radioGroup" @change="onChange">
            <VRadio
              v-for="value in values"
              :key="value"
              :label="value"
              :value="value"
            />
          </VRadioGroup>
        </dd>
      </VCol>
      <VCol cols="4" tag="dl">
        <dt>Deselectable radio buttons</dt>
        <dd>
          <VRadioGroup :value="radioGroup">
            <VRadio
              v-for="value in values"
              :key="value"
              :label="value"
              :value="value"
              @click="onClick(value)"
            />
          </VRadioGroup>
        </dd>
      </VCol>
    </VRow>
  </VContainer>
</template>
