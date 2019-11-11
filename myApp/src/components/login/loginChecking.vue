<template>
  <div class="checking">
    <p><span>请将下列图片点击翻转至正面朝上</span><span class="change">换一批</span></p>
    <div>
      <ul>
          <li :key="index" v-for="(item,index) in checkingImg"   @click.stop="fan()"><img :src="item" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checking",
    data(){
      return {
        checkingImg:["assets/boys/011a3a43cdd242dd830d1167ce70b4ae73.jpg","assets/boys/01af0555b0fdf289f7812fb4a518f92463.jpg","assets/boys/01beca6c0028cc95081a9361bfcdf26ff0.jpg","assets/boys/01edbea9396e2625b38d99199764560df0.jpg"],
        // rotate:false,
        deg:0,
        // id:0
      }
    },
    methods:{
      fan(){
        this.deg -= 90;
        if(this.deg >= 360){
          this.deg = 0
        }
        // this.id = i
      },
    }
  }
</script>

<style scoped>
  .checking{
    width: 100%;
    text-align: center;
    margin: 0.1rem auto;
  }
  .checking p ,.checking ul{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0.2rem auto;
    font-size: 0.12rem;
    color: #444;
}
  .checking ul li{
    width: 0.7rem;
    height: 0.7rem;
    border: 0.005rem solid #eee;
  }
  .checking ul li img{
    width: 100%;
    height: 100%;
  }
  .change{
    color: red;
  }

</style>