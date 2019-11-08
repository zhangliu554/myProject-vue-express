<template>
  <div>
    <div v-if="sid == 0">
      <p-banner v-if="data.banner" :data="data.banner"></p-banner>
    </div>
    <p-list  v-if="data.shoppingList"  :data="data.shoppingList[sid]" class="p-list"></p-list>
  </div>
</template>

<script>
  import list from "./list";
  // import product from "./product";
  import banner from '../common/banner'
  export default {
    name: "productList",
    props:["data"],
    components:{
      "p-banner":banner,
      "p-list":list,
      // "p-product":product
    },
    data(){
      return {
        sid:0
      }
    },
    mounted(){
      this.$bus.$on("num",(pid)=>{
        this.sid = pid
      });
    }
  }
</script>

<style scoped>
  .p-list{
    padding: 0 0.15rem;
  }
</style>