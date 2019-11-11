<template>
    <ul class="side-nav">
        <li :key="index" v-for="(item,index) in nav" @click="goUrl()">
            <a><img :src="item.info" alt=""></a>
            <a>{{item.title}}</a>
            <a>{{item.type}}</a>
            <a>{{item.tip}}</a>
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
          {"info":"assets/info/02efef3ab9c5572af60a63a518f1bd3618.png","title":"男生","type":"BOYS"},
          {"info":"assets/info/01399a2fd752e0d334f57be11d4dbf41c5.png","title":"女生","type":"GIRLS"},
          {"info":"assets/info/01263e3f813116cc9b61010b8ca580c742.png","title":"童装","type":"KIDS"},
          {"info":"assets/info/026df1f974add11e823d1912d920176b6c.png","title":"创意生活","type":"LIFE STYLE"},
          {"info":"assets/info/01ca6c4eb538c1f91d899a091d7ae5139b.png","title":"逛","type":"TREND FINDER","tip":" > "},
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
  .side-nav li a:nth-child(1) img{
   width: 0.2rem;
    height: 0.2rem;
    display: inline-block;
    vertical-align: middle;
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
    margin-left: 1.1rem;
  }
</style>