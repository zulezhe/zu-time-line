import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Components from '../';
import('../package.json').then((config) => import(`../dist/${config.name}.css`));
console.log(Components);
Vue.use(Components);

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
