/**
 * Vue.js v3
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * Vue.js v2
 */

/*
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
*/
