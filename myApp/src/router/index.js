import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import index from '../views/main/index'
import type from '../views/main/type'
import shopping from '../views/main/shopping'
import cart from '../views/main/cart'
import user from '../views/main/user'
import newProduct from "../components/newProduct/newProduct";
Vue.use(VueRouter);
let router = new VueRouter({
  linkActiveClass: 'to-active',
  // linkExactActiveClass: '',
  routes:[
    {path: '/',redirect: '/index'},
    { path:'/',
      component:main,
      children:[
        {path:"index",name:"index",component:index},
        {path:"type",name:"type",component:type},
        {path:"cart",name:"cart",component:cart},
        {path:"user",name:"user",component:user},
        {path:"shopping",name:"shopping",component:shopping},
        {path:"newProduct",name:"newProduct",component:newProduct},
      ]
    }

  ]
});
export default router;