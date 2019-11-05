<template>
  <div class="contain">
    <my-index-header left="icon-shouye" right="icon-shouye" class="header"></my-index-header>
    <index-section v-if="indexInfo&&indexInfo.bigPic" :data="indexInfo" :pic="indexInfo.bigPic"></index-section>
    <my-footer class="footer"></my-footer>
  </div>
</template>

<script>
  import myFooter from '../../components/footer'
  import indexHeader from '../../components/header/header'
  import indexApi from '../../apis/indexApi'
  import indexSection from "../../components/index/index-section"
  export default {
    name: "index",
    components:{
      "myFooter":myFooter,
      "myIndexHeader":indexHeader,
      "indexSection":indexSection
    },
    data(){
      return {
        indexInfo:[]
      }
    },
    methods:{
      _initShopInfo(){
        indexApi.getIndexInfo(data => {
          this.indexInfo = data;
          console.log(this.indexInfo.brand)
        })
      }
    },
    created() {
      this._initShopInfo()
    }
  }
</script>

<style scoped>
  .contain{
    width: 3.75rem;
  }
  .header{
    width: 3.75rem;
  }
</style>