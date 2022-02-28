let tick = 0;
let tickTime = 0;
let tickAngle = 0;
let allTime;
let tickTextSize = 0;
let boxes = [];
let angles = [];
//
let phases;

let tickBeat = 0.5;

let tickColor = 0;
const tickColorStep = 13;

let beatBrightness;
const GR = 1.618;

let music;
let beat;

let sliderSpeed;
function preload() {
  music = loadSound("../music/ludowic-delusivebunker.mp3");
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  noStroke();

  // beats
  music.play();
  beat = new Beat(music, 0.13);

  // speed for rect
  sliderSpeed = createSlider(0, 100, 0);
  sliderSpeed.position(10, 10);
  sliderSpeed.style("width", "300px");
}

function draw() {
  background(0, 10);
  tick = tick + 1 * (deltaTime / 1000);
  tickTime = tickTime + 1 * (deltaTime / 1000);

  // test timer
  push();
  fill(255, 255, 255, 50);
  text("framerate - " + frameRate(), 10, 45);
  text("tick - " + int(tick), 10, 30);
  text("millis - " + str(millis()), 10, 15);
  text("deltaTime- " + deltaTime, 10, 60);
  // system variable deltaTime contains the time difference between the beginning of the previous frame and the beginning of the current frame in milliseconds
  // 1000 milliseconds = 1 seconds
  theDate = `${str(year())} - ${str(month())} - ${str(day())}`;
  theTime = `${str(hour())} - ${str(minute())} - ${str(second())} - ${str(millis())}`;
  text(theDate, 10, 75);
  text(theTime, 10, 90);
  pop();

  // huge timer
  push();
  fill(color(255, 255, 255, 60));
  textAlign(CENTER, CENTER);

  tickTextSize += 1.4;
  if (tickTextSize >= 400) {
    tickTextSize = 0;
  }
  textSize(int(12 + tickTextSize * 10)); // get total time of the video; scale toward it
  text(int(tickTime), width / 2, height / 2);
  pop();

  // beat
  beat.draw();
  beatBrightness = map(beat.getLevel(), 0, 1, 0, 200);

  if (tick > tickBeat) {
    //
    boxes.push(new Boxes(width / 2 + sqrt(width / 2), height / 2 + sqrt(height / 2), tickAngle, sqrt(2), tickColor));

    // box angle
    if (tickAngle >= 360) tickAngle = tickAngle - 360;
    tickAngle += GR * 6;

    // box color
    tickColor += tickColorStep;
    if (tickColor >= 255) tickColor = tickColor - 255;
    tick = tick - tickBeat;
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].draw(beatBrightness, sliderSpeed.value());
    if (boxes[i].size > width * 3 || boxes[i].size > height * 3) {
      boxes.splice(i, 1);
    }
  }
}

class Boxes {
  constructor(x = 100, y = 100, angle = 0, size = 30, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = angle;
    this.color = color;
    this.speed = sqrt(0.2);
    this.speedScale = 0.001;
    this.draw();
  }
  draw(beatBrightness = 200, speedMultiplier = 0) {
    this.speedScale += 0.001 + speedMultiplier / 10000;
    this.size += this.speed * this.speedScale;
    push();
    colorMode(HSB, 255);
    translate(this.x, this.y);
    rotate(this.angle);
    fill(color(this.color, 255, beatBrightness + map(this.size, 0, width, 200, 0)));
    rect(0, 0, this.size, this.size);
    pop();
  }
}
