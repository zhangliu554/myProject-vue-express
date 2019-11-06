<template>
    <ul class="shopping-top-nav">
      <li :key="index" v-for="(item,index) in nav"><a href="#" :class="colorIndex==index?'activeColor':'bActiveColor'"  @click.prevent="changeColor(index)">{{item.title}}</a></li>
    </ul>
</template>

<script>
  export default {
    name: "topNav",
    data(){
      return{
        nav:[
          {"title":"最新"},
          {"title":"搭配"},
          {"title":"头条"},
          {"title":"上新"},
          {"title":"视频"},
          {"title":"咨询"},
        ],
        colorIndex:0
      }
    },
    methods:{
      changeColor(index) {
        this.colorIndex = index;
      }
    }
  }
</script>

<style scoped>
.shopping-top-nav{
  display: -webkit-box;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  height: 0.45rem;
}
.shopping-top-nav li{
  width: 20%;
  text-align: center;
  padding: 0 0.13rem 0.1rem;
  line-height: 0.45rem;
}
.shopping-top-nav li a{
  color: #000;
  padding:0 .04rem 0.1rem;
  font-size: 0.14rem;
}
.activeColor{
  border-bottom:0.005rem solid #000;
}
</style>