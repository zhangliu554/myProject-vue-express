<template>
  <div class="recommend">
    <p class="recommend-title">{{topImg.title}}</p>
    <div class="active-img"><a href="#"><img :src="topImg.top" alt=""></a></div>
    <div class="topList">
      <ul>
        <li :key="index" v-for="(item,index) in data">
          <div :key="i.title" v-for="(i) in item.list">
            <a href="#"><img :src="i.pic" alt=""></a>
            <p>{{i.price}}</p>
            <p>{{i.tip}}</p>
          </div>
          <p>正在浏览</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    props:["data","topImg"]
  }
</script>

<style scoped>
  .recommend-title{
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.14rem;
  }
  .active-img img{
    width: 100%;
  }
  .topList{
    width: 100%;
    background: #fff;
  }
  .topList ul {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    width: 100%;
  }
  .topList ul li{
    text-align: center;
    font-size: 0.12rem;
    margin: 0.1rem;
  }
  /*.topList ul li img{*/
  /*  width: 100%;*/
  /*}*/
</style>