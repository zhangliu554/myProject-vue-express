<template>
  <div class="left">
    <ul>
      <li :key="index" v-for="(item,index) in data" :class="item">
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "leftNav",
    props:["data","rid"],
  }
</script>

<style scoped>
.left{
  width: 100%;
}
.left ul{
  display: flex;
  height: 100%;
  flex-direction: row;
  padding: 0.05rem 0.1rem;
}
.left ul li{
  height: 0.52rem;
  line-height: 0.52rem;
  text-align: left;
}
.left ul li a{
  color: #000;
  font-size: 0.14rem;
}
</style>