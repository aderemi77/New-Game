class Game {
  constructor() {
    this.player = new Player();

    this.obstacles = [];
    this.background = new Background();
    this.toiletArray = [];
  }

  preload() {
    this.player.preload();
    this.background.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    if (frameCount % 75 === 0) {
      this.obstacles.push(new Obstacle());
      this.toiletArray.push(new ShitStorm());
    }

    this.obstacles = this.obstacles.filter((obstacle) => {
      obstacle.drawObstacle();

      return obstacle.left >= -obstacle.width;
    });

    this.toiletArray = this.toiletArray.filter((shitty) => {
      shitty.drawShitStorm();

      return shitty.top >= +shitty.height;
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
