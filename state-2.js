// State 2

var canvasHeight = 400;
var canvasWidth = 400;

function getBackgroundColor() {
  var backgroundColors = [
    "#DDD6C5",
    "#DDC8AE",
    "#F4EECF",
    "#DBDADB",
    "#E4DFD8"
  ];
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function makeCircle() {
  fill(255, 0, 0, 0);
  strokeWeight(getRandom(1, 20));
  ellipse(getRandom(50, 350), getRandom(50, 350), getRandom(100, 300));
}

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  background(getBackgroundColor());
  makeCircle();
}

function draw() {}
