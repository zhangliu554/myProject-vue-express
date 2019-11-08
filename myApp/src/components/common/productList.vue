<template>
  <div class="new-list">
    <ul :key="index" v-for="(n,index) in data">
      <li :key="item.title" v-for="item in n" >
        <div>
          <a href="#"><img :src="item.img" alt=""></a>
          <p></p>
        </div>
        <p class="new-title">{{item.title}}</p>
        <p class="new-tip"><span class="new-price">{{item.price}}</span><span class="iconfont icon-more"></span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "productList",
    props:["data"]
  }
</script>

<style scoped>
  .new-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .new-list ul{
    width: 50%;
    padding: 0.1rem;
  }
  .new-list ul li{
    width: 100%;
  }
  .new-list ul li img{
    width: 100%;
  }
  .new-tip{
    display: flex;
    justify-content: space-between;
  }
  .new-list p{
    font-size: 0.12rem;
  }
  .new-title{
    margin: 0.1rem 0;
  }
  .new-price{
    vertical-align: middle;
    line-height: 0.27rem;
  }
  .iconfont{
    vertical-align: middle;
    font-size: 0.2rem;
  }
</style>