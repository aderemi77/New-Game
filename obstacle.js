class Obstacle {
  constructor() {
    this.height = random(10, 20);
    this.width = random(25, 100);
    this.top = random(150, 500 - this.height - 5);
    this.left = CANVAS_WIDTH + 5;

    this.speed = random(1, 5);

    this.roundness = 20;
  }

  drawObstacle() {
    rect(this.left, this.top, this.width, this.height, this.roundness);

    this.left -= this.speed;
  }
}
