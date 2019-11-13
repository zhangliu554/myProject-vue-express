<template>
  <div class="register">
    <p class="login-header"><span @click="$router.back(-1)"> ＜</span><span>注册</span></p>
    <div class="login-info">
      <p ><input class="phone" type="text" placeholder="请输入手机号、邮箱" v-model="username"></p>
      <p><input class="password" type="password" placeholder="请输入密码" v-model="password"></p>
    </div>
   <register-checking></register-checking>
    <div class="login">
      <button class="login-btn" @click="goTo">注册</button>
      <p>注册则表示已阅读并同意</p>
      <p class="agree"><a href="#">有货用户服务协议</a><a href="#">有货隐私条款</a></p>
    </div>
  </div>
</template>

<script>
  import registerApi from '../../apis/Api'
  import checking from '../login/loginChecking'
  export default {
    name: "myRegister",
    components:{
     "register-checking":checking
    },
    data(){
      return {
        username:"",
        password:""
      }
    },
    methods:{
      goTo(){
        registerApi.checkUserRegister(this.username,this.password,(data)=>{
          if(data.code == 200){
            alert("注册成功成功，请登录");
            this.$router.push("login")
          }else{
            alert("用户名已存在，请重新注册")
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-header {
    display: flex;
    /*justify-content: space-between;*/
    padding: 0.2rem 0.3rem;
  }
  .login-header span:nth-child(1){
    display: inline-block;
    height: 0.25rem;
    width: 0.25rem;
    border-radius: 50%;
    border: 0.01rem solid #ccc;
    text-align: center;
    line-height: 0.2rem;
    font-size: 0.2rem;
    font-weight: 900;
  }
  .login-header span:nth-child(2){
    display: inline-block;
    margin-left: 1.2rem;
  }
  .register{
    /*width: 80%;*/
    text-align: center;
  }
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
  .login-btn{
    width: 80%;
    margin:0.1rem auto 0.3rem;
    line-height: 0.38rem;
    border:  none;
    background: #b0b0b0;
    color: #fff;
    font-size: 0.18rem;
  }
  .login p{
    text-align: left;
    margin-left: 0.4rem;
    font-size: 0.12rem;
    margin-bottom: 0.05rem;
  }
  .login a{
    text-decoration: underline;
    color: red;
    margin-right: 0.1rem;
  }
</style>