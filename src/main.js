import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Vue.config.productionTip = false

let instance = null;
function render() {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app"); //这里是挂载到自己的html中 基座中会拿到这个挂载后的html 将其插入进去
}
// 如果qiankun使用了该应用
if (window._POWERED_BY_QIANKUN__) {
  //默认添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 默认独立运行
if (!window._POWERED_BY_QIANKUN__) {
  render();
}
// 子组件的协议
export async function bootstrap(props) {}
export async function mount(props) {
  console.log(props);
  render(props);
}
export async function unmount(props) {
  instance.$destroy();
}
