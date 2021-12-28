import "bootstrap/dist/js/bootstrap.bundle";
import "./scss/style.scss";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ReferenceList from "@/components/ReferenceList.vue";


const app = createApp(App).use(store).use(router);

app.component("ReferenceList", ReferenceList);

app.mount('#app')