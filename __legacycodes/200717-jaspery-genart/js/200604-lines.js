let mover;

let tick = 0;
const tickMax = 800;
function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(1);
  mover = new Mover(200, 200, 80);
  mover2 = new Mover(200, 200, 60);
  mover3 = new Mover(200, 200);
  mover4 = new Mover(200, 200);
  background(0);
}
function draw() {
  mover.update(4);
  mover2.update(12);
  // mover3.update(5);
  // mover4.update();
  // mover.show();
  // translate(width / 2, height / 2);
  // v = p5.Vector.random2D();
  // v.mult(random(50, 400));
  // stroke(255);
  // strokeWeight(round(random(1, 10), 4))

  if (keyIsPressed === true) {
    background(0);
    tick = 0;
  }
  
  if (tick <= tickMax && tick % 3 == 0) {
    if (tick < tickMax / 2) {
      push();
      stroke(235, 35, 86, 40);
      line(mover.pos.x, mover.pos.y, 0, 0);
      pop();
    } 
  }
  if (tick <= tickMax) {
    if (tick < tickMax / 2) {
      push();
      stroke(235, 35, 86, 90);
      line(width / 2, height / 2, mover.pos.x, mover.pos.y);
      pop();
    } else {
      push();
      stroke(187, 36, 90, 80);
      line(width / 2, height / 2, mover2.pos.x, mover2.pos.y);
      pop();
    }
  }
  tick++;
}

class Mover {
  constructor(x, y, limit = 60) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(1, 8), -random(1, 8));
    // this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.limit = limit;
  }

  update(mag = 5) {
    let mouse = createVector(width / 2, height / 2);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(mag);

    this.vel.add(this.acc);
    this.vel.limit(this.limit);

    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 13);
  }
}
