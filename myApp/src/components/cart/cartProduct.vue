<template>
  <div>
  <section>
    <div class="cartGoods">
      <p class="cart-title">普通商品</p>
      <ul>
        <li :key="index" v-for="(n,index) in goods">
          <div class="goods-box">
            <div class="check-box">
              <a class="j-check check active">
                <input type="radio" autocomplete="off" name="type" style="display:none;" value="0">
              </a>
            </div>
            <div class="goodsInfo-box">
              <a href="#" ><img :src="n.item.img" alt=""></a>
              <div class="goodsInfo">
                <div><span class="goodsText" style="width: 2.2rem">{{n.item.title}}</span> <span>x1</span></div>
                <p>舒研柔润卸妆水245ml</p>
                <span style="color: red">{{n.item.price}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="account">
      <div>
        <a href="#" class="checkAll check active">
          <input type="radio" autocomplete="off" name="type" style="display:none;" value="0">
        </a>
        <span style="display:block" class="checkAllText">全选</span>
      </div>
      <div class="topAccount">
        <span class="total">总计：<span class="price">￥0</span><span class="number">(4)</span>件</span>
        <button>结算</button>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
    name: "cartProduct",
    props:["data"],
    data(){
      return{
        goods:[
          {"item":{"pid":"001","img":"assets/boys/0209f47b29b1d34386ac71a4d9715afdf2.jpg","title":"Life·After Life 中长款连帽羽绒服","price":"￥1399.00"}},
          {"item":{"pid":"002","img":"assets/boys/02de46a5e701d1dae874561237ba49e6fe.jpg","title":"AliyaStore “祈福达摩娃”Airpods保护套","price":"￥68.00"}},
          {"item":{"pid":"003","img":"assets/boys/028d0acdf5ad1261f801544a2002d3f05c.jpg","title":"AliyaStore “小柴犬”Airpods保护套","price":"￥1399.00"}},
          {"item":{"pid":"004","img":"assets/boys/014fd3cc348621454ae26c7c14c58479d8.jpg","title":"AliyaStore “日夜交替”胸针","price":"￥1399.00"}},
        ]
      }
    },
    computed:{

    }
  }
</script>

<style scoped>
  .cart-title{
    width: 100%;
    text-align: center;
    padding-top: 0.17rem;
    font-size: 0.18rem;
  }
  section{
    font-size: 0.06rem;
    background: #fff;
  }
  .check-box{
    padding-left: 0.2rem;
  }
  .check{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    margin :0 auto;
    border: 1px solid #000;
    border-radius: 50%;
    vertical-align: middle;
  }
  .active{
    background: url("../../../public/assets/info/check.png") no-repeat center;
    background-size: 100% 100%;
  }
  .cartGoods ul li{
    border-bottom: 0.12rem solid #eee;
  }
  .goods-box{
    display: flex;
    border-right: none;
    border-left: none;
    padding: 0.15rem 0 0.12rem;
  }
  .goods-box .j-check{
    margin-top: 0.4rem;
  }
  .goods-box .goodsInfo-box{
    display: flex;
  }
  .goods-box .goodsInfo-box a img{
    display: inline-block;
    padding: 0.01rem;
    margin: 0 0.1rem;
  }
  .goodsInfo{
    padding-top: 0.1rem;
  }
  .goodsInfo p,.goodsInfo span{
    font-size: 0.14rem;
  }
  .goodsInfo div{
    color: #0C0C0C;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .goodsInfo p{
    color: rgb(102,102,102);
    font-size: 0.12rem;
    padding:0.05rem 0;
  }
  .goodsInfo span{
    color: #0C0C0C;
  }
  .account{
    position: fixed;
    bottom: 0rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    height: 0.8rem;
    width: 100%;
    line-height: 1rem;
    padding: 0 0.1rem;
    font-size: 0.14rem;
  }
  .topAccount button{
    width: 0.85rem;
    height: 0.44rem;
    border-radius: 0.05rem;
    color: #fff;
    background:#d1021c;
    margin-left: 0.05rem;
    border: 0;
  }
  .goodsInfo-box img{
    width: 0.76rem;
    height: 1.02rem;
  }
  .checkAll{
    position: absolute;
    left: 0.2rem;
    top: 0.35rem;
  }
  .checkAllText{
    position: absolute;
    left: 0.15rem;
    top: 0.2rem;
  }
  .total{
    color: #d0253b;
  }
  .price{
    margin-right: 0.1rem;
  }
</style>