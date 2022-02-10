import { insert_vue_container } from "./helper.js";
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

import * as bootstrap from 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./scss/style.scss";

import Home from "./page/Home.vue";
import About from "./page/About.vue";
import Masonry from "./components/Masonry.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/masonry', component: Masonry },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

insert_vue_container('App', 'col', 'row g-0', 'container-fluid g-0');
import App from './App.vue'
createApp(App).use(router).mount('#App')

/**
 * basic-webform
 *
 * rudimentary, form submission will redirect to xampp-php to submit to mysql; and datatables also using xampp-php to pull the data
 */
/* insert_vue_container('BasicWebform', 'col-6', 'row justify-content-center');
import BasicWebform from './components/BasicWebform.vue'
createApp(BasicWebform).mount('#BasicWebform') */

/**
 * pull data into simple-datatables
 *
 */
/* insert_vue_container('FetchDatatables');
import FetchDatatables from './components/FetchDatatables.vue'
createApp(FetchDatatables).mount('#FetchDatatables') */


// import PetronasDot from './components/PetronasDot.vue'
// createApp(PetronasDot).mount('#PetronasDot')

// import {scaleLinear} from "d3-scale";
// import { Treemap } from "d3"



// /**
//  * parallax
//  */
// import ParallaxBasic from './components/ParallaxBasic.vue'
// createApp(ParallaxBasic).mount('#ParallaxBasic')


/**
 * css-grid
 */
/* insert_vue_container('CssGrid', 'col', 'row g-0', 'container-fluid g-0');
import CssGrid from './components/CssGrid.vue'
createApp(CssGrid).mount('#CssGrid'); */

/* insert_vue_container('CssGridStrasburgo', 'col', 'row g-0', 'container-fluid g-0');
import CssGridStrasburgo from './components/CssGridStrasburgo.vue'
createApp(CssGridStrasburgo).mount('#CssGridStrasburgo')
 */

/**
 * FanalyticsWorks
 */
// insert_vue_container('FanalyticsWorks', '', '', 'container-fluid g-0');
// import FanalyticsWorks from './components/FanalyticsWorks.vue'
// createApp(FanalyticsWorks).mount('#FanalyticsWorks')


/**
 * Yayasan
 */
/* import "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js";
insert_vue_container('Yayasan', '', '', '');
import Yayasan from './client/petronas-yayasan/Yayasan.vue';
createApp(Yayasan).mount('#Yayasan') */


/**
 * Masonry
 */
// insert_vue_container('Masonry', '', '', '');
// import Masonry from './components/Masonry.vue'
// createApp(Masonry).mount('#Masonry')

/**
 * BlogCard
 */
//  insert_vue_container('BlogCard', '', '', 'container-fluid g-0');
//  import BlogCard from './components/BlogCard.vue'
//  createApp(BlogCard).mount('#BlogCard')

/**
 * markdown import
 * https://marked.js.org/ 
 */
/* import { marked } from 'marked';
insert_vue_container('Marked', '', '', 'container-fluid g-0');
fetch('README.md')
  .then(response => response.text())
  .then(result => document.getElementById('Marked').innerHTML = marked(result));

insert_vue_container('Dream', '', '', 'container-fluid g-0');
fetch('dream.md')
  .then(response => response.text())
  .then(result => document.getElementById('Dream').innerHTML = marked(result));
 */