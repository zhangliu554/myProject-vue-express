<template>
    <ul class="footer">
      <li><a href="#/main/index"><p class="iconfont icon-shouye"></p><p>首页</p></a></li>
      <li><a href="#/main/type"><p class="iconfont icon-leimupinleifenleileibie"></p><p>分类</p></a></li>
      <li><a href="#/main/guang"><p class="iconfont icon-huojian"></p><p>逛</p></a></li>
      <li><a href="#/main/cart"><p class="iconfont icon-gouwuche1-copy"></p><p>购物车</p></a></li>
      <li><a href="#/main/user"><p class="iconfont icon-wode1"></p><p>我的</p></a></li>
    </ul>
</template>

<script>
  export default {
    name: "myFooter"
  }
</script>

<style scoped>
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
  }
  .iconfont{
    line-height: 0.16rem;
  }
  .footer p:nth-child(2){
    line-height: 0.4rem;
  }
  .footer a{
    color: #000;
  }
  @import "../assets/css/inconfont/iconfont.css";
</style>