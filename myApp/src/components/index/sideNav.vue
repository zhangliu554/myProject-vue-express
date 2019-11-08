<template>
    <ul class="side-nav">
        <li :key="index" v-for="(item,index) in nav" @click="goUrl()">
            <a>{{item.boys}}</a>
            <a>{{item.title}}</a>
            <a>{{item.type}}</a>
            <a>{{item.info}}</a>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "sideNav",
    props:["data"],
    data(){
      return {
        "nav":[
          {"boys":"1","title":"男生","type":"BOYS"},
          {"boys":"1","title":"女生","type":"GIRLS"},
          {"boys":"1","title":"童装","type":"KIDS"},
          {"boys":"1","title":"创意生活","type":"LIFE STYLE"},
          {"boys":"1","title":"逛","type":"TREND FINDER","info":" > "},
        ]
      }
    },
    methods:{
      goUrl(){
        this.$emit("go","false")
      }
    }
  }
</script>

<style scoped>
  .side-nav li{
    border-bottom: 0.005rem solid #eee;
    padding: 0 0.1rem;
    line-height: 0.6rem;
    background: #fff;
  }
  .side-nav li a{
    margin-right: 0.1rem;
    color: #444;
  }
  .side-nav li a:nth-child(2){
    font-size: 0.2rem;
    font-weight: 900;
  }
  .side-nav li a:nth-child(3){
    font-size: 0.12rem;
  }
  .side-nav li:last-child{
    border-top: 0.1rem solid #eee;
    line-height: 0.5rem;
    border-bottom: none;
  }
  .side-nav li:last-child a:nth-child(2){
    font-size: 0.16rem;
  }
  .side-nav li:last-child a:last-child{
    margin-left: 1.2rem;
  }
</style>