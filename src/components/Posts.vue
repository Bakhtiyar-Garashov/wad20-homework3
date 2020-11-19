<template>
  <div class="parent">
    <div v-for="post in posts" :key="post.id" class="post-container">
      <div class="user-data">
        <div>
          <img :src="post.author.avatar" alt="" srcset="" />
          <p>{{ post.author.firstname }} {{ post.author.lastname }}</p>
        </div>
        <p>{{ post.createTime }}</p>
      </div>
      <img
        v-if="post.media && post.media.type == 'image'"
        style="width: 100%"
        :src="post.media.url"
        alt="avatar"
      />
      <video
        style="width: 100%"
        v-if="post.media && post.media.type == 'video'"
        controls
        :src="post.media.url"
      ></video>
      <div>
        <h4>{{ post.text }}</h4>

        <button
          @click="post.isLiked = !post.isLiked"
          class="button-normal"
          :class="{ liked: post.isLiked }"
        >
          <span
            ><img
              style="margin: 3px 0"
              width="20"
              src="../assets/like.png"
              alt=""
              srcset=""
          /></span>
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
      console.log(this.$store.getters.posts);
      return this.$store.getters.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
.post-container {
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 20px 10px;
  width: 80%;
  min-width: 50px;
  margin: 30px 0;
}

.post-container h4 {
  margin: 15px 0;
}

.parent {
  padding: 50px 0;
}

.button-normal {
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  padding: 5px 10px;
  border: 1px solid #dedede;
  background-color: gray;
}

.button-normal:focus {
  outline: none;
}

.liked {
  border-radius: 5px;
  outline: none !important;
  border: none;
  padding: 5px 10px;
  background-color: #01579b;
  color: white;
}

.liked:focus {
  outline: none;
}

.user-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

.user-data div {
  display: flex;
  flex-direction: row;
}

.user-data p {
 margin-top: 3px;
}

.user-data div img {
  margin-right: 15px;
}

.user-data div p {
  margin-top: 10px;
}


.user-data img {
  border-radius: 100%;
  height: 50px;
  width: 50px;
}
</style>
