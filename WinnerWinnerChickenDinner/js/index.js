var vehicles = [];
var font;

function preload() {
  font = loadFont(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/75580/Variane_Script.ttf"
  );
}

function setup() {
var cnv = createCanvas(1280, 300);
  cnv.parent('centerDiv');
  var points = font.textToPoints("HAPPY BIRTHDAY", 25, 200, 180, {
    sampleFactor: 0.1
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
//background(28, 41, 74);
    var diad = random(3, 6);
    var colorcircR = floor(random(21,255));
    var colorcircG = floor(random(10,255));
    var colorcircB = floor(random(10,255));
    var colorcirc = color(colorcircR, colorcircG , colorcircB);
    var vehicle = new Vehicle(pt.x, pt.y, diad, colorcirc);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0, 0, 0);

  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].behaviors();
    vehicles[i].update();
    vehicles[i].show();
  }
}
