<template>
  <div class="login-info">
    <p><span class="phone"></span><input type="text" placeholder="请输入手机号、邮箱"></p>
    <p><span class="lock"></span><input type="password" placeholder="请输入密码"><span class="eyes"></span></p>
  </div>
</template>

<script>
  export default {
    name: "loginInfo"
  }
</script>

<style scoped>
  input{
    border-bottom: 0.005rem solid #eee;
    /*padding:0.2rem 0.2rem 0;*/
    width: 100%;
    font-size: 0.12rem;
    padding-left: 0.25rem;
    line-height: 0.2rem;
  }
  .login-info p{
    padding: 0.1rem;
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .login-info p span{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    /*vertical-align: middle;*/
  }
  .phone{
    background: url("../../../public/assets/info/phone.jpg") no-repeat;
    background-size: 100% 100%;
    /*left: 0;*/
    /*top: 0.1rem;*/
  }
  .lock{
    background: url("../../../public/assets/info/lock.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .eyes{
    background: url("../../../public/assets/info/eyes.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>