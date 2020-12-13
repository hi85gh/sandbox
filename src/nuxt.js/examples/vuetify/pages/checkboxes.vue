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
  checked: boolean
  checkedValues: Value[]
}

/**
 * Vuetify の VCheckbox コンポーネントについて
 *
 * References:
 * - https://vuetifyjs.com/en/components/checkboxes/
 * - https://vuetifyjs.com/en/api/v-checkbox/
 */
export default defineComponent({
  setup() {
    const state = reactive<State>({
      checked: false,
      checkedValues: []
    })

    return {
      /* Public */
      ...toRefs(state),

      /* Readonly */
      values: computed(() => values),

      /* Methods */
      onChange: (value: boolean) => {
        state.checked = value
      },
      onChangeValues: (value: Value[]) => {
        state.checkedValues = value
      }
    }
  }
})
</script>

<template>
  <VContainer>
    <VRow tag="dl">
      <VCol cols="auto" tag="dt">Checked:</VCol>
      <VCol cols="auto" tag="dd">{{ checked }}</VCol>
    </VRow>
    <VRow tag="ul">
      <VCol cols="6" tag="li">
        <VCheckbox v-model="checked" label="Use v-model" />
      </VCol>
      <VCol cols="6" tag="li">
        <VCheckbox
          label="Do not use v-model"
          :value="checked"
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
      <VCol cols="auto" tag="dt">Checked (multiple):</VCol>
      <VCol cols="auto" tag="dd">{{ checkedValues }}</VCol>
    </VRow>
    <VRow>
      <VCol cols="6" tag="dl">
        <dt>Use v-model</dt>
        <dd v-for="value in values" :key="value">
          <VCheckbox v-model="checkedValues" :label="value" :value="value" />
        </dd>
      </VCol>
      <VCol cols="6" tag="dl">
        <dt>Do not use v-model</dt>
        <dd v-for="value in values" :key="value">
          <VCheckbox
            :input-value="
              /**
               * model.prop に設定する値
               * Reference: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/mixins/selectable/index.ts
               */
              checkedValues
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
