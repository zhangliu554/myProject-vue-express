<template>
    <ul>
      <li :key="index" v-for="(item,index) in data" @click="getNewList(index,index)"   :class="colorIndex==index?'activeColor':''">
        <a>{{item}}</a>
      </li>
    </ul>
</template>

<script>
  export default {
    name: "newLeft",
    props:["data"],
    methods:{
      getNewList(qid,i){
        this.$bus.$emit("sec",qid),
        this.colorIndex = i;
      }
    },
    data(){
      return {
        colorIndex:0
      }
    }
  }
</script>

<style scoped>
  ul{
    width: 100%;
    background: #eee;
  }
  ul li{
    width: 100%;
    line-height: 0.7rem;
  }
  ul li a{
    color: #000;
    padding: 0.2rem;
    font-size: 0.14rem;
  }
  .activeColor{
    background: #fff;
  }
</style>