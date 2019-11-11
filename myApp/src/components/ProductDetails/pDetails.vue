<template>
  <div>
    <details-header title="商品详情" left="icon-zuojiantou" right="icon-liebiao"></details-header>
<!--    <details-banner v-if="goods.item" :pdata="goods.item.img" class="banner"></details-banner>-->
    <a href="#" class="banner" v-if="goods.item"><img :src="goods.item.img" alt=""></a>
    <p v-if="goods.item">{{goods.item.title}}</p>
    <p v-if="goods.item">{{goods.item.price}}</p>
    <details-footer v-if="goods.item" class="details-footer" :data="goods.item.pid"></details-footer>
  </div>
</template>

<script>
  import detailsApi from  "../../apis/Api"
  import detailsFooter from "./detailsFooter";
  // import banner from "../common/banner";
  import header from "../common/header";
  export default {
    name: "p-details",
    components:{
      "details-header":header,
      // "details-banner":banner,
      "details-footer":detailsFooter
    },
    data(){
      return {
        goods:[]
      }
    },
    methods:{
      async _initPageData () {
        let { id } = this.$route.query;
        this.goods= await detailsApi.getProductById(id);
      },
    },
    async beforeMount(){
      await this._initPageData()
    }
  }
</script>

<style scoped>
  .banner{
    display:block;
    height:4rem;
    width: 90%;
    margin: 0 auto;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }
  p:nth-of-type(1){
    background: #515150;
    padding: 0.12rem 0.16rem;
    color: #fff;
    font-size: 0.18rem;
  }
  p:nth-of-type(2){
    color:red;
    padding: 0.1rem;
    font-size: 0.2rem;
  }
  .details-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>