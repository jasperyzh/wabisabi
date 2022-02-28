<template>
  <!-- offcanvas -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">hello_there</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <section id="app">
        <div class="container">
          <div class="row mb-4">
            <div class="col">
              <h2>Quick Link</h2>
              <ReferenceList :list="quick_links" />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <h2>Experiments</h2>
              <ReferenceList :list="experiments" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      quick_links: [
        {
          title: "DevDocs",
          link: "https://devdocs.io/",
        },
        {
          title: "javascript.info",
          link: "https://javascript.info/",
        },
        {
          title: "typescript",
          link: "https://www.typescriptlang.org/docs/handbook/intro.html",
        },
        {
          title: "p5js",
          link: "https://p5js.org/reference/",
        },
        {
          title: "vuejs",
          link: "https://vuejs.org/v2/guide/",
        },
        {
          title: "bootstrap5",
          link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        },
        {
          title: "vim",
          link: "https://vimhelp.org/",
        },
        {
          title: "PhotoSwipe 5.0 beta",
          link: "https://photoswipe.com/v5/docs/getting-started/",
        },
        {
          title: "lodash",
          link: "https://lodash.com/",
        },
      ],
      experiments: [
        { title: "Simple JAMStack Blog", link: "" },
        { title: "Dynamic to-do list", link: "" },
        { title: "Create a database: MySQL", link: "" },
        { title: "NuxtJS - after understand VueJS as a whole", link: "" },
        {
          title: "vue's markdown-it",
          link: "https://markdown-it.github.io/",
        },
        {
          title: "bash",
          link: "https://www.gnu.org/software/bash/manual/bash.html",
        },
        {
          title: "/g/'s programming project for n00bz",
          link: "/assets/gprogramming.png",
        },
        {
          title: "Digital Ocean platform",
          link: "https://docs.digitalocean.com/products/platform/",
        },
      ],
    };
  },
});
</script>