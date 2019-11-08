<template>
  <div class="shopping-product-list">
    <div :key="index" v-for="(item,index) in data.list">
        <div :key="n.title" v-for="n in item">
          <p><img :src="n.img" alt=""></p>
          <p class="title">{{n.title}}</p>
          <p class="type">{{n.type}}</p>
          <p class="tip"><span>{{n.tip}}</span><span v-if="n.support"><span class="support">{{n.support}}</span><a class="iconfont icon-dianzan"></a></span></p>
        </div>
      <p-product :key="index" v-for="(f,index) in item" :data="f.product"></p-product>
    </div>
  </div>
</template>

<script>
  import product from "./product";
  export default {
    name: "list",
    props:["data"],
    components:{
      "p-product":product
    },
    data(){
      return{
        sid:0,
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
  .shopping-product-list img{
    width: 100%;
  }
  .title{
  font-size: 0.18rem;
    color: #000;
    font-weight: 900;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin: 0.1rem 0;
  }
  .type{
    color: #333;
    margin: 0.1rem 0;
    font-size: 0.14rem;
  }
  .tip{
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    color: #ccc;
    line-height: 0.2rem;
  }
  .support{
    vertical-align: middle;
  }
  .iconfont{
    /*font-size: 0.2rem;*/
    vertical-align: middle;
    margin: 0 .1rem;
  }
</style>