// State 4

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

function makeLine() {
  strokeWeight(getRandom(0.2, 1));
  line(
    getRandom(5, 395),
    getRandom(5, 395),
    getRandom(5, 395),
    getRandom(5, 395)
  );
}

function makeArches() {
  var x1 = getRandom(5, 100);
  var x2 = getRandom(10, 100);
  var numberOfArcs = getRandom(3, 7);
  var lineLength = (numberOfArcs + 3) * x2;
  strokeWeight(getRandom(0.2, 1));

  var i = 0;
  do {
    i += 1;
    arc(x1 + i * x2, x1, x2, x2, 0, HALF_PI + HALF_PI, OPEN);
  } while (i < numberOfArcs);

  line(x1, x1, lineLength, x1);
}

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  background(getBackgroundColor());
  makeCircle();
  makeLine();
  makeArches();
}

function draw() {}
