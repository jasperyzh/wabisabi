<template>
  <header class="header">
    <div class="container-xl">
      <div class="row justify-content-between py-3">
        <div class="col-auto">
          <button
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
          <a class="btn" href="/">
            <h1 class="h6 m-0">learn.code.play.satori.</h1>
          </a>
        </div>

        <ul class="col-auto nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/js-playground"
              >JS Playground</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>

  <router-view />

  <!-- offcanvas -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
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
              <ul class="list-group">
                <li
                  class="list-group-item"
                  v-for="(item, idx) in links"
                  :key="`link-${idx}`"
                >
                  <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
                <li class="list-group-item">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#lightbox"
                    >/g/'s programming project for n00bz</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <h2>To-do List</h2>
              <ul class="list-group">
                <li
                  class="list-group-item"
                  v-for="(item, idx) in todos"
                  :key="`todo-${idx}`"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <h2>P5js</h2>
              <ul class="list-group">
                <li
                  class="list-group-item"
                  v-for="(item, idx) in p5js"
                  :key="`todo-${idx}`"
                >
                  <a :href="`/${item}.html`">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="lightbox"
    tabindex="-1"
    aria-labelledby="lightboxLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <!-- <div class="modal-header">
            <h5 class="modal-title" id="lightboxLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div> -->
        <div class="modal-body">
          <figure>
            <img
              src="./assets/gprogramming.png"
              alt="/g/'s programming project for n00bz"
            />
          </figure>
        </div>
        <!--   <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
      </div>
    </div>
  </div>
  <footer class="footer"></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  data() {
    return {
      links: [
        {
          name: "DevDocs",
          url: "https://devdocs.io/",
        },
        {
          name: "javascript.info",
          url: "https://javascript.info/",
        },
        {
          name: "typescript",
          url: "https://www.typescriptlang.org/docs/handbook/intro.html",
        },
        {
          name: "p5js",
          url: "https://p5js.org/reference/",
        },
        {
          name: "vuejs",
          url: "https://vuejs.org/v2/guide/",
        },
        {
          name: "bootstrap5",
          url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        },
        {
          name: "vim",
          url: "https://vimhelp.org/",
        },
      ],
      todos: ["Simple JAMStack Blog", "Dynamic to-do list"],
      p5js: [
        "p5-typescript-demo",
        // "spiral",
      ],
    };
  },
});
</script>