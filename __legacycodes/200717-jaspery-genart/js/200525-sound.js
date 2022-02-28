let mic, fft;
let song;
let palette;

let tick, tickDirection;

let speedLabelY;
function preload() {
  // song = loadSound("./music/michaeljackson-thriller.mp3");
  song = loadSound("./music/michaeljackson-billiejean.mp3");
  // song = loadSound("./music/daftpunk-toolong.mp3");
}
function setup() {
  createCanvas(1024, 1024);
  // noStroke();
  stroke(13);
  noFill();

  song.play();

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(song);
  tick = 0;
  tickDirection = false;
  speedLabelY = height / 2;

  palette = [color(255, 229, 72), color(255, 178, 15), color(255, 75, 62), color(151, 45, 7), color(88, 39, 7)];
}

function draw() {
  colorMode(HSB, 255);
  background(color(24, 92, 35));

  if (!tickDirection) {
    tick += 0.01;
  } else {
    tick -= 0.01;
  }

  if (!tickDirection && tick > 1) {
    tickDirection = !tickDirection;
  } else if (tickDirection && tick < 0) {
    tickDirection = !tickDirection;
  }

  let spectrum = fft.analyze();

  let baseline = height / 2;
  let maxWidth = 800;
  let maxSpectrum = 700;

  push();
  let interA = lerpColor(palette[0], palette[1], tick);
  fill(interA);
  fill(palette[0]);
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(map(i, 0, maxSpectrum, 0, width), map(spectrum[i], 0, 255, baseline * 1.1, 0));
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();

  push();
  interA = lerpColor(palette[1], palette[2], tick);
  fill(interA);
  fill(palette[1]);
  beginShape();
  for (i = 0; i < spectrum.length; i += 4) {
    vertex(map(i, 0, maxSpectrum, 0, width), map(spectrum[i], 0, 255, baseline, baseline * 1.8 - baseline));
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();

  push();
  interA = lerpColor(palette[2], palette[3], tick);
  fill(interA);
  beginShape();
  for (i = 0; i < spectrum.length; i += 8) {
    vertex(map(i, 0, maxSpectrum, 0, width), map(spectrum[i], 0, 255, baseline, baseline * 2.6 - baseline));
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();

  push();
  interA = lerpColor(palette[3], palette[4], tick);
  fill(interA);
  beginShape();
  for (i = 0; i < spectrum.length; i += 13) {
    vertex(map(i, 0, maxSpectrum, 0, width), map(spectrum[i], 0, 255, baseline, baseline * 3.4 - baseline));
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();

  // Draw some circles to show what is going on
  push();
  strokeWeight(5);

  // Set the volume to a range between 0 and 1.0
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);

  stroke(255);
  fill(51, 100);
  ellipse(mouseX, 100, 24, 24);

  let speed = map(mouseY, 0.1, height, 0, 2);

  if (mouseIsPressed) {
    // Set the rate to a range between 0.1 and 4
    // Changing the rate alters the pitch
    speed = constrain(speed, 0.01, 4);
    song.rate(speed);
    speedLabelY = mouseY;
  } else {
    speed = 1;
    song.rate(speed);

    speedLabelY = height / 2;
  }

  stroke(255);
  fill(51, 100);
  ellipse(100, speedLabelY, 24, 24);
  pop();
}

function mouseReleased() {
}

function mousePressed() {
  /*  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  } */
}

/* 
let carrier; // this is the oscillator we will hear
let modulator; // this oscillator will modulate the frequency of the carrier

let analyzer; // we'll use this visualize the waveform

// the carrier frequency pre-modulation
let carrierBaseFreq = 220;

// min/max ranges for modulator
let modMaxFreq = 112;
let modMinFreq = 0;
let modMaxDepth = 150;
let modMinDepth = -150;

function setup() {
  let cnv = createCanvas(800, 400);
  noFill();

  carrier = new p5.Oscillator('sine');
  carrier.amp(0); // set amplitude
  carrier.freq(carrierBaseFreq); // set frequency
  carrier.start(); // start oscillating

  // try changing the type to 'square', 'sine' or 'triangle'
  modulator = new p5.Oscillator('sawtooth');
  modulator.start();

  // add the modulator's output to modulate the carrier's frequency
  modulator.disconnect();
  carrier.freq(modulator);

  // create an FFT to analyze the audio
  analyzer = new p5.FFT();

  // fade carrier in/out on mouseover / touch start
  toggleAudio(cnv);
}

function draw() {
  background(30);

  // map mouseY to modulator freq between a maximum and minimum frequency
  let modFreq = map(mouseY, height, 0, modMinFreq, modMaxFreq);
  modulator.freq(modFreq);

  // change the amplitude of the modulator
  // negative amp reverses the sawtooth waveform, and sounds percussive
  //
  let modDepth = map(mouseX, 0, width, modMinDepth, modMaxDepth);
  modulator.amp(modDepth);

  // analyze the waveform
  waveform = analyzer.waveform();

  // draw the shape of the waveform
  stroke(255);
  strokeWeight(10);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, -height / 2, height / 2);
    vertex(x, y + height / 2);
  }
  endShape();

  strokeWeight(1);
  // add a note about what's happening
  text('Modulator Frequency: ' + modFreq.toFixed(3) + ' Hz', 20, 20);
  text(
    'Modulator Amplitude (Modulation Depth): ' + modDepth.toFixed(3),
    20,
    40
  );
  text(
    'Carrier Frequency (pre-modulation): ' + carrierBaseFreq + ' Hz',
    width / 2,
    20
  );
}

// helper function to toggle sound
function toggleAudio(cnv) {
  cnv.mouseOver(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.touchStarted(function() {
    carrier.amp(1.0, 0.01);
  });
  cnv.mouseOut(function() {
    carrier.amp(0.0, 1.0);
  });
} */
