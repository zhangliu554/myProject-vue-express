<template>
  <div class="header">
    <router-link tag="span" :to="'/index'"><a class="iconfont" :class="left" @click="getSideBar()"></a></router-link>
    <span  v-if="title" class="title">{{title}}</span>
    <span v-else class="logo"><img src="../../assets/images/logo.png" alt=""></span>
    <a href="#" class="iconfont" :class="right"></a>
  </div>
</template>

<script>
  export default {
    name: "myHeader",
    props:["title","left","right","active"],
    methods:{
      getSideBar(){
        this.$emit("changeShow","true")
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/inconfont/iconfont.css";
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #333;
    line-height: 0.5rem;
    padding: 0 0.15rem;
    color: #fff;
    text-align: center;
    height: 0.5rem;
  }
  .header img{
    height: 0.35rem;
  }
  .logo{
    padding-top: 0.1rem;
  }
  .iconfont{
    height: 0.16rem;
    color: #fff;
  }
  .title{
    font-size: 0.21rem;
  }
  /*.router-link-active .boys{ //.router-link-active 指定*/
  /*  color: #000;*/
  /*  background:#ccc;*/
  /*}*/
  /*.router-link-active .girls{ //.router-link-active 指定*/
  /*  color: #fff;*/
  /*  background:pink;*/
  /*}*/
  /*.router-link-active .kids{ //.router-link-active 指定*/
  /*  color: #fff;*/
  /*  background:blue;*/
  /*}*/
  /*.router-link-active .lifeStyle{ //.router-link-active 指定*/
  /*  color: #000;*/
  /*  background:#ccc;*/
  /*}*/
</style>