<template>
  <div>
    <my-index-header></my-index-header>
    <h1>首页</h1>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import myFooter from '../../components/footer'
  import indexHeader from '../../components/header/index-header'
  export default {
    name: "index",
    components:{
      "myFooter":myFooter,
      "myIndexHeader":indexHeader
    }
  }
</script>

<style scoped>

</style>