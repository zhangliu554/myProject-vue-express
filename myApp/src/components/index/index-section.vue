<template>
  <div class="section">
<!--    <my-banner></my-banner>-->
    <p>
      轮播图
    </p>
    <p>
      轮播图
    </p>
    <p>
      轮播图
    </p>
    <nav-list></nav-list>
    <div class="active-img"><a href="#"><img :src="pic.activeImg" alt=""></a></div>
    <hot-type v-if="data.hotType" :data="data.hotType"></hot-type>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <brand v-if="data.brand" :data="data.brand" :brandImg="pic"></brand>
    <top-product v-if="data.recommend" :data="data.recommend" :topImg="pic"></top-product>
  </div>
</template>

<script>
  // import banner from './banner'
  import navList from './navList'
  import hotType from './hotType'
  import brand from './brand'
  import top from './top'
  export default {
    name: "index-section",
    components:{
      // "myBanner":banner,
      "navList":navList,
      "hotType":hotType,
      "brand":brand,
      "topProduct":top
    },
    props:["data","pic"]
  }
</script>

<style scoped>
  .section{
    background: #eee;
    padding-bottom: 1rem;
  }
  .active-img{
    padding: 0.15rem 0;
  }
  .section a{
    width: 100%;
  }
  .section img{
    width: 100%;
  }

</style>