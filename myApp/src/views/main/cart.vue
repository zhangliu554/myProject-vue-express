<template>
  <div>
    <cart-header title="购物车" left="icon-zuojiantou" right="编辑"></cart-header>
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
        cartInfo:[],
        // goods:{}
      }
    },
    methods:{
      _initShopInfo(){
        cartApi.getNewProductInfo(data => {
          this.cartInfo = data;
        })
      },
    //   async _initPageData () {
    //     let { id } = this.$route.query;
    //     this.goods = await cartApi.getProductById(id);
    //     console.log(this.goods);
    //   }
    },
    created() {
      this._initShopInfo()
    },
    // async beforeMount(){
    //   await this._initPageData()
    // }
  }
</script>

<style scoped>

</style>