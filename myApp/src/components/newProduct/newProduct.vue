<template>
  <div>
    <n-header title="新品到着" left="icon-shouye" ></n-header>
    <new-product-section v-if="newProductInfo" :data="newProductInfo"></new-product-section>
  </div>
</template>

<script>
  import newProductApi from "../../apis/Api"
  import newProductSection from "./newProductSection";
  import header from "../header/header";
  export default {
    name: "newProduct",
    components:{
      "n-header":header,
      "newProductSection":newProductSection
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
          console.log(this.newProductInfo)
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