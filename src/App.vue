<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./HelloWorld.vue";
// import Home from "@/Home.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg" aria-label="primary navbar">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Expand at lg</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-primary"
        aria-controls="nav-primary"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bi bi-list"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-primary">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown05"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >More</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown05">
              <li>
                <router-link class="dropdown-item" to="/masonry"
                  >Masonry</router-link
                >
              </li>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <i className="icon bi-envelope"></i>
  <svg class="bi" width="32" height="32" fill="#ff0000">
    <use xlink:href="bootstrap-icons.svg#bootstrap" />
  </svg>
  <svg class="bi" width="32" height="32" fill="#ff0000">
    <use xlink:href="icons/bootstrap-icons.svg#bootstrap" />
  </svg>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./scss/abstracts" as *;
.navbar-toggler {
  background-color: $secondary;
}
</style>
