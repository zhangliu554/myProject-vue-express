<template>
  <div>
    <div class="topImg">
      <div v-if="this.localStorage" class="user"><img src="../../../public/assets/info/userInfo.jpg" alt=""><span>{{this.localStorage}}，欢迎您</span><span @click="loginOut" style="margin-left: 0.1rem; ">退出</span></div>
      <router-link :to="'/login'" v-else>登录/注册</router-link>
    </div>
    <p class="tabs">
      <span>默认购物频道</span>
      <span>男士MAN > </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "userTop",
    data(){
      return {
        localStorage: localStorage.getItem("users")
      }
    },
    methods:{
      loginOut(){
        localStorage.removeItem('users');
        //刷新页面
        location.reload()
      }
    }
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
  .tabs{
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
    line-height: 0.4rem;
    border-bottom: 0.1rem solid #eee;
    font-size: 0.14rem;
  }
.user{
  text-align: left;
  padding-left: 0.2rem;
}
.user span{
    border: 0;
    color: #fff;
    font-size: 0.16rem;
  }
.user img{
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: middle;
  margin-right: 0.2rem;
}
</style>