import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/js/bootstrap.bundle";
import "./scss/style.scss";

createApp(App).use(store).use(router).mount('#app')

/**
 * @todo implement vuejs with socket, a mini chatroom
 *
 * Socket.io - how it works
 * https://socket.io/docs/v4/how-it-works/
 * 
 * Integrating Vue.js and Socket.io
 * https://www.digitalocean.com/community/tutorials/vuejs-vue-socketio
 */
/*
import Vue from 'vue';
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:4113');

Vue.use(VueSocketIO, SocketInstance) */