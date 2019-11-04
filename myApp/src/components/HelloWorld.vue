<template>
  <div class="hello">
    <h1>{{cartInfo.msg}}</h1>
  </div>
</template>

<script>
  import productApi from "../apis/productApi";
export default {
  name: 'HelloWorld',
  data(){
    return {
      cartInfo:[]
    }
  },
  methods: {
    _initShopIfo() {
      /**
       * 初始化页面的数据
       * @private
       */
      productApi.getShopInfo(data => {
        this.cartInfo = data;
      })
    }
  },
  created(){
    this._initShopIfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
