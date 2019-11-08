<template>
  <div>
    <cart-list></cart-list>
    <div v-if="data.new">
      <cart-product-list :key="index" :data="item" v-for="(item,index) in data.new[cid]"></cart-product-list>
    </div>
  </div>
</template>

<script>
  import productList from "../common/productList";
  import cartList from "./cartList";
  export default {
    name: "cartSection",
    props:["data"],
    data(){
      return {
        cid:0
      }
    },
    components:{
      "cart-list":cartList,
      "cart-product-list":productList
    }
  }
</script>

<style scoped>

</style>