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
          <b-input-group>
            <b-form-input class="search-box" placeholder="Search...">
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
              <img class="avatar" :src="profile.avatar" alt="" srcset="" />
            </template>
            <b-dropdown-item>{{profile.firstname}} {{profile.lastname}}</b-dropdown-item>
            <b-dropdown-item>{{profile.email}}</b-dropdown-item>
            <b-dropdown-item><a href="#">Browse</a></b-dropdown-item>
            <b-dropdown-item><a href="#">Sign out</a></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUserProfile");
  },
};
</script>

<style scoped>

#navbar{
  position: fixed;
  width: 100%;
}

.logo {
  width: 40px;
}
.avatar{
  
  border-radius: 100%;
  height: 50px;
  width: 50px;
}
</style>
