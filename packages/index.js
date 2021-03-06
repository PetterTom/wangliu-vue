// 将所有的组件引入进来
import Hello from "./components/test.vue";

const components = [Hello]; // 将上述组件保存到一个数组

// 定义install方法，它将作为export暴露的对象的方法被Vue.use调用
const install = function(Vue) {
  // 判断当前组件是否已被安装过，如果已安装过则不再安装
  if (install.installed) return;
  install.installed = true;

  // 遍历components数组，依次注册每个组件
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ...components //将插件暴露出去，这样可以按需引入
};
// 如果只需要部分组件，请使用import {button} from '';
// Vue.component(Button)的语法手动注册组件
// 这样便可以实现按需引入
