import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

import '@/assets/css/site.scss'
import 'bootstrap' //JS

import App from './App.vue'
import router from './router'

 
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
