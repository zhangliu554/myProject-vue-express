<template>
    <ul class="footer">
      <router-link tag="li" :to="'/index'"><p class="iconfont icon-icon_shouye_x"></p><p>首页</p></router-link>
      <router-link tag="li" :to="'/type'"><p class="iconfont icon-leimupinleifenleileibie"></p><p>分类</p></router-link>
      <router-link tag="li" :to="'/shopping'"><p class="iconfont icon-huojian"></p><p>逛</p></router-link>
      <router-link tag="li" :to="'/cart'"><p class="iconfont icon-gouwuche"></p><p>购物车</p></router-link>
      <router-link tag="li" :to="'/user'"><p class="iconfont icon-wode"></p><p>我的</p></router-link>
    </ul>
</template>

<script>
  export default {
    name: "myFooter",
    data(){
      return {
        shows:0
      }
    },
  }
</script>

<style scoped>
  @import "../../assets/css/inconfont/iconfont.css";
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #fff;
    font-size: 0.12rem;
    text-align: center;
    border-top: 0.005rem solid #ccc;
    padding-top: 0.15rem;
    color: #666;
    z-index: 999;
  }
  .iconfont{
    line-height: 0.16rem;
  }
  .footer p:nth-child(2){
    line-height: 0.4rem;
  }
  .to-active{
    color: #000;
  }

</style>