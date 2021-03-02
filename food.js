class Food {
  
  constructor(x, y) {
    this.x = x*20;
    this.y = y*20;
  }

  update() {}

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, 20, 20);
  }
  
}