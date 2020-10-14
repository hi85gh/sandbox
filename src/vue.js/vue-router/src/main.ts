import { createApp, defineComponent, h } from 'vue'
import {
  RouterLink,
  RouterView,
  createRouter,
  createWebHistory,
  onBeforeRouteLeave,
} from 'vue-router'

const App = defineComponent({
  name: 'App',
  render() {
    return h(RouterView)
  },
})

const Home = defineComponent({
  name: 'Home',
  render() {
    return h(RouterLink, { to: '/foo' }, 'Link to Foo')
  },
})

const Foo = defineComponent({
  name: 'Foo',
  setup() {
    /* コンポーネントから離れる際の処理 */
    onBeforeRouteLeave((to, from) =>
      window.confirm(`Move from ${from.fullPath} to ${to.fullPath}.`)
    )

    return () => h(RouterLink, { to: '/' }, 'Link to Home')
  },
})

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
