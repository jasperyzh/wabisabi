const spawnWave = 8;

let wave = [];
let music;
let beat;

var backgroundColor;

let waveSpeed;

function preload() {
  music = loadSound("../music/daftpunk-superheroes.mp3");
}

function setup() {
  createCanvas(800, 400);

  // start music
  music.play();

  // wave
  for (let i = 0; i < spawnWave; i++) {
    wave[i] = new Wave(18, 500, i * 0.2, (1 + i) * 0.4 * 50);
  }

  // backgroundColor
  backgroundColor = color(255);
  background(backgroundColor);

  // beats
  beat = new Beat(music);
}

function draw() {
  // backgroundColor
  background(backgroundColor);
  
  // beat
  beat.draw();

  // get level from beat
  let level = beat.getLevel();

  // wave
  for (let i = 0; i < spawnWave; i++) {
    wave[i].calcWave(level);
    wave[i].render();
  }
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
    // rectangle parameters
    this.rectRotate = true;
    this.rectMin = 15;
    this.rectOffset = 20;
    this.numRects = 10;

    // :: Beat Detect Variables
    // how many draw loop frames before the this.beatCutoff starts to decay
    // so that another beat can be triggered.
    // frameRate() is usually around 60 frames per second,
    // so 20 fps = 3 beats per second, meaning if the song is over 180 BPM,
    // we wont respond to every beat.
    this.beatHoldFrames = 30;

    // what amplitude level can trigger a beat?
    this.beatThreshold = 0.11;

    // When we have a beat, this.beatCutoff will be reset to 1.1*this.beatThreshold, and then decay
    // Level must be greater than this.beatThreshold and this.beatCutoff before the next beat can trigger.
    this.beatCutoff = 0;
    this.beatDecayRate = 0.98; // how fast does beat cutoff decay?
    this.framesSinceLastBeat = 0; // once this equals this.beatHoldFrames, this.beatCutoff starts to decay.

    rectMode(CENTER);
    this.amplitude = new p5.Amplitude();
    this.amplitude.setInput(soundFile);
    this.amplitude.smooth(0.9);
  }

  detectBeat(level) {
    if (level > this.beatCutoff && level > this.beatThreshold) {
      this.onBeat();
      this.beatCutoff = level * 1.2;
      this.framesSinceLastBeat = 0;
    } else {
      if (this.framesSinceLastBeat <= this.beatHoldFrames) {
        this.framesSinceLastBeat++;
      } else {
        this.beatCutoff *= this.beatDecayRate;
        this.beatCutoff = Math.max(this.beatCutoff, this.beatThreshold);
      }
    }
  }

  onBeat() {
    backgroundColor = color(random(0, 255), random(0, 255), random(0, 255));
    this.rectRotate = !this.rectRotate;
  }

  draw() {
    this.level = this.amplitude.getLevel();
    this.detectBeat(this.level);

    // distort the rectangle based based on the amp
    var distortDiam = map(this.level, 0, 1, 0, 1200);
    var w = this.rectMin;
    var h = this.rectMin;

    // distortion direction shifts each beat
    if (this.rectRotate) {
      var rotation = PI / 2;
    } else {
      var rotation = PI / 3;
    }

    // rotate the drawing coordinates to rectCenter position
    var rectCenter = createVector(width / 3, height / 2);

    push();
    // draw the rectangles
    for (var i = 0; i < this.numRects; i++) {
      var x = rectCenter.x + this.rectOffset * i;
      var y = rectCenter.y + distortDiam / 2;
      // rotate around the center of this rectangle
      translate(x, y);
      rotate(rotation);
      rect(0, 0, this.rectMin, this.rectMin + distortDiam);
    }
    pop();
  }

  getLevel() {
    return this.level;
  }
}
