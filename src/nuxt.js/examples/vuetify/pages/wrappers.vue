<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import AppTextField from '~/components/wrappers/AppTextField.vue'

export default defineComponent({
  components: {
    AppTextField,
  },
  setup() {
    const state = reactive({
      textField: '',
    })

    return {
      /* Public */
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <VContainer class="pb-16 pt-8 px-8">
    <VRow tag="dl">
      <VCol cols="auto" tag="dt">AppTextField:</VCol>
      <VCol cols="auto" tag="dd">{{ textField }}</VCol>
    </VRow>
    <VRow>
      <VCol>
        <AppTextField
          v-model="textField"
          label="label"
          placeholder="placeholder"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
