<template>
  <div>
    <type-header title="个人中心"></type-header>
    <type-section v-if="typeInfo" :data="typeInfo"></type-section>
    <my-footer></my-footer>
  </div>

</template>
<script>
  import typeSection from "../../components/type/typeSection";
  import typeApi from '../../apis/Api'
  import typeHeader from '../../components/header/type-header'
  import myFooter from '../../components/footer'
  export default {
    name: "type",
    components:{
      "myFooter":myFooter,
      "typeHeader":typeHeader,
      "typeSection":typeSection
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