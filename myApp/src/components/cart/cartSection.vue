<template>
  <div>
    <cart-product  v-if="localStorage"></cart-product>
    <cart-list v-else></cart-list>
    <div class="cart-list-new">
      <p>为你优选新品</p>
    </div>
    <div v-if="data.new">
      <cart-product-list :key="index" :data="item" v-for="(item,index) in data.new[cid]"></cart-product-list>
    </div>
  </div>
</template>

<script>
  import cartProduct from "./cartProduct";
  import productList from "../common/productList";
  import cartList from "./cartList";
  export default {
    name: "cartSection",
    props:["data"],
    data(){
      return {
        cid:0,
        localStorage:localStorage.getItem('users')
      }
    },
    components:{
      "cart-list":cartList,
      "cart-product-list":productList,
      "cart-product":cartProduct
    },
  }
</script>

<style scoped>
  .cart-list-new{
    padding:0.3rem;
    text-align: center;
    font-size: 0.18rem;
  }
</style>