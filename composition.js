// State 5

var canvasHeight = 400;
var canvasWidth = 400;
var colors = [
  "#F5EBE1",
  "#2E346E",
  "#CB2A15",
  "EC5F43",
  "#DB6B12",
  "#284620",
  "#352748"
];

var backgroundColors = ["#DDD6C5", "#DDC8AE", "#F4EECF", "#DBDADB", "#E4DFD8"];

function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function makeCircle() {
  fill(255, 0, 0, 0);
  strokeWeight(getRandom(1, 20));
  ellipse(getRandom(100, 300), getRandom(100, 300), getRandom(100, 300));
}

function makeLine() {
  strokeWeight(getRandom(1, 5));
  line(
    getRandom(-50, 450),
    getRandom(-50, 450),
    getRandom(-50, 450),
    getRandom(-50, 450)
  );
}

function makeArches() {
  var x1 = getRandom(5, 100);
  var arcWidth = getRandom(10, 50);
  var arcHeight = arcWidth;
  var numberOfArcs = getRandom(3, 7);
  var lineLength = (numberOfArcs + 3) * arcWidth;
  strokeWeight(getRandom(0.2, 1));

  var i = 0;
  do {
    i += 1;
    arc(x1 + i * arcWidth, x1, arcWidth, arcHeight, 0, HALF_PI + HALF_PI, OPEN);
  } while (i < numberOfArcs);

  line(x1, x1, lineLength, x1);
}

function makeOpenTriangle() {
  var x1 = getRandom(5, 50);
  var y1 = getRandom(5, 50);

  var x2 = getRandom(150, 250);
  var y2 = getRandom(350, 395);

  var x3 = getRandom(200, 395);
  var y3 = getRandom(5, 100);

  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
}

function makeQuadTriangle() {
  var x1 = getRandom(5, 395);
  var y1 = getRandom(5, 395);

  var x2 = getRandom(5, 395);
  var y2 = getRandom(5, 395);

  var x3 = x1 - getRandom(2, 15);
  var y3 = y1 - getRandom(2, 15);

  var x4 = getRandom(5, 395);
  var y4 = getRandom(5, 395);

  fill("#000");
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function makeGrids() {
  var numberOfLines = getRandom(2, 5);

  var x1 = getRandom(5, 300);
  var y1 = getRandom(5, 380);

  var x2 = x1 + getRandom(-5, 5);
  var y2 = y1 + getRandom(50, 120);

  var j = 0;
  var i;
  for (i = 0; i < numberOfLines; i++) {
    j += getRandom(5, 15);
    line(x1 + j, y1, x2 + j, y2);
    line(x1 + 5, y1 + j, x1 + getRandom(100, 150), y1 + j);
  }
}

function makeMultiRingedCircle(middleColor, maxSize) {
  var numberOfCircles = getRandom(1, 3);
  var x = getRandom(50, 350);
  var y = getRandom(50, 350);
  var w = getRandom(10, maxSize);

  var i;
  for (i = 1; i < numberOfCircles; i++) {
    if (i % 2 == 0) {
      i % 3 ? strokeWeight(0) : strokeWeight(Math.random());
      fill(getRandom(0, 180), getRandom(0, 180), getRandom(0, 180), 50);
    } else {
      fill(0, 0, 0, 0);
      strokeWeight(getRandom(0.2, 1));
    }
    ellipse(x, y, w + getRandom(3, 40));
  }
  fill(middleColor);
  ellipse(x, y, w);
}

function verticalLines() {
  var numberOfLines = getRandom(2, 5);

  var x1 = getRandom(5, 300);
  var y1 = getRandom(5, 380);

  var x2 = x1 + getRandom(-5, 5);
  var y2 = y1 + getRandom(100, 300);

  var j = 0;
  var i;
  for (i = 0; i < numberOfLines; i++) {
    line(x1 + j, y1, x2 + j, y2);
    j += getRandom(5, 45);
  }
}

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  background(getRandomColor(backgroundColors));

  makeCircle();
  makeLine();
  makeArches();
  makeOpenTriangle();
  makeQuadTriangle();

  push();
  rotate(Math.random() * 2);
  makeGrids();
  pop();

  makeMultiRingedCircle("#000", 50);
  makeMultiRingedCircle(
    color(getRandom(0, 180), getRandom(0, 180), getRandom(0, 180), 50),
    100
  );

  makeMultiRingedCircle("#000", 50);
  makeMultiRingedCircle(
    // color(getRandom(0, 180), getRandom(0, 180), getRandom(0, 180), 50),
    color(getRandomColor(colors)),
    100
  );

  verticalLines();
}

function draw() {
  scale(Math.random());
  rotate(Math.random());
}
