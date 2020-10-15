// 导入组件，组件必须声明 name
import timeLine from './index.vue';

// 为组件提供 install 安装方法，供按需引入
timeLine.install = function(Vue) {
	Vue.component(timeLine.name, timeLine);
};
// 默认导出组件
export default timeLine;
