class moving {
  constructor(x, y) {
    this.len = 0;
    this.x = 0;
    this.y = 0;
    this.body = [];
    //should be done with screen rez/2 not mannualy with 9,9
    this.body[0] = createVector(9, 9);
    this.xdir = 0;
    this.ydir = 0;
    rect(this.x, this.y, 10, 10);
    //fill(255, 204, 0);
    
  }

  setDir(xdir, ydir) {

    this.xdir = xdir;
    this.ydir = ydir;

  }
  update() {
    let leb = this.body[this.body.length - 1].copy();
    this.body.shift();
    leb.x += this.xdir;
    leb.y += this.ydir;
    this.body.push(leb);

  }
  getBigger() {
    let leb = this.body[this.body.length-1].copy();
    this.len = this.len + 1;
    this.body.push(leb);
  }

  death() {


    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x < 0 || y < 0 || x > w - 1 || y > h - 1) {
      //this.body[0].x = 1;
      //this.body[0].y = 1;
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let pata = this.body[i]
      if (pata.x == x && pata.y == y) {
        return true;
      }
      return false;
    }
  }

  eatFood(fcord) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x == fcord.x && y == fcord.y) {
      print("AM AM!");
      this.getBigger();
      return true;
    }
    return false;
  }

  show() {

    for (let i = 0; i < this.body.length; i++) {
      fill(255, 204, 0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}
