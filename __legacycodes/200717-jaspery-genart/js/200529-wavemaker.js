let music;
let beat;

let t = 0;

let sliders = {};

let bgColor = 0;
let bgBrightness = 0;
let spawn = 1;
let wavemaker;
let spiralSpawn = 43;
const spiralSize = 10;
let spiralRadius = spiralSize;
const spiralMaxSpawn = 50;
let spiralmaker = [];

let palette = [];
function preload() {
  music = loadSound("../music/cysmix-regen-base_remix.mp3");
}

function setup() {
  createCanvas(800, 800);

  palette.push(color(235, 99, 131));
  palette.push(color(250, 145, 145));
  palette.push(color(255, 233, 197));
  palette.push(color(180, 242, 225));

  // beats
  music.play();
  beat = new Beat(music, 0.13);

  // colorMode(HSB, 255);
  noStroke();
  // fill(40, 200, 40);

  sliders.bgcolor = new Sliders("Background Color", "bgcolor", 123);
  sliders.wavespawn = new Sliders("Wave Spawn", "wave-spawn", 10, 0, 1000);
  sliders.wavegap = new Sliders("Wave Gap", "wave-gap", 20, 5, 100);

  // wavemaker = new Wavemaker();

  // for (let i = 0; i < spiralSpawn; i++) {
  //   spiralmaker.push(new Spiralmaker(spiralRadius * i, spiralSize));
  // }
}

function draw() {
  push();
  colorMode(HSB, 255);
  // background(color(sliders.bgcolor.getValue(), 255, bgBrightness));
  background(color(bgColor, 255, bgBrightness, 13));
  pop();
  // beat
  beat.draw();
  if (beat.detectBeat(beat.getLevel())) {
    bgBrightness += 35 * 2;
    spawn += 20;
    spiralmaker.push(new Spiralmaker(spiralRadius /2 * spiralmaker.length, spiralSize));
  }
  bgColor+=4;
  if (bgColor >= 255) {
    bgColor = 0;
  }
  if (bgBrightness > 0) {
    bgBrightness -= 1 * 2;
  }
  // background(10, 10);

  // wavemaker.run(sliders.wavespawn.getValue(), sliders.wavegap.getValue());
  // wavemaker.run(spawn, sliders.wavegap.getValue());

  for (let i = 0; i < spiralmaker.length; i++) {
    // spiralmaker.run(sliders.wavespawn.getValue(), sliders.wavegap.getValue());
    // let speedMuliply = (i+1) * 0.00016180339;
    let speedMuliply = (spiralSpawn + 1) * 0.00001618 - 0.00001618 * (i + 1);
    spiralmaker[i].run(spiralRadius /2 * (i + 1), spiralSize, palette[i % 3], speedMuliply);
  }

  // sliders.run
  for (const slider in sliders) {
    sliders[slider].run();
  }
}

class Spiralmaker {
  constructor(radius = 10, size = 10) {
    this.r = radius;
    this.size = size;
    this.theta = 0;
    this.theta_vel = 0;
    this.theta_acc = 0.0001;
    this.theta_max = 0.01;
    this.myX = this.r * cos(this.theta);
    this.myY = this.r * sin(this.theta);
  }
  run(radius = 10, size = 10, fillColor, speed = 0.0001) {
    this.theta_acc = speed * 0.1;
    this.r = radius;
    this.size = size;
    push();
    fill(fillColor);
    // colorMode(HSB, 255)
    // fill(color(palette[random(255)], 255,255));
    translate(width / 2, height / 2);
    this.myX = this.r * cos(this.theta);
    this.myY = this.r * sin(this.theta);
    ellipse(this.myX, this.myY, this.size);
    this.theta_vel += this.theta_vel < this.theta_max ? this.theta_acc : 0;
    this.theta += this.theta_vel;
    pop();
  }
}

class Wavemaker {
  constructor() {
    this.t = 0;
  }
  run(wavespawn = 100, wavegap = 30) {
    // make a x and y grid of ellipses
    for (let x = 0; x <= wavespawn; x = x + wavegap) {
      fill(color(map(x, 0, wavespawn, 0, 255), 255, 255));

      for (let y = 0; y <= wavespawn; y = y + wavegap) {
        // starting point of each circle depends on mouse position
        const xAngle = map(mouseX, 0, wavespawn, -4 * PI, 4 * PI, true);
        const yAngle = map(mouseY, 0, wavespawn, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / wavespawn) + yAngle * (y / wavespawn);

        // each particle moves in a circle
        const myX = x + 20 * cos(2 * PI * this.t + angle);
        const myY = y + 20 * sin(2 * PI * this.t + angle);
        push();
        colorMode(HSB, 255);
        fill(color(map(x, 0, wavespawn, 0, 255), 255, 255));
        ellipse(myX, myY, 10); // draw particle
        pop();
      }
    }

    this.t = this.t + 0.005; // update time
  }
}

class Sliders {
  constructor(name, id, value = 100, min = 0, max = 255) {
    this.name = name;
    this.id = id;
    this.value = value;
    this.min = min;
    this.max = max;
    document.getElementById("debug").insertAdjacentHTML(
      "afterbegin",
      `
      <div class="form-group">
    <label for="${this.id}">${this.name} <span id="${this.id}-value">${this.value}</span> </label>
    <input id="${this.id}" type="range" class="form-control-range" min="${this.min}" max="${this.max}" value="${this.value}">
    </div>
    `
    );
    this.bSlider = document.getElementById(this.id);
    this.bSliderValue = document.getElementById(`${this.id}-value`);
  }
  run() {
    this.value = this.bSlider.value;
    this.bSliderValue.innerHTML = this.value;
  }
  getValue() {
    return int(this.value);
  }
}
