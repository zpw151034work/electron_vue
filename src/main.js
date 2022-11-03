import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// const electron = window.require("electron");
// Vue.prototype.$electron = electron;
//
const vueApp = createApp(App)
vueApp.use(ElementPlus)
vueApp.use(router).mount('#app')
// createApp(App).mount('#app')
