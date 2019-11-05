<template>
  <div>
    <type-header title="个人中心"></type-header>
    <h1>分类</h1>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import typeHeader from '../../components/header/type-header'
  import myFooter from '../../components/footer'
  export default {
    name: "type",
    components:{
      "myFooter":myFooter,
      "typeHeader":typeHeader
    }
  }
</script>

<style scoped>
  /*body{*/
  /*  background: #ccc;*/
  /*}*/
</style>