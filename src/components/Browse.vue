<template>
  <div class="parent">
    <div v-for="user in profiles" :key="user.id" class="profile-container">
      <img style="width:120px; height:120px; border-radius:100%" :src="user.avatar" alt="avatar" />
      <div >
        <h5 >{{ user.firstname }} {{ user.lastname }}</h5>

        <button @click="user.isFollowed=!user.isFollowed" :class="{followed:user.isFollowed}" >
          Follow
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Browse",
  
  computed: {
    profiles() {
     
      return this.$store.state.allProfiles;

    },
  },
  mounted() {
   
    this.$store.dispatch("fetchAllProfiles");
  },


};
</script>

<style>

.profile-container{
  border: 1px solid #dedede;
  text-align: center;
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px 10px;
  width: 50%;
}

.parent{
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.followed{
  background-color: purple;
}

</style>
