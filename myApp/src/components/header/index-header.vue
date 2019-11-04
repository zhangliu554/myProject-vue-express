<template>
  <div class="header">
    <span class="iconfont icon-shouye"></span>
    <span class="logo"><img src="../../assets/images/yohologo02.4b84a9fb7d.png" alt=""></span>
    <span class="iconfont icon-shouye"></span>
  </div>
</template>

<script>
  export default {
    name: "index-header"
  }
</script>

<style scoped>
  @import "../../assets/css/inconfont/iconfont.css";
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #222;
    line-height: 0.5rem;
    padding: 0 0.15rem;
  }
  .header img{
  height: 0.35rem;
  }
  .logo{
    padding-top: 0.1rem;
  }

</style>