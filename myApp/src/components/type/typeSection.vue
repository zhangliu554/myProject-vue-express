<template>
  <div class="type-navList">
    <type-nav v-if="data.navList" :data="data.navList"></type-nav>
    <nav-list v-if="data.navList" :data="data.navList"></nav-list>
  </div>
</template>

<script>
  import navList from "./navList";
  import nav from "./nav";
  export default {
    name: "typeSection",
    components:{
      "typeNav":nav,
      "navList":navList
    },
    props:["data"]
  }
</script>

<style scoped>
  .type-navList{
    margin-bottom: 0.7rem;
  }
</style>