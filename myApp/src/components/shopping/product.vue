<template>
  <div class="product">
    <ul>
      <li :key="index" v-for="(item,index) in data">
        <div class="goods-img">
          <a href="#"><img :src="item.img" alt="123"></a>
        </div>
        <div class="goods-info">
          <p>{{item.title}}</p>
          <p>{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "product",
    props:["data"]
  }
</script>

<style scoped>
  .product{
    margin: 0.1rem 0;
  }
  .product img{
    width: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .product ul {
    display: -webkit-box;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
  }
  .product ul li{
    width: 50%;
    display: -webkit-box;
    margin-right:0.1rem ;
  }
  .product ul li p{
    width: 100%;
    font-size: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .product ul li p:nth-child(2){
    margin-top: 0.25rem;
    color: red;
  }
  .goods-img{
    width: 40%;
  }
  .goods-info{
    width: 60%;
    padding: 0.1rem;
    background: #eee;
  }
</style>