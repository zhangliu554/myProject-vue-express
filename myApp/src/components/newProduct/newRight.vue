<template>
  <div>
    <ul>
      <li :key="index" v-for="(n,index) in data">
        <a :key="item" href="#" v-for="item in n">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "newRight",
    props:["data"]
  }
</script>

<style scoped>
  ul{
    width: 100%;
  }
  ul li{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.2rem;
    font-size: 0.14rem;
  }
  ul li a{
    width: 100%;
    color: #000;
    line-height: 0.7rem;
    border-bottom: 0.01rem solid #eee;
  }
</style>