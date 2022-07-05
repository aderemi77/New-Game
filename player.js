class Player {
  constructor() {
    this.left = 50;
    this.top = 0;
    this.width = 50;
    this.height = 50;
    this.velocity = 0;
    this.floor = 412;
    this.jumpCount = 0;

    this.poopArray = [];
  }

  preload() {
    this.img = loadImage("./character-left.png");
  }

  keyPressed() {
    if (keyCode === ARROW_UP) {
      this.jump();
    }
    if (keyCode === SPACE_BAR) {
      this.shootPoop();
    }

    if (keyCode === ARROW_RIGHT) {
      this.movePlayerRight();
    }

    if (keyCode === ARROW_LEFT) {
      this.movePlayerLeft();
    }
  }

  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.top -= 45;
    this.velocity -= 5;
    this.jumpCount++;
  }

  shootPoop() {
    const assLocation = this.geoffreysAssLocation();
    this.poopArray.push(new Poop(assLocation.top, assLocation.left));
  }

  movePlayerRight() {
    this.left += 5;
  }

  movePlayerLeft() {
    this.left -= 5;
  }

  geoffreysAssLocation() {
    return {
      top: this.top + 40,
      left: this.left + 30,
    };
  }

  drawPlayer() {
    this.velocity += GRAVITY;
    this.top += this.velocity;
    image(this.img, this.left, this.top, this.width, this.height);

    if (this.hasReachedTheGround()) {
      this.top = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }

    this.poopArray.forEach((poopie) => {
      poopie.throwPoopies();
    });

    this.flush();

    if (keyIsDown(ENTER_KEY)) {
      this.createDiarrhea();
      this.moveLiquidPoopOnEnter();
    } else {
      this.begonePoopieNeedToCleanTheWhatWhatTheButt();
    }
  }

  begonePoopieNeedToCleanTheWhatWhatTheButt() {
    if (this.diarrhea) {
      const noLongerInGeoffreysButt = false;
      this.diarrhea.drawLiquidPoop(noLongerInGeoffreysButt, this.tookImodium());
    }
  }

  tookImodium() {
    return () => {
      if (this.diarrhea) {
        this.diarrhea = null;
      }
    };
  }

  createDiarrhea() {
    if (!this.diarrhea) {
      this.diarrhea = new Diarrhea();
    }
  }

  moveLiquidPoopOnEnter() {
    const assLocation = this.geoffreysAssLocation();
    this.diarrhea.followGeoggreysAss(assLocation.left, assLocation.top);

    const isDiarrheaStillAttachedToGeoffreyOurChinlessVikingsButt = true;
    this.diarrhea.drawLiquidPoop(
      isDiarrheaStillAttachedToGeoffreyOurChinlessVikingsButt
    );
  }

  hasReachedTheGround() {
    return this.top >= this.floor;
  }

  flush() {
    this.poopArray = this.poopArray.filter(
      (poopie) => poopie.left <= CANVAS_WIDTH
    );
  }
}
