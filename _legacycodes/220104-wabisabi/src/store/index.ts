import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
  },
  actions: {
    async fetchPosts(context) {
      const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts`);
      context.commit('setPosts', response.data)
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  modules: {
  }
})
