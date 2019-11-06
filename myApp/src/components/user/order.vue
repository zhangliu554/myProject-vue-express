<template>
  <div class="order">
    <p class="order-top">
      <span>我的订单</span>
      <span>全部订单 > </span>
    </p>
    <div class="order-list">
      <ul>
        <li class="pay">
          <div>
            <a href="#" class="iconfont icon-shouye"></a>
            <p>代付款</p>
          </div>
          <div>
            <a href="#" class="iconfont icon-shouye"></a>
            <p>代发货</p>
          </div>
          <div>
            <a href="#" class="iconfont icon-shouye"></a>
            <p>待收货</p>
          </div>
        </li>
      </ul>
      <ul class="collection">
        <li :key="index" v-for="(item,index) in orderList">
          <a>{{item.num}}</a>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order",
    data(){
      return {
        orderList:[
          {"title":"商品收藏","num":"0"},
          {"title":"品牌收藏","num":"0"},
          {"title":"浏览记录","num":"0"},
        ]
      }
    }
  }
</script>

<style scoped>
  .order{
    border-bottom: 0.1rem solid #eee;
    font-size: 0.14rem;
  }
  .order-top{
    display: flex;
    justify-content: space-between;
    padding: 0 0.14rem;
    line-height: 0.4rem;
    border-bottom: 0.005rem solid #eee;
  }
  .order-list .pay,.collection{
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 0.12rem 0;
    border-bottom: 0.005rem solid #eee;
    font-size: 0.12rem;
  }
  .collection{
    border: none;
  }
  .order-list a{
    display: block;
    padding-bottom: 0.05rem;
  }
</style>