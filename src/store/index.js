import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
// Load Vuex
Vue.use(Vuex);

// Create store
const store = new Vuex.Store({
  state: {
    userProfile: '',
    allProfiles: '',
    allPosts: ''
  },

  getters: {
    profile: (state) => state.userProfile,
    allProfiles: (state) => state.allProfiles,
    posts: (state) => state.allPosts,

  },

  actions: {
    
    async fetchUserProfile({ commit }) {
      const response = await axios.get(
        'https://private-517bb-wad20postit.apiary-mock.com/users/1'
      );
      commit('setProfile', response.data);
    },

    async fetchAllProfiles({ commit }) {
      const response = await axios.get(
        'https://private-517bb-wad20postit.apiary-mock.com/profiles'
      );
      commit('setAllProfiles', response.data);
    },

    async fetchPosts({ commit }) {
      const response = await axios.get(
        'https://private-517bb-wad20postit.apiary-mock.com/posts'
      );
      commit('setAllPosts', response.data);
    },

  },
  mutations: {
    setProfile: (state, profile) => (state.userProfile = profile),
    setAllProfiles: (state, profiles) => (state.allProfiles = profiles),
    setAllPosts: (state, posts) => (state.allPosts = posts)

  },


});

export default store;