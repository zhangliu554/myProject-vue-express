<template>
  <div>
    <cart-header title="购物车" left="icon-zuojiantou"></cart-header>
    <cart-section  v-if="cartInfo"  :data="cartInfo"></cart-section>
    <go-top></go-top>
  </div>
</template>

<script>
  import cartApi from "../../apis/Api";
  import cartSection from "../../components/cart/cartSection";
  import goTop from "../../components/common/goTop";
  import cartHeader from "../../components/common/header"
  export default {
    name: "cart",
    components:{
      "cartHeader":cartHeader,
      "go-top":goTop,
      "cart-section":cartSection
    },
    data(){
      return {
        cartInfo:[]
      }
    },
    methods:{
      _initShopInfo(){
        cartApi.getNewProductInfo(data => {
          this.cartInfo = data;
          // console.log(this.newProductInfo.new[0])
        })
      }
    },
    created() {
      this._initShopInfo()
    }
  }
</script>

<style scoped>

</style>