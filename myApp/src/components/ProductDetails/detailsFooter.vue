<template>
  <div>
   <ul>
     <li @click="goCart">购物车</li>
     <li>品牌店铺</li>
     <li>收藏</li>
     <li @click="goUrl(data)">加入购物车</li>
   </ul>
  </div>
</template>

<script>
  export default {
    name: "detailsFooter",
    props:["data"],
    data(){
      return{
        ls:localStorage.getItem("user")
      }
    },
    methods:{
      goCart(){
         this.$router.push("cart")
      },
      goUrl(i){
        if(this.ls){
          this.$router.push('/cart?id=' + i)
        }else{
          this.$router.push("login")
        }
      }
    }
  }
</script>

<style scoped>
  ul{
    display: flex;
    background: #fff;
    padding:0.15rem 0.15rem 0.1rem;
    border-top: 0.005rem solid #eee;
  }
  ul li{
    width: 20%;
    text-align: center;
    padding:0.25rem 0 0;
    font-size: 0.12rem;
  }
  ul li:last-of-type{
    width: 40%;
    background: red;
    font-size: 0.18rem;
    color: #fff;
    padding: 0.1rem 0;
  }
  ul li:nth-of-type(1){
    background: url("../../../public/assets/info/cart.jpg") center -0.06rem no-repeat;
  }
  ul li:nth-of-type(2){
    background: url("../../../public/assets/info/shop.jpg") center -0.06rem no-repeat;
  }
  ul li:nth-of-type(3){
    background: url("../../../public/assets/info/collection.jpg") center -0.06rem no-repeat;
  }
</style>