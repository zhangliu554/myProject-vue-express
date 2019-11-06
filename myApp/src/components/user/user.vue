<template>
  <div>
    <user-top></user-top>
    <user-order></user-order>
    <user-coupon></user-coupon>
  </div>
</template>

<script>
  import userTop from "./userTop";
  import order from './order';
  import coupon from "./coupon";
  export default {
    name: "user",
    components:{
      "userTop":userTop,
      "userOrder":order,
      "userCoupon":coupon
    }
  }
</script>

<style scoped>

</style>