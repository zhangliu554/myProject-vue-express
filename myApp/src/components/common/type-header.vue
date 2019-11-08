<template>
  <div class="type-header">
    <input type="text" placeholder="搜索商品">
    <span class="iconfont icon-sousuo search"></span>
  </div>
</template>

<script>
  export default {
    name: "type-header"
  }
</script>

<style scoped>
  .type-header{
    padding: 0.05rem;
    text-align: center;
    background: #eee;
  }
  .type-header input{
    width: 93%;
    padding: 0 0.4rem;
    border: 0.005rem solid #fff;
    height: 0.4rem;
    position: relative;
    border-radius:0.4rem;
    font-size: 0.13rem;
  }
  .search{
    position: absolute;
    left:0.25rem;
    top: 0.12rem;
  }

</style>