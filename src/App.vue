<template>
  <Header />

  <router-view />

  <Sidebar />

  <section id="note" class="my-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <pre>
https://httpd.apache.org/docs/2.4/getting-started.html
https://www.askapache.com/htaccess/

6.1: Introduction to TensorFlow.js - https://www.youtube.com/watch?v=Qt3ZABW5lD0
Machine Learning in JavaScript (TensorFlow Dev Summit 2018) - https://www.youtube.com/watch?v=YB-kfeNIPCE
ml5 - https://learn.ml5js.org/#/
throttle/debounce -   https://www.digitalocean.com/community/tutorials/vuejs-lodash-throttle-debounce
          </pre>
        </div>
      </div>
    </div>
  </section>

  <section id="test" class="my-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <test :stuff="5000" v-model="searchText" :get_url="get_url_test">
            <template v-slot:header>
              <h2>This is a test title</h2>
            </template>

            <template v-slot="slotProps">
              <!-- <p>A paragraph for the main content.</p>
              <span v-if="test">"test" is: {{ test }}</span>
              <hr> -->
              {{ slotProps.item }} - beautiful!
            </template>

            <template #footer>
              <p>Footer - Here's some contact info</p>
            </template>
          </test>

          <button @click="addTodo">add todo</button>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

import Test from "@/components/Test.vue";

export default defineComponent({
  name: "app",
  components: {
    Header,
    Sidebar,
    Footer,
    Test,
  },
  data() {
    return {
      test: true,
      searchText: "hello_world",
      get_url_test: "https://yesno.wtf/api",
      todos: [
        "clean the toilet",
        "make coffee",
        "bath cookie",
        "take nap",
        "cook food",
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push("hlelo world");
    },
  },
  provide() {
    return {
      todoLength: computed(() => this.todos.length),
      todoData: computed(() => this.todos),
    };
  },
});
</script>