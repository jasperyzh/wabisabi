// ui
let sliderAngle;

var tickColor = 0;
var n = 0; // distance
var c = 8;
let angle;
let tick = 0;
let particles = [];
function setup() {
  createCanvas(800, 800);
  // speed for rect
  // noStroke()
  sliderAngle = createSlider(0, 2000, 1375);
  sliderAngle.position(10, 10);
  sliderAngle.style("width", "1200px");

  frameRate(120)
}

function draw() {
  // background(13,5);
  /* if (keyIsPressed === true && keyCode === 13) {
    background(13);
  } else {
    background(255);
  } */
  if (keyIsPressed === true && keyCode === 13) {
    background(255);
    n = 0;
  }

  let sliderAngleValue = float(sliderAngle.value() / 10);
  fill(0);
  textSize(30);
  text("Phyllotaxis", 10, 30);
  text(sliderAngleValue, 10, 60);

  var a = n * sliderAngleValue;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;
  push();
  stroke(130)
  colorMode(HSB, 800);
  fill(color(tickColor, 600, 800));
  ellipse(x, y, 33, 33);
  pop();
  n += 1;
  if (tickColor >= 800) tickColor = tickColor - 800;
  tickColor+=1;

  /* 
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, 13, 13);
  pop();

  for (var i = 0; i < 50; i++) {
    push();
    translate(width / 2, height / 2);
    // let a = atan2(i * 10 - height / 2, i * 10 - width / 2);
    let posX = 10 * i;
    let posY = 5 * i;
    let a = atan2(posX * 1.03, posY * 1.03);
    rotate(a);
    let test = ellipse(posX, posY, 13, 13);
    pop();
  } */
  /*  for (var i = 0; i < 50; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(atan2(mouseY - height / 2, mouseX - width / 2));
    let test = ellipse(i * 10, i * 10, 13, 13);
    pop();
  } */
}
/* 
class DrawCircle{
  constructor(){

  }
  draw(){

  }
} */
