<template>
  <div class="cart">
    <div class="cart-list">
      <p>请您先 <a href="#/login">登录</a> 可以同步电脑和手机中的商品</p>
      <div>
        <a><img src="../../../public/assets/cart/cartLogo.jpg" alt=""></a>
        <p>您的购物车暂无商品</p>
        <a href="#/newProduct" class="go-to-see">随便逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartList"
  }
</script>

<style scoped>
  .cart{
    width: 100%;
  }
  .cart-list{
    background: #eee;
  }
  .cart-list>p{
    color: #24ACAA;
    padding:0.15rem;
    text-align: center;
  }
  .cart-list>p a{
    color: #fff;
    background: red;
    padding: 0.05rem;
  }
  .cart-list>div{
    text-align: center;
    margin: 0rem auto;
    padding: 0.65rem 0 0.75rem;
  }
  .cart-list>div a{
    text-align: center;
  }
  .cart-list>div p{
    padding: 0.3rem 0 0.1rem;
    font-size: 0.12rem;
  }
  .cart-list>div a img{
    display: inline-block;
  }
  .go-to-see{
    display: inline-block;
    padding: 0.05rem 0.3rem;
    background: #444;
    color: #fff;
    margin: 0.05rem 0 0;
    font-size: 0.12rem;
    border-radius: 0.1rem;
  }

</style>