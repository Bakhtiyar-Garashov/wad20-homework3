<template>
  <div id="app">
     <Navbar />
   <div class="container">
     
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
.container{
  height: 100vh;
  background-color: #f8f9fa;
}

</style>
