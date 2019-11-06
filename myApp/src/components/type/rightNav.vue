<template>
  <div class="right">
    <ul>
      <li :key="index" v-for="(item,index) in data" >
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "rightNav",
    props:["data"]
  }
</script>

<style scoped>
  .right{
    width: 100%;
  }
  .right ul{
    display: flex;
    /*height: 100%;*/
    flex-direction: row;
    /*justify-content: space-between;*/
    padding: 0.05rem 0.1rem;
    background: #fff;
    border-bottom: 0.005rem solid #eee;
  }
  .right ul li{
    height: 0.52rem;
    line-height: 0.52rem;
    text-align: left;

  }
  .right ul li a{
    color: #000;
    font-size: 0.14rem;
  }
</style>