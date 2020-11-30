/**
 * Vetur で CSS modules の型エラーを防ぐための型定義
 * Reference: https://github.com/vuejs/vetur/issues/2407
 */

/**
 * Vue.js v3
 */
import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $style: Record<string, string>
  }
}

/**
 * Vue.js v2
 */

/*
// import 文を削除すると Vetur で型エラーが発生するため注意
import Vue from 'vue' // eslint-disable-next-line @typescript-eslint/no-unused-vars

declare module 'vue/types/vue' {
  interface Vue {
    $style: Record<string, string>
  }
}
*/
