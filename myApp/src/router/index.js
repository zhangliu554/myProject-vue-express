import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import index from '../views/main/index'
import type from '../views/main/type'
import shopping from '../views/main/shopping'
import cart from '../views/main/cart'
import user from '../views/main/user'
Vue.use(VueRouter);
let router = new VueRouter({
  linkActiveClass: 'to-active',
  // linkExactActiveClass: '',
  routes:[
    {path: '/',redirect: '/main/index'},
    { path:'/main',
      component:main,
      children:[
        {path:"index",component:index},
        {path:"type",component:type},
        {path:"cart",component:cart},
        {path:"user",component:user},
        {path:"shopping",component:shopping},
      ]
    }
  ]
});
export default router;