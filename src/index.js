// import Component from './lib/component.vue';
import TimeLine from './components/TimeLine/index.vue';

// const components = [Component, TimeLine];
const components = [TimeLine];

// export { Component, TimeLine };
export { TimeLine };

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
