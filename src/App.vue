<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <div :class="{'container-login':isPathLogin}" class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data(){
    return{
      isPathLogin:false
    }
  },
  watch: {
    '$route' () {
      if (this.$route.path === '/login') {
        this.isPathLogin = true
      }
      else {
        this.isPathLogin = false
      }  
    }
  }
};
</script>

<style>
#app {
  background-color: #0277bd;
  width: 100%;
}
.container {
  max-width: 50% !important;
  background-color: #f8f9fa;
  padding-top: 100px;
}
.container-login{
  background-color: #0277bd;
} 
</style>
