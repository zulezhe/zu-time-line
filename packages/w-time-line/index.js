// 导入组件，组件必须声明 name
import wTimeLine from './index.vue';

// 为组件提供 install 安装方法，供按需引入
wTimeLine.install = function(Vue) {
	Vue.component(wTimeLine.name, wTimeLine);
};
// 默认导出组件
export default wTimeLine;
