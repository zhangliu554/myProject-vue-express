<template>
  <div>
    <a href="#"><img src="" alt=""></a>
    <n-nav></n-nav>
    <n-newList></n-newList>
  </div>
</template>

<script>
import newNav from "./newNav";
import newList from "./newList";
  export default {
    name: "newProduct",
    components:{
     "n-nav":newNav,
      "n-newList":newList
    },
    props:["data"]
  }
</script>

<style scoped>

</style>