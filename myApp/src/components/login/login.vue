<template>
  <div>
    <login-header></login-header>
    <div class="login-info">
      <p ><input class="phone" type="text" placeholder="请输入手机号、邮箱" v-model="username"></p>
      <p><input class="password" type="password" placeholder="请输入密码" v-model="password"></p>
    </div>
    <login-checking></login-checking>
    <div class="login">
      <button class="login-btn" @click="goTo">登录</button>
      <p><span>手机验证码登录</span><span>忘记密码？</span></p>
    </div>
  </div>
</template>

<script>
  import loginApi from '../../apis/Api'
  import loginChecking from "./loginChecking";
  import loginHeader from "./loginHeader";
  export default {
    name: "login",
    components:{
      "login-header":loginHeader,
      "login-checking":loginChecking
    },
    data(){
      return {
        username:"",
        password:""
      }
    },
    methods:{
      goTo(){
        loginApi.checkUserLogin(this.username,this.password,(data)=>{
          if(data.code == 200){
            localStorage.setItem("user",this.username);
            this.$router.go(-1)
          }else{
            alert("用户名或密码错误")
          }
        })
      }
    }
  }
</script>

<style scoped>
  input{
    border-bottom: 0.005rem solid #eee;
    width: 100%;
    font-size: 0.14rem;
    padding-left: 0.3rem;
    line-height: 0.2rem;
    padding-bottom: 0.05rem;
  }
  .login-info p{
    padding: 0 0.3rem;
    width: 98%;
    margin: 0 auto;
  }
  .login-info p:nth-child(1){
    padding-top: 0.3rem;
  }
  .login-info p:nth-child(2){
    padding-top: 0.3rem;
  }
  .phone{
    background: url("../../../public/assets/info/phone.jpg") no-repeat
  ;
    background-size: 0.2rem 0.2rem;
  }
  .password{
    background: url("../../../public/assets/info/lock.jpg") no-repeat,url("../../../public/assets/info/eyes.jpg") no-repeat right center ;
    background-size: 0.2rem 0.2rem;
  }
  .login{
    text-align: center;
  }
  .login-btn{
    width: 80%;
    margin:0 auto;
    line-height: 0.38rem;
    border:  none;
    background: #b0b0b0;
    color: #fff;
    font-size: 0.18rem;
  }
  .login p{
    display: flex;
    width: 80%;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;
    font-size: 0.12rem;
    padding: 0.1rem 0;
  }
</style>