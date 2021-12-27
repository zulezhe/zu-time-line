/*
 * @Author: zulezhe
 * @Date: 2021-12-27 09:59:05
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-12-27 10:13:44
 * @Path: https://gitee.com/zulezhe/
 * @Description:
 */
// 导入组件，组件必须声明 name
import TimeLine from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
TimeLine.install = function(Vue) {
  Vue.component(TimeLine.name, TimeLine);
};
// 默认导出组件
export default TimeLine;
