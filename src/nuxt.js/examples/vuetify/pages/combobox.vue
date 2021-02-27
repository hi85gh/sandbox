<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  toRef,
} from '@nuxtjs/composition-api'
import { useDebounceFn } from '@vueuse/core'
import { VCombobox } from 'vuetify/lib'

type VComboboxRef =
  | (InstanceType<typeof VCombobox> & {
      /** @See {@link https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSelect/VSelect.ts#L856 } */
      setMenuIndex: (index: number) => void
    })
  | null

type State = {
  items: string[]
  model: string
  value: string
}

const items = [
  'foo',
  'bar',
  'foobar',
  'baz',
  'qux',
  'quux',
  'corge',
  'grault',
  'garply',
  'waldo',
  'fred',
  'plugh',
  'xyzzy',
  'thud',
]

export default defineComponent({
  setup() {
    const vComboboxRef = ref<VComboboxRef>(null)
    const state = reactive<State>({
      items,
      model: '',
      value: '',
    })
    const debounceFn = useDebounceFn((value: string) => {
      if (value !== state.value) {
        state.value = value
        state.items = items.filter(
          (text) =>
            text.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
        )
      }

      if (vComboboxRef.value) {
        /* VCombobox コンポーネント内部の listIndex の値をリセット */
        vComboboxRef.value.setMenuIndex(-1)
      }
    }, 300)

    return {
      vComboboxRef,

      /* Readonly */
      filteredItems: computed(() => state.items),
      items: computed(() => items),
      value: computed(() => state.value),

      /* Public */
      model: toRef(state, 'model'),

      /* Methods */
      onSearchInputUpdate: (value: string | null) => {
        /* VCombobox コンポーネントの value に空文字を渡すと null が emit されるため変換 */
        const newValue = value || ''
        debounceFn(newValue)
      },
    }
  },
})
</script>

<template>
  <VContainer class="pb-16 pt-8 px-8">
    <VRow dense tag="ul">
      <VCol class="text-caption" cols="12" tag="li">
        VCombobox コンポーネントをキーで操作すると
        <span style="color: #ff5252">
          Cannot read property 'click' of undefined
        </span>
        のエラーが発生
      </VCol>
      <VCol class="text-caption" cols="12" tag="li">
        VCombobox コンポーネント内部の listIndex の値に問題あり
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="6">
        <VCombobox v-model="model" :items="items" label="Normal" />
      </VCol>
      <VCol cols="6">
        <VCombobox
          ref="vComboboxRef"
          :items="filteredItems"
          label="Bugfix"
          menu-props="auto"
          no-filter
          :value="value"
          @update:search-input="onSearchInputUpdate"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
