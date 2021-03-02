class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.dirX = 20;
    this.dirY = 0;
    this.size = 0;
    this.body = [];
  }

  update() {
    for (let i = 0; i < this.size - 1; i++) {
      this.body[i] = this.body[i + 1];
    }
    this.body[this.size - 1] = createVector(this.x, this.y);

    this.x += this.dirX;
    this.y += this.dirY;
  }

  show() {
    fill(20, 256, 0);
    for (let i = 0; i < this.size; i++) {
      rect(this.body[i].x, this.body[i].y, 20, 20);
    }
    rect(this.x, this.y, 20, 20);
  }
  
  eat() {
    this.size++;
    this.body.unshift([createVector(0,0), createVector(0,0)]);
  }
}