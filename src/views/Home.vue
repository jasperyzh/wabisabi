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
        id: 9,
        title: "Setting up for Database: MySQL Basic",
        date: 210810,
        content:
          "<p>Went through a short tutorial on MySQL basic with Fireship. <a href='https://www.youtube.com/watch?v=Cz3WcZLRaWc' target='_blank'>MySQL - The Basics</a></p><p>Next up try out the library to pull data from MySQL with Javascript: <a href='https://sequelize.org/master/' target='_blank'>https://sequelize.org/master/</a></p>",
        excerpt: "Data Data Data",
      },
      {
        id: 8,
        title: "Form Validation with Vue",
        date: 210806,
        content:
          "<p>Need a closer look at form validation with vue, using bootstrapcss. Need a good framework for any future form workflow. Whether it send it data to MySQL or GoogleSheet, need to arm ourselves fast.</p>",
        excerpt: "A look into form validation",
      },
      {
        id: 7,
        title: "Hilbert Curve & Maurer Rose",
        date: 210801,
        content:
          "<p>Went through the tutorials by CodingTrain, Math is seriously beautiful and not boring. Wish programming was taught to me since young... and I wondered at once point, how do I translate all these to my kid lol.</p><p><small>(Will link these in the future once I figure out the CMS for my site.)</small></p>",
        excerpt: "Beautiful math at play",
      },
      {
        id: 6,
        title: "Still on fire!",
        date: 210730,
        content:
          "<p>Completed double pendulum sketch today! also ran through fundamental for JS again, ?? is a new operator I just learned, pretty neat. The files are falling into it place, I gonna keep this going for sure!</p><p>Gotta look into <a href='https://youtu.be/yhaBEBi2EK0' target='_blank'>VueJS Intermediate workshop</a></p>",
        excerpt: "Gotta remember to exercise too :x",
      },
      {
        id: 5,
        title: "Space Invader!",
        date: 210728,
        content:
          "<p>Completed the space invader challenge with the coding train! <a href='https://www.youtube.com/watch?v=biN3v3ef-Y0'>Coding Challenge #5: Space Invaders in JavaScript with p5.js</a>.</p><p>Looking for next challenge, either in MySQL or Socket.io. Let's try both!</p><p>Manage to run a little chatroom, but lack the discipline to integrate using vue or typescript, will get back to this later!</p>",
        excerpt: "Alien visited for moar",
      },
      {
        id: 4,
        title: "P5.js Setup",
        date: 210727,
        content:
          "<p>Setup P5.js and migrated the demo sketch from the starter template <a href='https://bulkan-evcimen.com/using_parceljs_typescript_p5js' target='_blank'>Using Parcel, TypeScript with p5.js</a>. Not using parcelJS, but still useful to know how to create the instances for p5js and classes.</p><p>Moved all sketches or experiements to JS-Playground, also discovered lazyload vue-router quirk on classic JS: P5js cannot load with</p><code>  component: () => import(/* webpackChunkName: \"js-playground\" */ '../views/JsPlayground.vue')</code><p>I might need to work on CMS/Blog/Database soon. Hardcoding blog is difficult.</p>",
        excerpt: "Setup sketching stuff",
      },
      {
        id: 3,
        title: "TypeScript Mania",
        date: 210727,
        content:
          "<p>Despite fatigue, speedrunning through the basic series for TypeScript tutorial, hopefully build something simple after this. <a href='https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=18' target='_blank'>TypeScript Tutorial #18 - Generics</a>, hopefully this helps for the long run.</p>",
        excerpt: "Speed learning stuff",
      },
      {
        id: 2,
        title: "Just start building",
        date: 210725,
        content:
          "<p>NetNinja series on building Vue3 with typescript, migrating all the code over from the previous setup. <a href='https://www.youtube.com/watch?v=usSBsgWNUZk' target='_blank'>Vue 3 with TypeScript Tutorial</a>.</p><p>Also installing bootstrap and packages instead of CDN.</p>",
        excerpt: "Already migrating project.",
      },
      {
        id: 1,
        date: 210723,
        title: "Start doing some fixing in the gap",
        content:
          "<p>(insert markdown) It's easy getting all conceit in my own capabilities, just living day-to-day, pass the day doing minimal work. I have multiple attempts in getting myself into routine to learn new stuff, but always fall shorts after several updates. This might turn out the same, but I'm going to give this a try: working on this folder and solving whatever I need using just this project. See how far I can go.</p><p>For example this post right here, is done using hardcode via vuejs, and eventually I hope to have this post generated through a proper API or CMS.",
        excerpt:
          "I did a thing, again. Only this time, everything in this thing.",
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
