import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')


// import BasicWebform from './components/BasicWebform.vue'
// createApp(BasicWebform).mount('#BasicWebform')

import FetchDatatables from './components/FetchDatatables.vue'
createApp(FetchDatatables).mount('#FetchDatatables')

import "./scss/style.scss";

// import PetronasDot from './components/PetronasDot.vue'
// createApp(PetronasDot).mount('#PetronasDot')


// import {scaleLinear} from "d3-scale";
// import { Treemap } from "d3"

// chart = Treemap(flare, {
//     path: d => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
//     value: d => d?.size, // size of each node (file); null for internal nodes (folders)
//     group: d => d.name.split(".")[1], // e.g., "animate" in "flare.animate.Easing"; for color
//     label: (d, n) => [...d.name.split(".").pop().split(/(?=[A-Z][a-z])/g), n.value.toLocaleString("en")].join("\n"),
//     title: (d, n) => `${d.name}\n${n.value.toLocaleString("en")}`, // text to show on hover
//     link: (d, n) => `https://github.com/prefuse/Flare/blob/master/flare/src${n.id}.as`,
//     tile, // e.g., d3.treemapBinary; set by input above
//     width: 1152,
//     height: 1152
// })

// import "./d3/d3-start.js";

