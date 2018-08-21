import Vue from 'vue'
import './assets/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import App from './App.vue'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
