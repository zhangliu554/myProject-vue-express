<template>
  <div>
    <my-shopping v-if="shoppingInfo" :data="shoppingInfo"></my-shopping>
    <my-footer></my-footer>
    <go-top></go-top>
  </div>
</template>

<script>
  import goTop from "../../components/common/goTop";
  import shoopingApi from "../../apis/Api";
  import shopping from "../../components/shopping/shoppingSection";
  import myFooter from '../../components/common/footer'
  export default {
    name: "guang"  ,
    components:{
      "myFooter":myFooter,
      "my-shopping":shopping,
      "go-top":goTop
    },
    data(){
      return {
        shoppingInfo:[]
      }
    },
    methods:{
      _initShopInfo(){
        shoopingApi.getShoppingInfo(data => {
          this.shoppingInfo = data;
          // console.log(this.shoppingInfo.shoppingList.list)
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