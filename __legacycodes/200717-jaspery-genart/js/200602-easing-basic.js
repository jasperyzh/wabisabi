let Circles = [];
const CirclesSpawn = 30;
// var testEase = [];

var testEase = 0;
let ease = 0;

let tick = 0;
function setup() {
  createCanvas(800, 600);
  smooth();
  strokeWeight(5);

  for (let i = 0; i < CirclesSpawn; i++) {
    Circles.push(new TestCircle());
  }
}

function draw() {
  background(0);
  userControl();

  // for (let i = 0; i < CirclesSpawn; i++) {}
  // t-currentTime; b-startValue; c-changeInValue; d-duration
  ellipse(100, 100, 30, 30);
  push();
  fill(255);
  text(testEase, 100, 200);
  pop();
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
function userControl() {
  if (keyIsPressed === true && keyCode === 13) {
    console.log("test");
    push();
    fill(255);
    text("Enter Key is pressed", 10, 30);
    pop();
    tick++;
    if (tick >= 120) {
      tick = 120;
    }
    testEase = easeInOutQuad(tick, 50, 650, 60);
    for (let i = 0; i < CirclesSpawn; i++) {
      ease = lerp(ease, 750, 0.001 * i);
      if (i < CirclesSpawn / 2) {
        Circles[i].draw(ease, (height / CirclesSpawn - 1) * (i + 1));
      } else {
        Circles[i].draw(testEase, (height / CirclesSpawn - 1) * (i + 1));
      }
    }
  } else {
    tick = 0;
    testEase = 0;

    for (let i = 0; i < CirclesSpawn; i++) {
      ease = lerp(ease, 50, 0.001 * i);
      Circles[i].draw(ease, (height / CirclesSpawn - 1) * (i + 1));
    }
  }
}

class TestCircle {
  constructor(x = 50, y = 50, size = 30) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  draw(x, y = null) {
    this.x = x;
    if (y != null) {
      this.y = y;
    }
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Easing {
  constructor() {}

  /*  easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
  } */

  // t-currentTime; b-startValue; c-changeInValue; d-duration
  /* easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  } */
}
