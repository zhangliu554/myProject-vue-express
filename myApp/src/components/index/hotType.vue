<template>
  <div class="hotType">
    <p class="hotType-title">{{data.title}}</p>
    <ul>
      <li :key="index" v-for="(item,index) in data.hotTypeList">
        <a :key="index"  v-for="(i,index) in item.list"><img :src="i.pic" alt=""></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "hotType",
    props:["data"]
  }
</script>

<style scoped>
  .hotType-title{
    background: #eee;
    padding-bottom: 0.15rem;
    font-size: 0.14rem;
  }
  .hotType{
    text-align: center;
    font-size: 0.12rem;
    width: 100%;
  }
  .hotType ul{
    display: flex;
    justify-content: space-between;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .hotType ul li{
    width: 25%;
    border-bottom: 0.005rem solid #ccc;
    border-right: 0.005rem solid #ccc;
  }
  .hotType ul li a img{
    width: 100%;
  }
</style>