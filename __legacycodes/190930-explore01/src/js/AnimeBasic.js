import anime from '../../node_modules/animejs/lib/anime.es.js';

let html_anime_basic = `
	<div class="box">
  box
</div>
<div class="box">
  box
</div>
<div class="box">
  box
</div>

<p class="battery-log"></p>

<div class="css-prop-demo">
  <span class="el">test</span>
</div>

<div class="myobject">
  <p class="js-object-log"></p>
</div>

<div class="demo-content align-center svg-attributes-demo">
  <svg width="128" height="128" viewBox="0 0 128 128">

    <filter id="displacementFilter">
      <feTurbulence type="turbulence" baseFrequency="0.04999528020682362" numOctaves="2" result="turbulence"
        style="transform: scale(1);"></feTurbulence>

      <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="14.99867845791061" xChannelSelector="R"
        yChannelSelector="G"></feDisplacementMap>
    </filter>

    <polygon
      points="64 68.64560333845901 8.574 99.99962241654589 63.440820310176505 67.67663195558934 64 3.999622416545889 64.5591796898235 67.67663195558934 119.426 99.99962241654589 "
      style="filter: url(&quot;#displacementFilter&quot;); transform: scale(1);" fill="currentColor"></polygon>
  </svg>
</div>

<p class="round-log"></p>

<div class="specific-prop-params-demo">
  <span class="el">Yay</span>
</div>
<div class="function-based-params-demo">
  <span class="el">Yay</span>
  <span class="el">Yay</span>
  <span class="el">Yay</span>
  <span class="el">Yay</span>
  <span class="el">Yay</span>
  <span class="el">Yay</span>
  <span class="el">Yay</span>
</div>

<div class="color-morph">
  <span class="el color-hex">Yay</span>
  <span class="el color-rgb">Yay</span>
  <span class="el color-hsl">Yay</span>
  <span class="el color-rgba">Yay</span>
  <span class="el color-hsla">Yay</span>
  <span class="el colors-demo">Yay</span>
  <br>
  <span class="el from-to-values">Yay</span>
</div>

<div class="function-based-values-demo">
  <span class="el" data-x="100">Yay</span>
  <span class="el" data-x="200">Yay</span>
  <span class="el" data-x="300">Yay</span>
  <span class="el" data-x="400" data-ease="linear">Yay</span>
  <span class="el" data-x="500">Yay</span>
  <span class="el" data-x="600">Yay</span>
  <span class="el" data-x="700">Yay</span>
</div>

<div class="animation-keyframes-demo">
  <span class="el">Whee</span>
</div>

<div class="property-keyframes-demo">
  <span class="el">Whee</span>
</div>
  `;

document.body.innerHTML += html_anime_basic;

spinning_box();

function spinning_box() {
  var elements = document.querySelectorAll('.box');
  anime({
    targets: elements,
    rotate: '1turn',
    backgroundColor: '#FF0000',
    duration: 3000,
  });
}

run_charge();

function run_charge() {
  var logEl = document.querySelector('.battery-log');
  var battery = {
    charged: '0%',
    cycles: 120
  }
  anime({
    targets: battery,
    charged: '100%',
    cycles: 130,
    round: 1,
    easing: 'linear',
    update: function () {
      logEl.innerHTML = JSON.stringify(battery);
    }
  });
}

css_property();

function css_property() {
  anime({
    targets: '.css-prop-demo .el',
    left: '240px',
    backgroundColor: '#ff0000',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
  });
}

object_property();

function object_property() {
  var objPropLogEl = document.querySelector('.js-object-log');

  var myObject = {
    prop1: 0,
    prop2: '0%'
  }

  anime({
    targets: myObject,
    prop1: 50,
    prop2: '100%',
    easing: 'linear',
    round: 1,
    update: function () {
      objPropLogEl.innerHTML = JSON.stringify(myObject);
    }
  });
}

svg_fissure();

function svg_fissure() {
  anime({
    targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo',
    duration: 2000,
    delay: 500,
    endDelay: 500,
  });
}

round_log();

function round_log() {
  var roundLogEl = document.querySelector('.round-log');

  anime({
    targets: roundLogEl,
    innerHTML: [0, 10000],
    easing: 'linear',
    round: 10 // Will round the animated value to 1 decimal
  });
}

