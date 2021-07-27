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

// financial-logger.ts
import "@/components/FinancialLogger";


import { defineComponent, ref } from "vue";
import Post from "@/type/Post";
import PostList from "@/components/PostList.vue";
import OrderTerm from "@/type/OrderTerm";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { PostList },
 
  setup() {
    //https://www.youtube.com/watch?v=H-hXNym2CK8
    const posts = ref<Post[]>([
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
