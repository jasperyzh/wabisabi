<template>
  <div class="home">
    <section id="blog">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Order Posts">
              <button
                type="button"
                class="btn btn-info"
                @click="handleClick('date')"
              >
                Order by Date
              </button>
              <button
                type="button"
                class="btn btn-info"
                @click="handleClick('title')"
              >
                Order by Title
              </button>
              <button
                type="button"
                class="btn btn-info"
                @click="handleClick('id')"
              >
                Order by ID
              </button>
            </div>
          </div>
        </div>
        <PostList :posts="posts" :order="order" />
      </div>

    </section>
  
  </div>
</template>

<script lang="ts">
// imports
import { defineComponent, ref } from "vue";
import Post from "@/type/Post";
import PostList from "@/components/PostList.vue";
import { OrderTerm } from "@/type/Order";
// import {mapActions, mapState} from "vuex";

// for add property to Array<Post>, better for props in next components
// const isOdd = (index: number) => index % 2 == 0;

export default defineComponent({
  name: "Home",
  components: { PostList },
  data() {
    return {
      // error: false,
      // posts: [],
      // template - <LoadingAnimation v-if="loading" />
      // loading: true,
    };
  },
  // async mounted() {
  //   await this.fetchPosts();
  //   console.log(this.posts[0]);
  // //   const response = await axios.get(``).catch((err) => {
  // //     console.error(err);
  // //     this.error = true;
  // //     return { data: [] };
  // //   });
  // // this.posts = response.data;
  // // this.loading = false;

  // },
  // methods: {
  //   ...mapActions({
  //     fetchPosts: 'fetchPosts'
  //   })
  // },
  // computed: {
  //   ...mapState({
  //     posts: 'posts'
  //   })
  //   /* postPerPage(count: number = 4) {
  //     return this.posts.filter((post, index) => {
  //       index < count;
  //     });
  //   },
  //   postsWithAlignment() {
  //     return this.posts.map((product, index) => {
  //       const alignment = isOdd(index);
  //       return {
  //         ...product,
  //         alignment,
  //       };
  //     });
  //   }, */
  // },
  setup() {
    /**
     * Vue 3 with TypeScript Tutorial
     * // https://www.youtube.com/watch?v=H-hXNym2CK8
     */
    const posts = ref<Post[]>([
      {
        id: 13,
        title: "Test",
        date: 210830,
        content: `<p>async/await, promises, callbacks</p>
        <ul>
        <li><a href='https://www.youtube.com/watch?v=JRNToFh3hxU' target='_blank'>
        JavaScript Callbacks, Promises, and Async / Await Explained</a>
        </li>
        </ul>`,
        excerpt: "",
      },
      {
        id: 12,
        title: "Test",
        date: 210820,
        content: `<p>async/await, promises, callbacks</p>
        <ul>
        <li><a href='https://www.youtube.com/watch?v=JRNToFh3hxU' target='_blank'>
        JavaScript Callbacks, Promises, and Async / Await Explained</a>
        </li>
        </ul>`,
        excerpt: "",
      },
      {
        id: 11,
        title: "Test data ",
        date: 210819,
        content: `<p>Understanding the fundamental of HTTP... Let's start reading.</p>
        <ul>
        <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' target='_blank'>
        https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        </a>
        </li>
        </ul>`,
        excerpt: "Where do we start?",
      },
    
    ]);

    const order = ref<OrderTerm>("date");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { posts, handleClick, order };
  },
});
</script>
