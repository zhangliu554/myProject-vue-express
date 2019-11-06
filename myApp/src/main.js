import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
let bus = new Vue();
Vue.prototype.$bus = bus;
Vue.use(VueRouter);
new Vue({
  el:"#app",
  router,
  render: h => h(App),
});
