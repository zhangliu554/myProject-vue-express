<template>
  <div>
    <cart-header title="购物车" left="icon-shouye"></cart-header>
    <h1>购物车</h1>
  </div>
</template>

<script>
  import cartHeader from "../../components/header/header"
  export default {
    name: "cart",
    components:{
      "cartHeader":cartHeader
    }
  }
</script>

<style scoped>

</style>