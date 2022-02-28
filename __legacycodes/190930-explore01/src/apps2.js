/**
 * @library jquery
 * @library bootstrap
 * @library fontawesome
 */
// import jQuery from 'jquery';
// import "popper.js";
// import "../node_modules/bootstrap/dist/js/bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap";
// import "../node_modules/font-awesome/css/font-awesome.css";
import "./scss/styles.scss";

import facebook from "./js/facebookGraphApi";
import("https://connect.facebook.net/en_US/sdk.js").then(() => {
  new facebook();
});


/**
 * @library photoswipe
 */

// let sizeOf = require('image-size');
// import './js/PhotoswipeBasic';

/**
 * @project to-do app
 */
// import './js/ToDoApp';

/**
 * @library owl-carousel
 */
// import './scss/OwlCarouselBasic';
// import './js/OwlCarouselBasic';

/**
 * @library masonry
 */
// import './scss/MasonryBasic.scss';
// import './js/MasonryBasic';

/**
 * @library vue-app
 */
// import './js/VueApp';

/**
 * @library game-asteroid
 * @desc a mini-game
 * @link https://www.youtube.com/watch?v=HWuU5ly0taA
 */
// import './js/game-asteroid';

/**
 * @library css-grid
 * @desc testing css grid layout
 */
// import './scss/CssGrid.scss';
// import './js/CssGrid';

/**
 * @library google recaptcha v3
 * @desc adding version3 of GoogleRecaptcha, requires PHP to verify the token sent or received
 */
// import './js/GoogleRecaptcha';

/**
 * @library waypoints
 * @desc waypoints controls - animation and timing?
 */
// import './js/WaypointsBasic';

/**
 * @library animejs
 * @desc animation via js-styling
 */
// import './scss/AnimeBasic.scss';
// import './js/AnimeBasic';

/**
 * @library preloader
 * @desc preloader for website
 */
import "./scss/Preloader.scss";
import Preloader from "./js/Preloader";
var preloader = new Preloader();

/**
 * @library time-countdown app
 * @desc countdown clock controls
 */
// import OuttaTime from './js/OuttaTime';
// var outtaTime = new OuttaTime();

/**
 * css animation stuff
 */
// import './scss/CssAnimation.scss';
// import './js/CssAnimation';

/**
 * @library paramount-form
 * @desc new contact for and validation standard for all forms
 */
// import './scss/ParamountForm.scss';
// import './js/ParamountForm';

/**
 * @library form validation
 * @desc testing form validation using ParsleyJs
 */
// import './scss/ParsleyFormValidation.scss';
// import ParsleyFormValidation from './js/ParsleyFormValidation';
// var formValidation = new ParsleyFormValidation();
