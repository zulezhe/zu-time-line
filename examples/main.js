import Vue from 'vue'
import App from './App.vue'
import router from './router';
import wTimeLine from "../packages"
Vue.config.productionTip = false
// 注册组件库
Vue.use(wTimeLine)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
