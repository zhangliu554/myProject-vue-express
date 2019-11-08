<template>
  <div class="new-nav">
    <ul>
      <li :key="index" v-for="(item,index) in data" @click="getNewProduct(index)">
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "newNav",
    props:["data"],
    methods:{
      getNewProduct(nid){
        this.$bus.$emit("num",nid)
      }
    }
  }
</script>

<style scoped>
  .new-nav{
    border-bottom: 0.01rem solid #ccc;
  }
  .new-nav ul{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
  }
  .new-nav ul li{
    width: 25%;
    text-align: center;
  }
  .new-nav ul li a{
    color: #000;
    font-size: 0.12rem;
  }
</style>