<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="bannerOne">
      <div :key="index" class="swiper-slide" v-for="(item,index) in bannerOne">
        <a href="#"><img :src="item" alt=""></a>
      </div>
    </div>
    <div class="swiper-wrapper" v-else-if="bannerTwo">
      <div :key="index" class="swiper-slide" v-for="(item,index) in bannerTwo">
        <a href="#"><img :src="item" alt=""></a>
      </div>
    </div>
    <div class="swiper-wrapper" v-else-if="data">
      <div :key="index" class="swiper-slide" v-for="(item,index) in data">
        <a href="#"><img :src="item" alt=""></a>
      </div>
    </div>
    <div class="swiper-wrapper" v-else-if="pdata">
      <div>
        <a href="#"><img :src="pdata" alt="" style="width: 100%"></a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    name: "banner",
    props: ["bannerOne","bannerTwo","data","pdata"],
    methods: {
      _initSwiper() {
        // eslint-disable-next-line no-unused-vars
        const newSwiper = new Swiper('.swiper-container', {
          loop: true, // 循环模式选项,
          autoplay:true,
          pagination: {
            el: ".swiper-pagination",
          },
          // observer: true,//修改swiper自己或子元素时，自动初始化swiper
          // observeParents: true//修改swiper的父元素时，自动初始化swiper
        })
      }
    },
    mounted() {
      this._initSwiper()
    }
  }
</script>

<style scoped>
  @import "../../../node_modules/swiper/css/swiper.css";
  .swiper-container{
    width: 100%;
  }
  .swiper-container img{
    width: 100%;
    height: 100%;
  }
</style>