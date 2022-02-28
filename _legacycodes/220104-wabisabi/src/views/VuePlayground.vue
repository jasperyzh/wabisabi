<template>
  <section id="vue-playground">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h1>Vue Playground</h1>
          <ReferenceList :list="references" />
          <hr />
        </div>
      </div>

      <!-- SketchReverseMessage -->
      <!-- <div class="row">
        <div class="col">
          <SketchReverseMessage />
        </div>
      </div> -->

      <!-- VuePhpSubmit -->
      <div class="row">
        <div class="col">
          <!-- <VuePhpSubmit />
          <hr> -->
          <VueMysql />
          <hr />
        </div>
      </div>

      <!--  -->
    </div>
  </section>

  <!-- <VueIntermediate /> -->
  <!-- <VueFormValidation /> -->
</template>
<script lang="ts">
// import SketchReverseMessage from "@/sketch/vue/ReverseMessage.vue";
// import VuePhpSubmit from "@/components/VuePhpSubmit.vue";
import VueMysql from "@/sketch/vue/MysqlGet.vue";

// import VueIntermediate from "@/components/VueIntermediate.vue";
// import VueFormValidation from "@/components/VueFormValidation.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    // SketchReverseMessage,
    // VuePhpSubmit,
    // VueIntermediate,
    // VueFormValidation,
    VueMysql,
  },
  data() {
    return {
      references: [
        {
          title: "Vue Markdown example",
          link: "https://v3.vuejs.org/examples/markdown.html",
        },
        {
          title: "Vue documentation",
          link: "https://v3.vuejs.org/guide/introduction.html#declarative-rendering",
        },

        {
          title: "VueJS Intermediate Workshop (Learn VueJS Best Practices)",
          link: "https://www.youtube.com/watch?v=yhaBEBi2EK0",
        },

        {
          title: "Getting Started with VueJS and WordPress",
          link: "https://www.youtube.com/watch?v=EZUES3EEPk8",
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>