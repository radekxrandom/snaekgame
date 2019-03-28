let rez = 20;
let x;
var y;
let xdir;
let ydir;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  moving = new moving(0, 0);
  w = floor(width / rez);
  h = floor(height / rez);
  addFood();
  frameRate(10);
}

function addFood() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    moving.setDir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    moving.setDir(0, 1)
  }
  if (keyCode === RIGHT_ARROW) {
    moving.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    moving.setDir(-1, 0);
  }

  return false;
}

function colDet() {
  if (food.fy === moving.y && food.fx === moving.x) {
    food.newCord();
  }
  return false;
}

function draw() {
  scale(rez);
  noStroke();
  background(220);
  if (moving.eatFood(food) == true) {
    addFood();
  }

  moving.update();
  moving.show();
  if (moving.death() == true) {
    print('dead');
    background(0, 0, 0);
    moving.body = [];
    moving.body[0] = createVector(9, 9);
    moving.xdir = 0;
    moving.ydir = 0;
    moving.show();
    //background(220);



  }
  fill(100, 100, 255);
  rect(food.x, food.y, 1, 1);




}
