const game = new Game();

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background("orange");
  game.play();
}

function preload() {
  game.preload();
}

function keyPressed() {
  game.keyPressed();
}
