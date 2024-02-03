import '@/assets/css/site.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap' //JS
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

// vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// import AllRules from '@vee-validate/rules'
import * as AllRules from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'


// interface Rules {
//   [key: string]: any;
// }

// const rules: Rules = AllRules;


// // 使用 Object.keys 設置規則
// Object.keys(AllRules).forEach((rule) => {
//   // @ts-ignore
//    defineRule(rule, AllRules[rule])
//   // defineRule(rule, rules[rule]);
//       // defineRule(rule, (AllRules as Record<string, any>)[rule]);

// });
defineRule('required', AllRules.required);
defineRule('email', AllRules.email);
defineRule('min', AllRules.min);
defineRule('max', AllRules.max);

// Object.keys(AllRules).forEach((rule) => {
//   // @ts-ignore
//   defineRule(rule, (AllRules as Record<string, any>)[rule]);
// });

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
  validateOnBlur: true
  
})
setLocale('zh_TW')

const app = createApp(App)

// 在 $options 上擴展類型，告訴 TypeScript $axios 存在於全局配置中
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $axios: typeof axios
//   }
// }
// import serviceAxios from '@/utils/axiosInterceptor.js'
// app.config.globalProperties.$axios = serviceAxios

// 在開發環境下，保留 //console.log
// if (import.meta.env.MODE === 'development') {
//   (window as any).original//consoleLog = //console.log
//   //console.log = function () {
//     (window as any).original//consoleLog.apply(//console, arguments)
//   }
// } else {
//   // 在正式環境下，註解 //console.log
//   //console.log = function () {}
// }

//vee-validate 必填
app.directive('required', {
  mounted(el, binding) {
    if (binding.value) {
      const labelText = el.innerText
      el.innerHTML = `<span class="required text-danger">*</span>${labelText}`
    }
  }
})
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(VueSweetalert2)
app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
// app.provide('serviceAxios', serviceAxios)
app.mount('#app')
