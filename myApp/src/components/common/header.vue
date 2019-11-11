<template>
  <div class="header">
<!--    首页点击出来侧边导航-->
    <a v-if="flag" class="iconfont" :class="left" @click="getSideBar()" ></a>
<!--    返回箭头上一级页面-->
    <a v-else class="iconfont" :class="left" @click="back"></a>
    <span  v-if="title" class="title">{{title}}</span>
    <span v-else class="logo"><img src="../../assets/images/logo.png" alt=""></span>
    <a class="iconfont" :class="right"></a>
  </div>
</template>

<script>
  export default {
    name: "myHeader",
    props:["title","left","right","active","flag"],
    methods:{
      getSideBar(){
        this.$emit("changeShow","true")
      },
      back(){
        this.$router.go(-1);//返回上一层
      },
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
  .right{
    color: #fff;
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