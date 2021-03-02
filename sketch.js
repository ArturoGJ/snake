let s; // Snake
let f; // Food
let fr = 5; // Frame Rate or dificulty lol
let score;

function setup() {
  createCanvas(400, 420);
  frameRate(fr);
  score = createDiv('Score = 0');
  score.position(10, 400);
  score.id = 'score';
  score.style('color', 'black');
  s = new Snake();
  f = new Food(Math.round(random(0, 10)), Math.round(random(0, 10)));
}

function draw() {
  background(220);
  f.show();
  s.update();
  s.show();
  checkForCollision();
  checkFoodAndSnake();
  
  
  // Grid
  for(let i = 0; i<=width; i+=20){
    line(i, 0, i, height - 20);
    line(0, i, width, i);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && s.dirX !== 20) {
    s.dirX = -20;
    s.dirY = 0;
  } else if (keyCode === RIGHT_ARROW && s.dirX !== -20) {
    s.dirX = 20;
    s.dirY = 0;
  } else if (keyCode === UP_ARROW && s.dirY !== 20){
    s.dirX = 0;
    s.dirY = -20;
  } else if (keyCode === DOWN_ARROW && s.dirY !== -20){
    s.dirX = 0;
    s.dirY = 20; 
  }
}

function checkFoodAndSnake(){
  if(f.x === s.x && f.y === s.y){
    const prevScore = parseInt(score.html().substring(8));
    score.html('Score = ' + (prevScore + 1));
    s.eat();
    // TODO: Si la comida no debe aparecer en algun lugar donde haya parte de la serpiente.
    f = new Food(parseInt(random(0, 19)), parseInt(random(0, 19)));
  }
}

function checkForCollision(){
  if(s.x >= width || s.y >= height - 20 || s.x < 0 || s.y < 0 || snakeCollision()){
    noLoop();
    const finalScore = parseInt(score.html().substring(8));
    score.html('Game Over! Final Score: ' + finalScore);
  }
}

function snakeCollision(){
  for(let i = 0; i < s.size; i++){
    if(s.x === s.body[i].x && s.y === s.body[i].y){
      return true;
    }
  }
  return false;
}