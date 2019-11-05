<template>
  <div>
    <user-header title="个人中心" left="icon-shouye" right="icon-shouye"></user-header>
    <user-section></user-section>
  </div>
</template>
<script>
  import userHeader from "../../components/header/header";
  import user from "../../components/user/user";
  export default {
    name: "user",
    components:{
      "userHeader":userHeader,
      "userSection":user
    }
  }
</script>

<style scoped>

</style>