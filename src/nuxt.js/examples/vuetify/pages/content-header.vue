<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<template>
  <div
    id="scroll-target"
    :style="{
      maxHeight: `calc(100vh - ${$vuetify.application.top}px)`,
    }"
    class="overflow-y-auto"
  >
    <VAppBar absolute prominent scroll-target="#scroll-target" shrink-on-scroll>
      <VAppBarNavIcon />
      <VToolbarTitle>Title</VToolbarTitle>
    </VAppBar>
    <div
      :style="{
        height: '1000px',

        /**
         * VAppBar コンポーネントに prominent プロパティを指定した場合、要素の高さは 128px
         * Reference: https://vuetifyjs.com/en/api/v-app-bar/#prominent
         */
        paddingTop: '128px',
      }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem eum
      delectus eius vero corrupti fugit rerum illum maxime, libero sunt. Esse
      incidunt asperiores recusandae eligendi distinctio laboriosam non fugiat.
    </div>
  </div>
</template>
