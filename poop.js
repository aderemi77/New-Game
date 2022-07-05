class Poop {
  constructor(top, left) {
    this.top = top;
    this.left = left;
  }

  throwPoopies() {
    textSize(20);
    text("man", this.left, this.top);

    this.left += 1;
  }
}
