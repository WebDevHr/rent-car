import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'
import DropdownMenu from 'v-dropdown-menu'
import "./assets/style/index.scss";


const head = createHead()
const app = createApp(App)

app.use(DropdownMenu)
app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
