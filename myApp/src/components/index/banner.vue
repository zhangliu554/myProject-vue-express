<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="bannerOne">
      <div :key="index" class="swiper-slide" v-for="(item,index) in bannerOne">
        <a href="#"><img :src="item.s1" alt=""></a>
      </div>
    </div>
    <div class="swiper-wrapper" v-else-if="bannerTwo">
      <div :key="index" class="swiper-slide" v-for="(item,index) in bannerTwo">
        <a href="#"><img :src="item.s1" alt=""></a>
      </div>
    </div>
    <div class="swiper-wrapper" v-else-if="data">
      <div :key="index" class="swiper-slide" v-for="(item,index) in data">
        <a href="#"><img :src="item.s1" alt=""></a>
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
    props: ["bannerOne","bannerTwo","data"],
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
  .swiper-pagination{
    /*border: 0.005rem solid #ccc;*/
    /*padding: 0.05rem;*/
    /*width: auto;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
    /*text-align: center;*/
    /*border-radius: 0.2rem;*/
    /*background: rgba(0,0,0,0.2);*/
    /*margin-left:1.1rem;*/

  }
  /*.swiper-pagination-bullet-active{*/
  /*  background: #fff;*/
  /*}*/
</style>