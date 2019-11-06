<template>
  <div class="nav-list clear_fix">
    <div class="left-nav">
      <left-nav :key="rid" v-for="(recommend,rid) in data[sid].recommend" :data="recommend" :rid="rid"></left-nav>
    </div>
  <div class="right-nav">
    <right-nav :key="Arid" v-for="(allRecommend,Arid) in data[sid].allRecommend"  :data="allRecommend" :rid="Arid"></right-nav>
  </div>
  </div>
</template>

<script>
  import rightNav from "./rightNav";
  import leftNav from "./leftNav";
  export default {
    name: "navList",
    components:{
      "rightNav":rightNav,
      "leftNav":leftNav
    },
    data(){
      return{
        sid:0
      }
    },
    props:["data"],
    mounted(){
      this.$bus.$on("num",(rid)=>{
        this.sid = rid
      });
    }
  }
</script>

<style scoped>
  .nav-list{
    display: flex;
  }
.left-nav{
  width: 40%;
  background: #eee;
}
.right-nav{
  width: 60%;
  margin-bottom: 0.5rem;
}
</style>