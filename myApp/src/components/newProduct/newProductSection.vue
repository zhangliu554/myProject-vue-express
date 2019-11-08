<template>
  <div class="new-section">
    <a href="#"><img :src="data.img" alt=""></a>
    <n-nav v-if="data.nav" :data="data.nav"></n-nav>
    <div v-if="data.new">
      <n-newList :key="index"  :data="item" v-for="(item,index) in data.new[pid]"></n-newList>
    </div>
  </div>
</template>

<script>
import newNav from "./newNav";
import newList from "./newList";
  export default {
    name: "newProduct",
    components:{
     "n-nav":newNav,
      "n-newList":newList
    },
    props:["data"],
    data(){
      return {
        pid:0
      }
    },
    mounted(){
      this.$bus.$on("num",(nid)=>{
        this.pid = nid
      });
    }
  }
</script>

<style scoped>
.new-section img{
  width: 100%;
}
</style>