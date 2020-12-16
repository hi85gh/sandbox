<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs
} from '@nuxtjs/composition-api'
import type { DataTableHeader } from 'vuetify'

const headers: DataTableHeader[] = [
  { sortable: false, text: 'Editable', value: 'editable' }
]

type State = {
  editingText: string
  items: { editable: string }[]
}

/**
 * Vuetify の VDataTable コンポーネントについて
 *
 * References:
 * - https://vuetifyjs.com/en/components/data-tables/
 * - https://vuetifyjs.com/en/api/v-data-table/
 */
export default defineComponent({
  setup(_, { emit }) {
    const state = reactive<State>({
      editingText: '',
      items: [
        { editable: 'text 1' },
        { editable: 'text 2' },
        { editable: 'text 3' }
      ]
    })

    return {
      /* Public */
      ...toRefs(state),
      internalItems: computed(() =>
        state.items.map((item, index) => ({ ...item, index }))
      ),

      /* Readonly */
      headers: computed(() => headers),

      /* Methods */
      onCancel: () => {
        console.log('VEditDialog cancel')
      },
      onClose: (index: number) => {
        console.log('VEditDialog close')
        state.items = state.items.map((item, i) =>
          i === index ? { ...item, editable: state.editingText } : item
        )
      },
      onOpen: (index: number) => {
        console.log('VEditDialog open')
        state.editingText = state.items[index].editable
      },
      onSave: () => {
        console.log('VEditDialog save')
      }
    }
  }
})
</script>

<template>
  <VContainer class="pb-16 pt-8 px-8">
    <VRow tag="dl">
      <VCol cols="auto" tag="dt">Table:</VCol>
      <VCol cols="auto" tag="dd">{{ items }}</VCol>
    </VRow>
    <VRow tag="dl">
      <VCol cols="12" tag="dt">Use v-model:</VCol>
      <VCol cols="12" tag="dd">
        <VDataTable :headers="headers" hide-default-footer :items="items">
          <template #[`item.editable`]="{ item }">
            <VEditDialog :return-value.sync="item.editable">
              {{ item.editable }}
              <template #input>
                <VTextField v-model="item.editable" label="Editable" />
              </template>
            </VEditDialog>
          </template>
        </VDataTable>
      </VCol>
    </VRow>
    <VRow tag="dl">
      <VCol cols="12" tag="dt">Do not use v-model:</VCol>
      <VCol cols="12" tag="dd">
        <VDataTable
          :headers="headers"
          hide-default-footer
          :items="internalItems"
        >
          <template #[`item.editable`]="{ item }">
            <VEditDialog
              :return-value="item.editable"
              @cancel="onCancel() /* Escape キーを押した場合のみ */"
              @close="onClose(item.index)"
              @open="onOpen(item.index)"
              @save="onSave() /* Enter キーを押した場合のみ */"
            >
              {{ item.editable }}
              <template #input>
                <VTextField v-model="editingText" label="Editable" />
              </template>
            </VEditDialog>
          </template>
        </VDataTable>
      </VCol>
    </VRow>
  </VContainer>
</template>
