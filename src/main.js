import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

const app = createApp(App)

app.config.devtools = false

app.use(createPinia())
app.use(router)

app.mount('#app')

