import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import JsPlayground from '../views/JsPlayground.vue'
// import P5Playground from '../views/P5Playground.vue'
// import Page404 from '../views/Page404.vue'
import SinglePost from '../views/SinglePost.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vue-playground',
    name: 'Vue Playground',
    component: () => import(/* webpackChunkName: "vue-playground" */ '../views/VuePlayground.vue')
  },
  {
    path: '/p5-playground',
    name: 'p5js Playground',
    component: () => import(/* webpackChunkName: "P5Playground" */ '../views/P5Playground.vue')
  },
  {
    path: '/js-playground',
    name: 'JavaScript Playground',
    component: () => import(/* webpackChunkName: "JsPlayground" */ '../views/JsPlayground.vue')
  },
  {
    path: '/css-playground',
    name: 'CSS Playground',
    component: () => import(/* webpackChunkName: "CssPlayground" */ '../views/CssPlayground.vue')
  },
  {
    path: '/post/:id',
    name: "Single Post",
    component: SinglePost,
  },
  {
    // https://router.vuejs.org/guide/essentials/history-mode.html#caveat - catchall route
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "Page404" */'../views/Page404.vue')

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
