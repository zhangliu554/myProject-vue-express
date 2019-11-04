import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
//
// let url="http://localhost:3000"
// axios.get(url+'/product')
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
Vue.config.productionTip = false;

new Vue({
  el:"#app",
  render: h => h(App),
});
