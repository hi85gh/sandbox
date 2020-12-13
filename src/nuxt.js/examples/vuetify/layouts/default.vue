<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  useMeta,
} from '@nuxtjs/composition-api'
import type { MetaInfo } from 'vue-meta'

const noFoucClassName = 'no-fouc'

/**
 * `universal` モードで `generate` した場合に FOUC が発生するのを防ぐ
 *
 * Reference: https://github.com/nuxt-community/vuetify-module/issues/232
 */
const head: MetaInfo = {
  style: [
    {
      cssText: `.${noFoucClassName} { display: none }`,
      type: 'text/css',
    },
  ],
  script: [
    {
      hid: 'noFoucHead',
      pbody: true, // <body> の直後に追加
      innerHTML: `document.body.className='${noFoucClassName} '+document.body.className`, // エスケープの無効化
    },
  ],

  /**
   * `<script>` タグの埋め込み
   *
   * Reference: https://vue-meta.nuxtjs.org/api/#dangerouslydisablesanitizersbytagid
   */
  __dangerouslyDisableSanitizersByTagID: {
    noFoucHead: ['innerHTML'],
  },
}

export default defineComponent({
  setup(_, { root }) {
    if (process.server) {
      /* <script> タグが 2 回追加されないよう Server side でのみ実行 */
      useMeta(head)
    }

    onMounted(async () => {
      await root.$nextTick()

      /* 追加した class を Client side で削除 */
      document.body.className = document.body.className.replace(
        `${noFoucClassName} `,
        ''
      )
    })
  },
  head: {}, // Required for useMeta
})
</script>

<template>
  <VApp>
    <VAppBar app>
      <VToolbarTitle>Vuetify.js</VToolbarTitle>
    </VAppBar>
    <VMain>
      <Nuxt />
    </VMain>
    <VFooter app>
      <small>&copy; {{ new Date().getFullYear() }}</small>
    </VFooter>
  </VApp>
</template>
