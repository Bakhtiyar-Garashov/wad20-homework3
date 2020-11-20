<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <div  :class="loginClass">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
 
  computed:{
    loginClass(){
      if (this.$route.path==='/login'){
        return 'container-login'
      }
      else{
        return 'container'
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