specific_test();

function specific_test() {
  anime({
    targets: '.specific-prop-params-demo .el',
    translateX: {
      value: 250,
      duration: 800
    },
    rotate: {
      value: 1080,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 3,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });
}

function_based();

function function_based() {
  anime({
    targets: '.function-based-params-demo .el',
    translateX: 570,
    direction: 'alternate',
    loop: true,
    // target	- The curent animated targeted element
    // index - The index of the animated targeted element
    // targetsLength - The total number of animated targets
    delay: function (el, i, l) {
      return i * 100;
    },
    endDelay: function (el, i, l) {
      return (l - i) * 100;
    }
  });
}

color_morph();

function color_morph() {
  var colorsExamples = anime.timeline({
      delay: 400,
      endDelay: 400,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    })
    .add({
      targets: '.color-hex',
      background: '#22C123'
    }, 100)
    .add({
      targets: '.color-rgb',
      background: 'rgb(255,115,255)'
    }, 0)
    .add({
      targets: '.color-hsl',
      background: 'hsl(0, 40%, 600%)'
    }, 0)
    .add({
      targets: '.color-rgba',
      background: 'rgba(0,255,255, .2)'
    }, 0)
    .add({
      targets: '.color-hsla',
      background: 'hsla(0, 100%, 66%, .2)'
    }, 0)
    .add({
      targets: '.colors-demo.el',
      translateX: 270
    }, 0);

  anime({
    targets: '.el.from-to-values',
    translateX: [100, 250], // from 100 to 250
    delay: 500,
    direction: 'alternate',
    loop: true
  });
}

pew_pew();

function pew_pew() {
  anime({
    targets: '.function-based-values-demo .el',
    translateX: function (el) {
      return el.getAttribute('data-x');
    },
    translateY: function (el, i) {
      return 50 + (-50 * i);
    },
    scale: function (el, i, l) {
      return (anime.random(55, 225) * 0.01);
    },
    rotate: function () {
      return anime.random(-360, 360);
    },
    borderRadius: function () {
      return ['50%', anime.random(10, 35) + '%'];
    },
    duration: function () {
      return anime.random(1200, 1800);
    },
    delay: function () {
      return anime.random(0, 400);
    },
    easing: function (el) {
      if (el.getAttribute('data-ease')) {
        return el.getAttribute('data-ease');
      } else {
        let amplitude = anime.random(1, 10);
        let period = anime.random(1, 200) * 0.1;
        return `easeOutElastic(${amplitude}, ${period})`;
      }
    },
    direction: 'alternate',
    loop: true,
  });
}

timeline_gogo();

function timeline_gogo() {
  anime({
    targets: '.animation-keyframes-demo .el',
    keyframes: [{
        translateY: -40
      },
      {
        translateX: 250
      },
      {
        translateY: 40
      },
      {
        translateX: 0
      },
      {
        translateY: 0
      }
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });
}

property_keyframes_demo();

function property_keyframes_demo() {
  anime({
    targets: '.property-keyframes-demo .el',
    translateX: [{
        value: 250,
        duration: 1000,
        delay: 500
      },
      {
        value: 0,
        duration: 1000,
        delay: 500
      }
    ],
    translateY: [{
        value: -40,
        duration: 500
      },
      {
        value: 40,
        duration: 500,
        delay: 1000
      },
      {
        value: 0,
        duration: 500,
        delay: 1000
      }
    ],
    scaleX: [{
        value: 4,
        duration: 100,
        delay: 500,
        easing: 'easeOutExpo'
      },
      {
        value: 1,
        duration: 900
      },
      {
        value: 4,
        duration: 100,
        delay: 500,
        easing: 'easeOutExpo'
      },
      {
        value: 1,
        duration: 900
      }
    ],
    scaleY: [{
        value: [1.75, 1],
        duration: 500
      },
      {
        value: 2,
        duration: 50,
        delay: 1000,
        easing: 'easeOutExpo'
      },
      {
        value: 1,
        duration: 450
      },
      {
        value: 1.75,
        duration: 50,
        delay: 1000,
        easing: 'easeOutExpo'
      },
      {
        value: 1,
        duration: 450
      }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });
}