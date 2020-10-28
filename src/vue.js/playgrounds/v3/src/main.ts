import { createApp } from 'vue'
import App from './App.vue'
import { StoreKey, store } from './store'

createApp(App).provide(StoreKey, store()).mount('#app')
