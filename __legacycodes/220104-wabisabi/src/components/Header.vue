<template>
  <header class="header">
    <div class="container-xl">
      <div class="row justify-content-between py-3">
        <div class="col-auto">
          <button
            id="sidebar__toggle"
            class="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <router-link to="/" class="btn">
            <h1 class="h6 m-0">learn.code.play.satori.</h1>
          </router-link>
        </div>

        <ul class="col-auto nav nav-pills">
          <li
            class="nav-item"
            v-for="(item, index) in router_links"
            :key="`route-${index}`"
          >
            <router-link class="nav-link" :to="item.link">{{
              item.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      router_links: [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Vue Playground", link: "/vue-playground" },
        { title: "JS Playground", link: "/js-playground" },
        { title: "CSS Playground", link: "/css-playground" },
        { title: "p5 Playground", link: "/p5-playground" },
      ],
    };
  },
});
</script>