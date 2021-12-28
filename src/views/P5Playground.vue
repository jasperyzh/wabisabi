<template>
  <section id="js-playground">
    <article class="p5-canvas">
      <div class="container">
        <div class="row justify-content-center">
          <section
            id="p5-typescript"
            class="col-auto position-relative"
          ></section>
          <section
            id="sketch_alien_invader"
            class="col-auto position-relative"
          ></section>
          <section
            id="double_pendulum"
            class="col-auto position-relative"
          ></section>
          <section id="fireworks" class="col-auto position-relative"></section>
          <section
            id="maurer_rose"
            class="col-auto position-relative"
          ></section>
          <section
            id="hilbert_curve"
            class="col-auto position-relative"
          ></section>
          <section
            id="mandelbrot_set"
            class="col-auto position-relative"
          ><pre>need to revisit the math for mandelbrot set</pre></section>

          
        </div>
      </div>
    </article>
  </section>
</template>
<script lang="ts">
import p5 from "p5";
// import { sketch } from "@/sketch/SketchFirst";
// import { sketch_alien_invader } from "@/sketch/SketchAlienInvader";
// import { double_pendulum } from "@/sketch/DoublePendulum";
// import { fireworks } from "@/sketch/Fireworks";
// import { maurer_rose } from "@/sketch/MaurerRose";
// import { hilbert_curve } from "@/sketch/HilbertCurve";
import { mandelbrot_set } from "@/sketch/p5/MandelbrotSet";

import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    // new p5(sketch);
    // new p5(sketch_alien_invader);
    // new p5(double_pendulum);
    // new p5(fireworks);
    // new p5(maurer_rose);
    // new p5(hilbert_curve);
    new p5(mandelbrot_set);
  },
});
</script>
