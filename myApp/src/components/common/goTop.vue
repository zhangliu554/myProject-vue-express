<template>
  <span class="toTop" @click="backTop" v-show="backToTop">
    <img src="../../assets/images/back-to-top.fcf6828d24.png" alt="">
  </span>
</template>

<script>
  export default {
    name: "goTop",
    data(){
      return{
        backToTop:false
      }
    },
    methods:{
      scrollToTop() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let browserHeight = window.outerHeight;
        if (scrollTop > browserHeight) {
          this.backToTop = true
        } else {
          this.backToTop = false
        }
      },
      backTop() {
        let back = setInterval(() => {
          if (document.body.scrollTop || document.documentElement.scrollTop) {
            document.body.scrollTop -= 30;
            document.documentElement.scrollTop -= 30;
          } else {
            clearInterval(back);
          }
        });
      }
    },
    mounted() {
      window.addEventListener("scroll", this.scrollToTop);

    },
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop);
    }
  }
</script>

<style scoped>
  .toTop {
    display: inline-block;
    position: fixed;
    right: 0.1rem;
    bottom: 0.8rem;
    width: 0.5rem;
    height: 0.5rem;
    opacity: 0.5;
  }
  .toTop img{
    width: 100%;
    height: 100%;
  }
</style>