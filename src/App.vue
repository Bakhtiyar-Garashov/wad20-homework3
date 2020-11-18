<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
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
</style>
