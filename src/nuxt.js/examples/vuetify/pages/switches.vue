<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs
} from '@nuxtjs/composition-api'

const values = ['foo', 'bar', 'baz'] as const

type Value = typeof values[number]

type State = {
  switched: boolean
  switchedValues: Value[]
}

/**
 * Vuetify の VSwitch コンポーネントについて
 *
 * References:
 * - https://vuetifyjs.com/en/components/switches/
 * - https://vuetifyjs.com/en/api/v-switch/
 */
export default defineComponent({
  setup() {
    const state = reactive<State>({
      switched: false,
      switchedValues: []
    })

    return {
      /* Public */
      ...toRefs(state),

      /* Readonly */
      values: computed(() => values),

      /* Methods */
      onChange: (value: boolean) => {
        state.switched = value
      },
      onChangeValues: (value: Value[]) => {
        state.switchedValues = value
      }
    }
  }
})
</script>

<template>
  <VContainer>
    <VRow tag="dl">
      <VCol cols="auto" tag="dt">Switch:</VCol>
      <VCol cols="auto" tag="dd">{{ switched }}</VCol>
    </VRow>
    <VRow tag="ul">
      <VCol cols="6" tag="li">
        <VSwitch v-model="switched" label="Use v-model" />
      </VCol>
      <VCol cols="6" tag="li">
        <VSwitch
          label="Do not use v-model"
          :value="switched"
          :true-value="
            /* false-value を使用する場合 true-value も必要 */
            true
          "
          :false-value="
            /* デフォルトの null から変更 */
            false
          "
          @change="onChange"
        />
      </VCol>
    </VRow>
    <VDivider />
    <VRow tag="dl">
      <VCol cols="auto" tag="dt">Switches:</VCol>
      <VCol cols="auto" tag="dd">{{ switchedValues }}</VCol>
    </VRow>
    <VRow>
      <VCol cols="6" tag="dl">
        <dt>Use v-model</dt>
        <dd v-for="value in values" :key="value">
          <VSwitch v-model="switchedValues" :label="value" :value="value" />
        </dd>
      </VCol>
      <VCol cols="6" tag="dl">
        <dt>Do not use v-model</dt>
        <dd v-for="value in values" :key="value">
          <VSwitch
            :input-value="
              /**
               * model.prop に設定する値
               * Reference: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/mixins/selectable/index.ts
               */
              switchedValues
            "
            :label="value"
            :value="value"
            @change="onChangeValues"
          />
        </dd>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
ul {
  padding-left: initial;
  list-style: none;
}
</style>
