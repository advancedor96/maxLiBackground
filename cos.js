let img;
function setup() {
  createCanvas(700, 400);
  img = loadImage('images/dog.jpg');
}

function draw() {
  image(img, 0, 0, width/2);
}
