<template>
  <div>
    <login-header></login-header>
    <login-info></login-info>
  </div>
</template>

<script>
  import loginInfo from "./loginInfo";
  import loginHeader from "./loginHeader";
  export default {
    name: "login",
    components:{
      "login-header":loginHeader,
      "login-info":loginInfo
    }
  }
</script>

<style scoped>

</style>