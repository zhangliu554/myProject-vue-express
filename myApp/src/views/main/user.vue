<template>
  <div>
    <user-header title="个人中心" left="icon-zuojiantou" right="icon-liebiao"></user-header>
    <user-section></user-section>
    <go-top></go-top>
  </div>
</template>
<script>
  import goTop from "../../components/common/goTop";
  import userHeader from "../../components/common/header";
  import user from "../../components/user/user";
  export default {
    name: "user",
    components:{
      "userHeader":userHeader,
      "userSection":user,
      "go-top":goTop
    }
  }
</script>

<style scoped>

</style>