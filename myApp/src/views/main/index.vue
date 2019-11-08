<template>
  <div>
      <my-index-header left="icon-list" right="icon-sousuo" class="header" :actice="show" @changeShow="bbb($event)"></my-index-header>
      <index-section v-if="indexInfo&&indexInfo.bigPic" :data="indexInfo" :pic="indexInfo.bigPic"></index-section>
      <my-footer class="footer"></my-footer>
      <go-top></go-top>
    <transition name="bounce">
      <side-nav class="side-nav" v-if="show" :data="show" @go="goIndex($event)"></side-nav>
    </transition>
    </div>
</template>

<script>
  import sideNav from "../../components/index/sideNav";
  import goTop from "../../components/common/goTop";
  import myFooter from '../../components/common/footer'
  import indexHeader from '../../components/common/header'
  import indexApi from '../../apis/Api'
  import indexSection from "../../components/index/index-section"
  export default {
    name: "index",
    components:{
      "myFooter":myFooter,
      "myIndexHeader":indexHeader,
      "indexSection":indexSection,
      "go-top":goTop,
      "sideNav":sideNav
    },
    data(){
      return {
        indexInfo:[],
        show:false
      }
    },
    methods:{
      _initShopInfo(){
        indexApi.getIndexInfo(data => {
          this.indexInfo = data;
          // console.log(this.indexInfo.brand)
        })
      },
      bbb(){
        this.show = true;
      },
      goIndex(){
        this.show = false;
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
  .side-nav{
    height: 100%;
    position: fixed;
    left:0;
    z-index: 999;
    width: 85%;
    top: 0;
    background: #eee;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: translate3d(-90%,0,0)
    }
    100% {
      transform: translate3d(0,0,0)
    }
  }
</style>