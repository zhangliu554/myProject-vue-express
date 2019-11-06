<template>
  <div>
    <my-shopping></my-shopping>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import shopping from "../../components/shopping/shoppingSection";
  import myFooter from '../../components/footer'
  export default {
    name: "guang"  ,
    components:{
      "myFooter":myFooter,
      "my-shopping":shopping
    }
  }
</script>

<style scoped>

</style>