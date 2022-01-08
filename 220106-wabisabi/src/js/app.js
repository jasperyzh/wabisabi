// Import all plugins
// import * as bootstrap from 'bootstrap';

// // Or import only needed plugins
// import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// // Or import just one
// import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';

// vue
// import Vue from 'vue';
// import LeadForm from './vue/LeadForm';
// new Vue({ render: createElement => createElement(LeadForm) }).$mount('#leadform-vue');

// parsleyjs + bootstrap-form



// webform-yayasan | vue2
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import WebformYayasan from './components/webform-yayasan';
new Vue({ render: createElement => createElement(WebformYayasan) }).$mount('#webform-yayasan');
