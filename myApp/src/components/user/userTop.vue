<template>
  <div>
    <div class="topImg">
      <a href="#">登录/注册</a>
    </div>
    <p>
      <span>默认购物频道</span>
      <span>男士MAN > </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "userTop"
  }
</script>

<style scoped>
.topImg{
  background: url("../../../public/assets/user/header-bg.b98d69725a.jpg") no-repeat;
  background-size: cover;
  text-align: center;
  margin: 0 auto;
  height: 1.1rem;
  line-height: 1.1rem;
}
.topImg a{
  color: #fff;
  padding: 0.05rem 0.25rem;
  border: 0.02rem solid #ccc;
  margin: 0.2rem;
  font-size: 0.14rem;
}
</style>