/**
 * owl.carousel
 * @issue owl.carousel library does not recognize $(jquery), use require() and force window.dom to have jquery
 * @solution https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler
 */
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("owl.carousel");

import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

let html_owlcarousel_basic = `
<div class="owl-carousel owl-theme carousel-1">
<div class="item"><h4>1</h4></div>
<div class="item"><h4>2</h4></div>
<div class="item"><h4>3</h4></div>
<div class="item"><h4>4</h4></div>
<div class="item"><h4>5</h4></div>
<div class="item"><h4>6</h4></div>
<div class="item"><h4>7</h4></div>
<div class="item"><h4>8</h4></div>
<div class="item"><h4>9</h4></div>
<div class="item"><h4>10</h4></div>
<div class="item"><h4>11</h4></div>
<div class="item"><h4>12</h4></div>
</div>
`;
document.body.innerHTML += html_owlcarousel_basic;

$(function () {
  $('.carousel-1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  
});