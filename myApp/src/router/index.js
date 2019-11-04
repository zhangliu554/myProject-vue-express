import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import index from '../views/tabs/index'
import type from '../views/tabs/type'
import guang from '../views/tabs/guang'
import cart from '../views/tabs/cart'
import user from '../views/tabs/user'
Vue.use(VueRouter);
let router = new VueRouter({
  routes:[
    {path: '/',redirect: '/main/index'},
    { path:'/main',
      component:main,
      children:[
        {path:"index",component:index},
        {path:"type",component:type},
        {path:"cart",component:cart},
        {path:"user",component:user},
        {path:"guang",component:guang},
      ]
    }
  ]
});
export default router;