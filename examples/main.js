/*
 * @Author: zulezhe
 * @Date: 2020-12-27 11:59:05
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-12-27 10:10:52
 * @Path: https://gitee.com/zulezhe/
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TimeLine from "../packages";
Vue.config.productionTip = false;
// 注册组件库
Vue.use(TimeLine); 
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
