<template>
  <div>
    <top-nav v-if="data.nav" :data="data.nav"></top-nav>
    <product-list v-if="data" :data="data" class="product-list"></product-list>
  </div>
</template>

<script>
  import productList from "./productList";
  import topNav from "./topnav";
  export default {
    name: "shopping",
    props:["data"],
    components:{
      "top-nav":topNav,
      "productList":productList
    },
  }
</script>

<style scoped>
.product-list{
  margin-bottom: 1rem;
}
</style>