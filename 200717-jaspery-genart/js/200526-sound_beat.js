/**
 *  This technique tracks a beatThreshold level.
 *
 *  When the current volume exceeds the beatThreshold, we have a beat, and
 *  "debounce" to ensure each beat only triggers once.
 *
 *  When a beat is detected, we do two things to "debounce":
 *   - Increase the threshold, so that we don't get another
 *     beat right away, by adding a beatCutoff to the beatThreshold.
 *     The beatCutoff decays back to beatThreshold level at beatDecayRate.
 *   - Wait a certain amount of time before detecting another beat. This is
 *     accomplished by tracking framesSinceLastBeat > beatHoldFrames.
 *
 *  Each run through the Draw loop, the detectBeat() function decides
 *  whether we have a beat or not based on these Beat Detect Variables
 *  and the current amplitude level.
 *
 *  Thank you to Felix Turner's "Simple Beat Detection"
 *  http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/
 */

var soundFile;
var amplitude;

var backgroundColor;
let randColor;
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

let drawSoundwave;
let rotateHead
let michaelHead;
let michaelBody;

let tickRotate = 3;
function preload() {
  soundFile = loadSound("../music/michaeljackson-billiejean.mp3");

  michaelHead = loadImage("../images/michael-head.png");
  michaelBody = loadImage("../images/michael-body.png");
}
function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  soundFile.play();
}
function setup() {
  c = createCanvas(800, 800);
  noStroke();
  rectMode(CENTER);
  imageMode(CENTER);
  backgroundColor = color(random(255), random(255), random(255));
  randColor = color(random(255), random(50, 100), random(50, 100), random(50, 100));

  amplitude = new p5.Amplitude();

  soundFile.play();

  amplitude.setInput(soundFile);
  amplitude.smooth(0.91);

  drawSoundwave = new DrawSoundwave(soundFile);
}


function draw() {
  background(backgroundColor);

  drawSoundwave.draw();

  var level = amplitude.getLevel();
  detectBeat(level);

  // distort the rectangle based based on the amp
  var distortDiam = map(level, 0, 1, 0, 200);
  var w = rectMin;
  var h = rectMin;

  // var distortHead = map(level, 0, 1, 0, 1);


  // distortion direction shifts each beat
  if (rectRotate) {
    var rotation = PI / 2;
  } else {
    var rotation = PI / 3;
  }

  // rotate the drawing coordinates to rectCenter position
  var rectCenter = createVector(width / 3, height / 2);


  
  push();
  scale(0.8);
  image(michaelBody, width / 2, height / 2 + 200);
  pop();

  if (rectRotate) {
    rotateHead = -tickRotate;
  } else {
    rotateHead = tickRotate;
  }
  push();
  
  angleMode(DEGREES)
  translate(width / 2 +20, height /2 - 40);
  scale(1 * (level + 0.5));
  rotate(rotateHead)
  image(michaelHead, 0, 0);
  pop();


  let speed = map(mouseY, 0.1, height, 0, 2);

  if (mouseIsPressed) {
    // Set the rate to a range between 0.1 and 4
    // Changing the rate alters the pitch
    speed = constrain(speed, 0.01, 4);
    tickRotate += speed
    soundFile.rate(speed);
    // speedLabelY = mouseY;
  } else {
    speed = 1;
    soundFile.rate(speed);

    tickRotate -= speed * 0.01
    // speedLabelY = height / 2;
  }

  // push();

  // // draw the rectangles
  // for (var i = 0; i < numRects; i++) {
  //   var x = rectCenter.x + rectOffset * i;
  //   var y = rectCenter.y + distortDiam / 2;
  //   // rotate around the center of this rectangle
  //   translate(x, y);
  //   rotate(rotation);
  //   rect(0, 0, rectMin, rectMin + distortDiam);
  // }
  // pop();
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
  backgroundColor = color(random(255), random(255), random(255));
  randColor = color(random(255), random(100), random(100), random(100));

  rectRotate = !rectRotate;
}

class DrawSoundwave {
  constructor(sound) {
    this.sound = sound;

    this.fft = new p5.FFT();
    this.fft.setInput(this.sound);
  }
  draw() {
    let spectrum = this.fft.analyze();
    let maxSpectrum = 800;
    let baseline = height / 2;

    colorMode(HSB, 100);
    push();
    fill(randColor);
    // fill(color(100, 50, 50, 20));
    beginShape();
    vertex(0, 0);
    vertex(0, height);
    vertex(baseline, height);
    for (let i = 0; i < spectrum.length; i++) {
      vertex(map(spectrum[i], 0, 255, baseline, 0), map(i, 0, maxSpectrum, height, 0));
    }
    vertex(baseline, -1);
    endShape();

    push();
    fill(randColor);
    beginShape();
    vertex(width, 0);
    vertex(width, height);
    vertex(baseline, height);
    for (let i = 0; i < spectrum.length; i++) {
      vertex(map(spectrum[i], 0, 255, baseline, width), map(i, 0, maxSpectrum, height, 0));
    }
    vertex(baseline, -1);
    endShape();
  }
}
/* 
class TestSpectrograph {
  constructor() {
    var mic, osc, soundFile;
    var currentSource = "Broke For Free - As Colorful As Ever";

    var fft;
    var binCount = 1024;
    var bins = new Array(binCount);

    var speed = 4;

    // canvas is global so we can copy it
    var cnv;

    cnv = createCanvas(windowWidth, windowHeight);
    noStroke();
    colorMode(HSB);

    // make canvas drag'n'dropablle with gotFile as the callback
    makeDragAndDrop(cnv, gotFile);

    soundFile = loadSound("../../music/Broke_For_Free_-_01_-_As_Colorful_As_Ever.mp3");
    mic = new p5.AudioIn();
    osc = new p5.Oscillator();
    osc.amp(0.5);

    var smoothing = 0.6;
    fft = new p5.FFT(smoothing, binCount);
    fft.setInput(mic);
    toggleInput(1);
  }
  draw() {
    var spectrum = fft.analyze();

    // copy the sketch and move it over based on the speed
    copy(cnv, 0, 0, width, height, -speed, 0, width, height);

    // iterate thru current freq spectrum
    for (var i = 0; i < spectrum.length; i++) {
      var value;
      if (logView) {
        logIndex = logScale(i, spectrum.length);
        value = spectrum[logIndex];
      } else {
        value = spectrum[i];
      }
      var c = value;
      fill(c, 255, c);
      var percent = i / spectrum.length;
      var y = percent * height;
      rect(width - speed, height - y, speed, height / spectrum.length);
    }
  }
}
 */
