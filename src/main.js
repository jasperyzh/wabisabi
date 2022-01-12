import {insert_vue_container} from "./helper.js";
import { createApp } from 'vue'
import "./scss/style.scss";

/**
 * basic app
 */
/* insert_vue_container('App');
import App from './components/App.vue'
createApp(App).mount('#App') */

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
// insert_vue_container('ParallaxBasic', 'col', 'row g-0', 'container-fluid g-0');
// import ParallaxBasic from './components/ParallaxBasic.vue'
// createApp(ParallaxBasic).mount('#ParallaxBasic')


/**
 * css-grid
 */
 insert_vue_container('CssGrid', 'col', 'row g-0', 'container-fluid g-0');
 import CssGrid from './components/CssGrid.vue'
 createApp(CssGrid).mount('#CssGrid')