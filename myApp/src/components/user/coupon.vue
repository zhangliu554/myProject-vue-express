<template>
  <div>
    <div class="couponList">
      <div :key=index v-for="(item,index) in couponList">
        <a href="#" class="iconfont" :class="item.icon"> {{item.title}}</a>
        <span> > </span>
      </div>
    </div>
    <div class="couponImg">
      <a href="#"><img src="../../../public/assets/user/015ca6b18d8571b763e583a288646f737c.jpg" alt=""></a>
      <a href="#"><img src="../../../public/assets/user/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg" alt=""></a>
    </div>
  </div>
 
</template>

<script>
  export default {
    name: "coupon",
    data(){
      return {
        couponList:[
          {"icon":"icon-youhuiquan","title":"优惠券"},
          {"icon":"icon-Y","title":"有货币"},
          {"icon":"icon-xiaoxi","title":"消息"},
          {"icon":"icon-kefu-copy","title":"服务与反馈"},
        ]
      }
    }
  }
</script>

<style scoped>
.couponList div{
  display: flex;
  justify-content: space-between;
  padding: 0 .14rem;
  line-height: 0.44rem;
  border-bottom: 0.005rem solid #ccc;
}
  .iconfont{
    font-size: 0.14rem;
    color: #444;
  }
.couponList div:nth-child(even){
  border-bottom: 0.1rem solid #eee;
}
.couponImg img{
  width: 100%;
}
.couponImg a{
  display: block;
  margin-bottom: 0.1rem;
}
</style>