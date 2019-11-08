<template>
  <div>
    <type-header title="个人中心"></type-header>
    <type-section v-if="typeInfo" :data="typeInfo"></type-section>
    <my-footer></my-footer>
    <go-top></go-top>
  </div>

</template>
<script>
  import goTop from "../../components/common/goTop";
  import typeSection from "../../components/type/typeSection";
  import typeApi from '../../apis/Api'
  import typeHeader from '../../components/common/type-header'
  import myFooter from '../../components/common/footer'
  export default {
    name: "type",
    components:{
      "myFooter":myFooter,
      "typeHeader":typeHeader,
      "typeSection":typeSection,
      "go-top":goTop
    },
    data(){
      return {
        typeInfo:[]
      }
    },
    methods:{
      _initShopInfo(){
        typeApi.getTypeInfo(data => {
          this.typeInfo = data;
          // console.log(this.typeInfo)
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