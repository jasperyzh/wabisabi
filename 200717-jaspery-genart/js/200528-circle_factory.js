let circles = [];
const circlesMaxSpawn = 30;

let zoom;

let music;
let beat;
let backgroundColor;

var circleSpeed = 0;
var circleVector = [];
function preload() {
  music = loadSound("../music/thebeatles-daytripper.mp3");
}

function setup() {
  createCanvas(800, 600);

  // start music
  music.play();
  // backgroundColor
  colorMode(HSB, 255);
  backgroundColor = color(255, 100, 50);
  background(backgroundColor);

  // beats
  beat = new Beat(music, 0.13);

  // circles
  for (var i = 0; i < circlesMaxSpawn; i++) {
    circles.push(new CircleFactory(random(width), random(height), random(0, 3) + circlesMaxSpawn - i));
    circleVector.push(createVector(random(width), random(height)));
  }

  // zoom
  zoom = new Zoom();
}

function draw() {
  // backgroundColor
  // background(backgroundColor);

  // beat
  beat.draw();
  if (beat.detectBeat(beat.getLevel())) {
    colorMode(HSB, 255);
    background(random(255), 255, random(100, 200));
    circleSpeed = random(1, 3);
    for (var i = 0; i < circleVector.length; i++) {
      circleVector[i] = createVector(random(-180, width + 180), random(-180, height + 180));
    }
  }

  push();
  for (var i = 0; i < circles.length; i++) {
    translate(10, 3);
    colorMode(HSB, 255);
    stroke(random(255), 255, 255);
    circles[i].run(circleVector[i].x, circleVector[i].y, circleSpeed, random(1, 180));
  }
  pop();

  zoom.run();
}

class CircleFactory {
  constructor(x, y, size = 4, speed = 0) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    // this.velocity = createVector(random(-1, 1), random(-1, 0));

    // fill(random(255), 0,);
    noFill();
    this.run(random(width), random(height), this.speed, this.size);
  }

  isDead() {
    return this.lifespan < 0;
  }

  run(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    // noFill();
    colorMode(RGB, 255);
    fill(255, 255, 255, 40);
    // stroke(0);
    this.x += random(-speed, speed);
    this.y += random(-speed, speed);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Zoom {
  constructor() {
    this.r = height * 0.45;
    this.theta = 0;
    this.theta_vel = 0;
    this.theta_acc = 0.0001;
    this.theta_max = 30;

    this.tick = 0;
    noStroke();

    this.run();
  }
  run() {
    translate(width / 2, height / 2);
    // Convert polar to cartesian
    let x = this.r * cos(this.theta);
    let y = this.r * sin(this.theta);

    push();
    colorMode(HSB, 255);
    fill(this.tick++, 255, 255);
    if (this.tick >= 255) {
      this.tick = 0;
    }
    // Draw the ellipse at the cartesian coordinate
    ellipseMode(CENTER);
    ellipse(x, y, 32, 32);
    pop();

    // Apply acceleration and velocity to angle
    // (r remains static in this example)
    this.theta_vel += this.theta_acc;
    this.theta += this.theta_vel;
  }
}

class Beat {
  constructor(soundFile, threshold = 0.11) {
    // :: Beat Detect Variables
    // how many draw loop frames before the this.beatCutoff starts to decay
    // so that another beat can be triggered.
    // frameRate() is usually around 60 frames per second,
    // so 20 fps = 3 beats per second, meaning if the song is over 180 BPM,
    // we wont respond to every beat.
    this.beatHoldFrames = 30;

    // what amplitude level can trigger a beat?
    this.beatThreshold = threshold;

    // When we have a beat, this.beatCutoff will be reset to 1.1*this.beatThreshold, and then decay
    // Level must be greater than this.beatThreshold and this.beatCutoff before the next beat can trigger.
    this.beatCutoff = 0;
    this.beatDecayRate = 0.98; // how fast does beat cutoff decay?
    this.framesSinceLastBeat = 0; // once this equals this.beatHoldFrames, this.beatCutoff starts to decay.

    this.amplitude = new p5.Amplitude();
    this.amplitude.setInput(soundFile);
    this.amplitude.smooth(0.9);
  }

  detectBeat(level) {
    if (level > this.beatCutoff && level > this.beatThreshold) {
      this.beatCutoff = level * 1.2;
      this.framesSinceLastBeat = 0;
      return true;
    } else {
      if (this.framesSinceLastBeat <= this.beatHoldFrames) {
        this.framesSinceLastBeat++;
      } else {
        this.beatCutoff *= this.beatDecayRate;
        this.beatCutoff = Math.max(this.beatCutoff, this.beatThreshold);
      }
      return false;
    }
  }

  draw() {
    this.level = this.amplitude.getLevel();
  }

  getLevel() {
    return this.level;
  }
}
