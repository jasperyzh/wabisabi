const spawnWave = 8;

let wave = [];
let music;
let beat;

var soundFile;
var amplitude;

var backgroundColor;

// rectangle parameters
var rectRotate = true;
var rectMin = 15;
var rectOffset = 20;
var numRects = 10;

// :: Beat Detect Variables
// how many draw loop frames before the beatCutoff starts to decay
// so that another beat can be triggered.
// frameRate() is usually around 60 frames per second,
// so 20 fps = 3 beats per second, meaning if the song is over 180 BPM,
// we wont respond to every beat.
var beatHoldFrames = 30;

// what amplitude level can trigger a beat?
var beatThreshold = 0.11;

// When we have a beat, beatCutoff will be reset to 1.1*beatThreshold, and then decay
// Level must be greater than beatThreshold and beatCutoff before the next beat can trigger.
var beatCutoff = 0;
var beatDecayRate = 0.98; // how fast does beat cutoff decay?
var framesSinceLastBeat = 0; // once this equals beatHoldFrames, beatCutoff starts to decay.

let waveSpeed;

function preload() {
  music = loadSound("../music/daftpunk-superheroes.mp3");
}
function setup() {
  createCanvas(800, 400);

  music.play();

  // beats
  // beat = new Beat(music);

  // wave
  for (let i = 0; i < spawnWave; i++) {
    wave[i] = new Wave(18, 500, i * 0.2, (1 + i) * 0.4 * 50);
  }

  backgroundColor = color(255);
  background(backgroundColor);

  rectMode(CENTER);
  amplitude = new p5.Amplitude();
  amplitude.setInput(music);
  amplitude.smooth(0.9);
}

function draw() {
  // background(0);
  background(backgroundColor);
  // beat.draw();

  var level = amplitude.getLevel();
  detectBeat(level);

  // distort the rectangle based based on the amp
  var distortDiam = map(level, 0, 1, 0, 1200);
  var w = rectMin;
  var h = rectMin;

  // distortion direction shifts each beat
  if (rectRotate) {
    var rotation = PI / 2;
  } else {
    var rotation = PI / 3;
  }

  // rotate the drawing coordinates to rectCenter position
  var rectCenter = createVector(width / 3, height / 2);

  push();
  // draw the rectangles
  for (var i = 0; i < numRects; i++) {
    var x = rectCenter.x + rectOffset * i;
    var y = rectCenter.y + distortDiam / 2;
    // rotate around the center of this rectangle
    translate(x, y);
    rotate(rotation);
    rect(0, 0, rectMin, rectMin + distortDiam);
  }
  pop();

  // waveSpeed = map(level, 0, 1, 0, 99);

  // wave
  for (let i = 0; i < spawnWave; i++) {
    wave[i].calcWave(level);
    wave[i].render();
  }
}

function detectBeat(level) {
  if (level > beatCutoff && level > beatThreshold) {
    onBeat();
    beatCutoff = level * 1.2;
    framesSinceLastBeat = 0;
  } else {
    if (framesSinceLastBeat <= beatHoldFrames) {
      framesSinceLastBeat++;
    } else {
      beatCutoff *= beatDecayRate;
      beatCutoff = Math.max(beatCutoff, beatThreshold);
    }
  }
}

function onBeat() {
  backgroundColor = color(random(0, 255), random(0, 255), random(0, 255));
  rectRotate = !rectRotate;
}

class Wave {
  constructor(xspacing = 16, period = 500.0, theta = 0.0, amplitude = 75.0) {
    this.debug;
    this.xspacing = xspacing; // Distance between each horizontal location
    this.w; // Width of entire wave
    this.theta = theta; // Start angle at 0
    this.amplitude = amplitude; // Height of wave
    this.period = period; // How many pixels before the wave repeats
    this.dx; // Value for incrementing x
    this.yvalues; // Using an array to store height values for the wave

    this.w = width + 16;
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(floor(this.w / this.xspacing));

    this.calcWave();
    this.render();
  }
  calcWave(speed = 0.02) {
    // Increment theta (try different values for
    // 'angular velocity' here)
    this.theta += speed;
    // this.theta += 0.02;

    // For every x value, calculate a y value with sine function
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }
  render() {
    noStroke();
    // A simple way to draw the wave with an ellipse at each location
    colorMode(HSB, 255);
    for (let x = 0; x < this.yvalues.length; x++) {
      fill(color(this.yvalues[x] * 2, 255, map(x, 0, this.yvalues.length, 80, 255)));

      ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 13, 13);
    }
  }
}

class Beat {
  constructor(soundFile) {
    this.amplitude = new p5.Amplitude();
    this.amplitude.setInput(soundFile);
    this.amplitude.smooth(0.91);
  }

  detectBeat(level) {
    var beatHoldFrames = 30;
    var beatThreshold = 0.22;
    var beatCutoff = 0;
    var beatDecayRate = 0.98;
    var framesSinceLastBeat = 0;
    if (level > beatCutoff && level > beatThreshold) {
      this.onBeat();
      beatCutoff = level * 1.2;
      framesSinceLastBeat = 0;
    } else {
      if (framesSinceLastBeat <= beatHoldFrames) {
        framesSinceLastBeat++;
      } else {
        beatCutoff *= beatDecayRate;
        beatCutoff = Math.max(beatCutoff, beatThreshold);
      }
    }
  }

  draw() {
    this.level = this.amplitude.getLevel();
    this.detectBeat(this.level);
  }
  onBeat() {
    background(color(random(255), random(255), random(255)));
  }
}

class Beat2 {
  constructor() {}

  detectBeat(level) {
    if (level > beatCutoff && level > beatThreshold) {
      onBeat();
      beatCutoff = level * 1.2;
      framesSinceLastBeat = 0;
    } else {
      if (framesSinceLastBeat <= beatHoldFrames) {
        framesSinceLastBeat++;
      } else {
        beatCutoff *= beatDecayRate;
        beatCutoff = Math.max(beatCutoff, beatThreshold);
      }
    }
  }

  onBeat() {
    background(color(random(0, 255), random(0, 255), random(0, 255)));
    rectRotate = !rectRotate;
  }
}
