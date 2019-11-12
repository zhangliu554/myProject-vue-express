<template>
  <div class="login-header">
    <p><span  @click="goBack"> ＜ </span><span @click="goRegister">注册</span></p>
    <p>Yoho!Family账号可登录Yoho!Buy有货</p>
  </div>
</template>
<script>
  export default {
    name: "loginHeader",
    methods:{
      goBack(){
        this.$router.back(-1);
      },
      goRegister(){
        this.$router.push("register")
      }
    }
  }
</script>

<style scoped>
  .login-header{
    background: url("../../../public/assets/user/01cf2c685c5d7ddbb21b7c7b961da77454.jpg") no-repeat;
    background-size: cover;
    height: 1.4rem;
    width: 100%;
    position: relative;
  }
  .login-header p{
    color: #fff;
    font-size: 0.12rem;
  }
  .login-header p:nth-child(1){
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.4rem;
  }
  .login-header p span:nth-child(1){
       display: inline-block;
       height: 0.25rem;
       width: 0.25rem;
       border-radius: 50%;
       border: 0.01rem solid #fff;
       text-align: center;
       line-height: 0.2rem;
       font-size: 0.2rem;
       font-weight: 900;
     }
  .login-header p span:nth-child(2){
    display: inline-block;
    height: 0.25rem;
    width: 0.5rem;
    border-radius: 0.25rem;
    border: 0.01rem solid #fff;
    text-align: center;
    line-height: 0.23rem;
  }
  .login-header p:nth-child(2){
    /*text-align: center;*/
    position: absolute;
    bottom: 0.1rem;
    left: 0.9rem;
  }
</style>