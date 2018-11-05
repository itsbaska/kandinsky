// State 5

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

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  background(getBackgroundColor());
  makeCircle();
  makeLine();
  makeArches();
  makeOpenTriangle();
  makeQuadTriangle();
}

function draw() {}
