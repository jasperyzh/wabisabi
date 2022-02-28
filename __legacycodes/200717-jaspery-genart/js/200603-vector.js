let v;
let tick = 0;
const MAX_STEP = 400;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  background(0, 1);
  translate(width / 2, height / 2);
  strokeWeight(3);
  colorMode(HSB, 360, 100, 100, 100);
  if (keyIsPressed === true) {
    tick = 0;
  }
  if (tick < MAX_STEP) {
    for (let i = 0; i < tick; i++) {
      push();
      v = p5.Vector.random2D();
      v.mult(random(50, floor(MAX_STEP - tick)));
      stroke(195, 82, 37, map(tick, 0, MAX_STEP, 0, 50));
      line(0, 0, v.x, v.y);
      pop();
    }

    for (let i = 0; i < tick; i++) {
      push();
      v = p5.Vector.random2D();
      v.mult(random(50, floor(MAX_STEP - tick)));
      stroke(162, 82, 58, map(tick, 0, MAX_STEP, 0, 50));
      line(0, 0, v.x, v.y);
      pop();
    }

    for (let i = 0; i < tick; i++) {
      push();
      v = p5.Vector.random2D();
      v.mult(random(50, floor(MAX_STEP - tick)));
      stroke(133, 36, 83, map(tick, 0, MAX_STEP, 0, 50));
      line(0, 0, v.x, v.y);
      pop();
    }
    for (let i = 0; i < tick; i++) {
      push();
      v = p5.Vector.random2D();
      v.mult(random(50, floor(MAX_STEP - tick)));
      stroke(104, 12, 85, map(tick, 0, MAX_STEP, 0, 50));
      line(0, 0, v.x, v.y);
      pop();
    }
    for (let i = 0; i < tick; i++) {
      push();
      v = p5.Vector.random2D();
      v.mult(random(50, floor(MAX_STEP - tick)));
      stroke(42, 14, 95, map(tick, 0, MAX_STEP, 0, 50));
      line(0, 0, v.x, v.y);
      pop();
    }
  }

  fill(0);
  ellipse(0, 0, 60, 60);

  tick++;
}
/* 
let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
}

function draw() {
  background(0);
  walker.update();
  walker.show();
}
class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    this.pos.add(this.vel);
  }
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
 */
