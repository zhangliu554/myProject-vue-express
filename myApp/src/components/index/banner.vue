<template>
  <div class="banner">
    <a :key="index" class="imgDiv" v-for="(item,index) in data">
      <img :src="item.s1" />
    </a>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    props:["data"]
  }
</script>

<style scoped>
  .banner{
    width: 100%;
  }
  .banner img{
    width: 100%;
  }
</style>