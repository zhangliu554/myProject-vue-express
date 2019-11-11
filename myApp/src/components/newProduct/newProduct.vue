<template>
  <div>
    <n-header title="新品到着" left="icon-zuojiantou" right="icon-liebiao"></n-header>
    <new-product-section v-if="newProductInfo" :data="newProductInfo"></new-product-section>
    <go-top></go-top>
  </div>
</template>

<script>
  import goTop from "../common/goTop";
  import newProductApi from "../../apis/Api"
  import newProductSection from "./newProductSection";
  import header from "../common/header";
  export default {
    name: "newProduct",
    components:{
      "n-header":header,
      "newProductSection":newProductSection,
      "go-top":goTop
    },
    data(){
      return {
        newProductInfo:[]
      }
    },
    methods:{
      _initShopInfo(){
        newProductApi.getNewProductInfo(data => {
          this.newProductInfo = data;
          console.log(this.newProductInfo.new[0])
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