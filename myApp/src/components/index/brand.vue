<template>
  <div class="brand">
    <ul>
      <li :key="index" v-for="(item,index) in data">
        <a href="#"><img :src="item.s1" alt=""></a>
      </li>
    </ul>
    <div class="active-img"><a href="#"><img :src="brandImg.brandImg" alt=""></a></div>
  </div>
</template>

<script>
  export default {
    name: "brand",
    props:["data","brandImg"]
  }
</script>

<style scoped>
  .brand ul{
    display: flex;
    flex-wrap: wrap;
  }
  .brand ul li{
    width: 25%;
  }
  .brand ul li img{
    width: 100%;
  }
  .brand ul li:last-child{
    width: 50%;
  }
  .active-img img{
    width: 100%;
  }

</style>