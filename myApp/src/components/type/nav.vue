<template>
  <div  class="type-nav">
    <ul>
      <li :key="index" v-for="(item,index) in data" @click="getNav(index)">
        <a :class="colorIndex==index?'activeColor':'bActiveColor'"
           @click.prevent="changeColor(index)">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "myNav",
    props:["data"],
    data(){
      return {
        colorIndex:0
      }
    },
    methods:{
      getNav(rid){
        this.$bus.$emit("num",rid)
      },
      changeColor(index) {
        this.colorIndex = index;
      }
    }
  }
</script>

<style scoped>
  .type-nav ul{
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
  }
  .type-nav{
    border-bottom: 0.01rem solid #eee;
  }
  .type-nav ul li{
    line-height:0.5rem;
    width: 25%;
  }
  .type-nav ul li a{
    border-right: 0.005rem solid #ddd;
    padding-right: 0.2rem;
    font-size: 0.14rem;
  }
  .type-nav ul li .Lifestyle{
    border: none;
  }
  .bActiveColor{
    color: #ccc;
  }
  .activeColor{
    color: #000;
  }
</style>