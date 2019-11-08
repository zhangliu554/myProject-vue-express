<template>
  <div>
    <div v-if="data.nav" class="new-list-nav">
      <new-left class="new-left" :data="data.nav"></new-left>
      <new-right class="new-right" :data="data.navList[wid]"></new-right>
    </div>
    <div v-else>
      <new-product-list v-if="data" :data="data"></new-product-list>
    </div>

  </div>
</template>
<script>
  import productList from "../common/productList";
  import newLeft from "./newLeft";
  import newRight from "./newRight";
  export default {
    name: "newList",
    props:["data"],
   components:{
      "new-left":newLeft,
      "new-right":newRight,
     "new-product-list":productList
   },
    data(){
      return {
        wid:0
      }
    },
    mounted(){
      this.$bus.$on("sec",(qid)=>{
        this.wid = qid
      });
    }
  }
</script>

<style scoped>
  .new-list-nav{
    display: flex;
    justify-content: space-between;
  }
  .new-left,.new-right{
    width: 50%;
  }
</style>