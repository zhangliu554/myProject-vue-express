<template>
  <div class="navList">
    <ul>
      <li :key="index" v-for="(item,index) in navListOne" @click="go(index)">
          <a :key="i.title" href="#" v-for="i in item.list"><img :src="i.pic" alt=""></a>
        <p :key="index" v-for="(i,index) in item.list">{{i.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "navList",
    data(){
      return{
        "navListOne":[
            {"list":[
                {"title":"新品到着"},
                {"pic":"assets/info/010a6210ab22aea2ab304727a02a0b86c1.png"}
              ]
            },
            {"list":[
              {"title":"人气搭配"},
              {"pic":"assets/info/011004f5a04caaf9c18d7848049a75981e.png"}
            ]
            },
            {"list":[
              {"title":"折扣专区"},
              {"pic":"assets/info/01d3b9f604a085e0c9c9c16a76bc1f882f.png"}
            ]
            },
            {"list":[
              {"title":"全部分类"},
              {"pic":"assets/info/01a59222ccd78f99235ceb010e473c40e5.png"}
            ]
            }
        ]
      }
    },
  // props:["index"]
    methods:{
      go(i){
        if(i == 0){
          this.$router.push("/newProduct");
        }else if(i ==1){
          this.$router.push("shopping");
        }else if(i == 3){
          this.$router.push("type");
        }
      }
    }
  }
</script>

<style scoped>
  .navList{
    padding: 0.1rem 0.1rem 0.15rem;
    font-size: 0.12rem;
    text-align: center;
    margin: 0 auto;
    background: #fff;
  }
  .navList ul {
    display: flex;
    justify-content: space-around;
  }
  .navList ul li {
    width: 15%;
  }
  .navList ul li a{
    display: block;
    text-align: center;
    padding-bottom: 0.05rem;;
  }
  .navList ul li img{
    width: 70%;
    text-align: center;
    margin-left: 0.1rem;
  }
</style>