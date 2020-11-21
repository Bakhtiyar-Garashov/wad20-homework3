<template>
  <div class="parent">
    <div v-for="user in profiles" :key="user.id" class="profile-container">
      <img
        style="width: 120px; height: 120px; border-radius: 100%"
        :src="user.avatar"
        alt="avatar"
      />
      <div>
        <h5>{{ user.firstname|capitalize }} {{ user.lastname|capitalize }}</h5>

        <button
          @click="user.isFollowed = !user.isFollowed"
          class="button-normal"
          :class="{ followed: user.isFollowed }"
        >
          <span v-if="user.isFollowed">Following</span>
          <span v-else-if="!user.isFollowed">Follow</span>
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
  filters: {
    capitalize: function (value) { // capitalize names via vue filter option
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style>
.profile-container {
  border: 1px solid #dedede;
  text-align: center;
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px 10px;
  width: 50%;
  min-width: 50px;
}

.profile-container img{
  object-fit: cover;
  object-position: top center;
  margin-top: 3%;
}

.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.button-normal {
  border-radius: 10px;
  color: white;
  outline: none;
  border: none;
  padding: 5px 25px;
  border: 1px solid #dedede;
  background-color: #82008f;
}

.button-normal:focus {
  outline: none;
}

.followed {
  border-radius: 10px;
  outline: none !important;
  border: none;
  padding: 5px 20px;
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}

.followed:focus {
  outline: none;
}
</style>
