<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="light">
      <b-navbar-brand href="/"
        ><img class="logo" src="../assets/logo.png" alt="logo" srcset=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto">
          <b-input-group >
            <b-form-input  class="search-box" placeholder="Search...">

            </b-form-input>
            <b-input-group-append>
              <b-button variant="info">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-navbar-nav>

        <b-navbar-nav class="ml-2">
          <b-nav-item-dropdown variant="dark" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img src="../assets/logo.png" width="30" alt="" srcset="" />
            </template>
            <b-dropdown-item href="#">Browse</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 40px;
}


</style>
