<template>
  <div class="parent">
    <div v-for="post in posts" :key="post.id" class="profile-container">
      <img
        v-if="post.media && post.media.type == 'image'"
        style="width: 120px; height: 120px; border-radius: 100%"
        :src="post.media.url"
        alt="avatar"
      />
      <video
        width="260"
        v-if="post.media && post.media.type == 'video'"
        controls
        :src="post.media.url"
      ></video>
      <div>
        <h5>{{ post.text }}</h5>

        <button
          @click="post.isLiked = !post.isLiked"
          class="button-normal"
          :class="{ liked: post.isLiked }"
        >
          {{ post.likes }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",

  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
.profile-container {
  border: 1px solid #dedede;
  text-align: center;
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px 10px;
  width: 50%;
  min-width: 50px;
}

.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.button-normal {
  background-image: url("../assets/like.png");
  border-radius: 10px;
  color: white;
  outline: none;
  border: none;
  padding: 5px 25px;
  border: 1px solid #dedede;
  background-color: gray;
}

.button-normal:focus {
  outline: none;
}

.liked {
  background-image: url("../assets/like.png");
  border-radius: 10px;
  outline: none !important;
  border: none;
  padding: 5px 20px;
  background-color: #01579b;
  color: white;
}

.liked:focus {
  outline: none;
}
</style>
