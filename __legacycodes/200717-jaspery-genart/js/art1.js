export let BACKGROUND_COLOR = "#aaa";
import p5 from "p5";
import 'p5/lib/addons/p5.sound';
// import 'p5/lib/addons/p5.dom';

// import DrawText from "./class/DrawText";
// import DrawLineTarget from "./class/DrawLineTarget";
// import BounceBall from "./class/BounceBall";

const s = p5 => {
  // let drawLineTarget;
  // let bounceBall;

  let mic, fft;

  p5.preload = function () {};
  p5.setup = function () {
    p5.createCanvas(1024, 1024);

    //bounce ball
    // bounceBall = new BounceBall(p5, 13, 23);
    // // coordinate
    // drawLineTarget = new DrawLineTarget(p5);

    // p5sound
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    p5.noFill();
/* 
    mic = new p5Sound.AudioIn();
    mic.start(); */
    /* fft = new FFT();
    fft.setInput(mic); */
  };

  p5.draw = function () {
    p5.background(33);
/* 
    let spectrum = fft.analyze();

    beginShape();
    for (i = 0; i < spectrum.length; i++) {
      vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape(); */

    /* // bounceBall
    bounceBall.draw();

    // drawLineGridFollow
    let offset = 1;
    let steps = 8 + offset;
    for (let i = 1; i < steps; i++) {
      for (let j = 1; j < steps; j++) {
        drawLineTarget.drawLineGrid((p5.width / steps) * i, (p5.height / steps) * j, 40, 13, "red", bounceBall.getX(), bounceBall.getY());
      }
    }
 */

    // p5sound
    /*  let spectrum = fft.analyze();

    p5.beginShape();
    for (i = 0; i < spectrum.length; i++) {
      p5.vertex(i, p5.map(spectrum[i], 0, 255, p5.height, 0));
    }
    p5.endShape(); */
  };
};
let myp5 = new p5(s);
