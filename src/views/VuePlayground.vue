<template>
  <section id="vue-playground">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h1>Vue Playground</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul>
            <li v-for="(link, key) in todos" :key="`todo-${key}`">
              <a :href="link" target="_blank"> {{ key }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- play -->
      <div class="row">
        <div id="bind-attribute">
          <span v-bind:title="message">
            Hover your mouse over me for a few seconds to see my dynamically
            bound title!
          </span>
        </div>
        <div id="event-handling">
          <p>{{ message }}</p>
          <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
        <div id="two-way-binding">
          <p>{{ message }}</p>
          <input v-model="message" />
        </div>
      </div>
    </div>
  </section>
  <VuePhpSubmit />
  <!-- <VueIntermediate /> -->
  <!-- <VueFormValidation /> -->
</template>
<script lang="ts">
// import VueIntermediate from "@/components/VueIntermediate.vue";
// import VueFormValidation from "@/components/VueFormValidation.vue";
import VuePhpSubmit from "@/components/VuePhpSubmit.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    // VueIntermediate,
    // VueFormValidation,
    VuePhpSubmit,
  },
  data() {
    return {
      todos: {
        "Vue Markdown example": "https://v3.vuejs.org/examples/markdown.html",
        "Vue documentation":
          "https://v3.vuejs.org/guide/introduction.html#declarative-rendering",
        "VueJS Intermediate Workshop (Learn VueJS Best Practices)":
          "https://www.youtube.com/watch?v=yhaBEBi2EK0",
        "Getting Started with VueJS and WordPress":
          "https://www.youtube.com/watch?v=EZUES3EEPk8",
      },
      textInput: "# hello",
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
</script>
<style lang="scss" scoped>
</style>