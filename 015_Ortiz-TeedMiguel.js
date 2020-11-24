// let angle = 0
// let objectScale = 1


// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

let greenHalfCircle = {
  x: 0,
  y: 0,
  xWidth: 300,
  yHeight: 300,
  start: 0,
  HowMuchPi: 3.14159265358979323846,
  color: 'green',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  xspeed: 2,
  yspeed: -6,
}


let whiteHalfCircle = {
  x: 0,
  y: 0,
  xWidth: 290,
  yHeight: 290,
  start: 0,
  HowMuchPi: 3.14159265358979323846,
  color: 255,
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  xspeed: 4,
  yspeed: -5,
}


let redHalfCircle = {
  x: 0,
  y: 0,
  xWidth: 285,
  yHeight: 270,
  start: 0,
  HowMuchPi: 3.14159265358979323846,
  color: 'red',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  xspeed: 1,
  yspeed: -3,
}


let pinkHalfCircle = {
  x: 0,
  y: 0,
  xWidth: 200,
  yHeight: 270,
  start: 0,
  HowMuchPi: 3.14159265358979323846,
  color: 'pink',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  xspeed: -.5,
  yspeed: -1,
}

let seed01 = {
  x: 60,
  y: 90,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  angle: 45,
  xspeed: 1,
  yspeed: 10,
}


let seed02 = {
  x: 60,
  y: 90,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  angle: 75,
  xspeed: 6,
  yspeed: -3,
}


let seed03 = {
  x: 45,
  y: 45,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  angle: 90,
  xspeed: 2,
  yspeed: -3,
}


let seed04 = {
  x: 25,
  y: 100,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 300,
  transY: 300,

  originX: 300,
  originY: 300,

  angle: 0,
  xspeed: 4,
  yspeed: 1,
}


let seed05 = {
  x: 0,
  y: 0,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 215,
  transY: 375,

  originX: 215,
  originY: 375,

  angle: 15,
  xspeed: 2,
  yspeed: 7,
}


let seed05a = {
  x: 0,
  y: 0,
  h: 9,
  w: 4,
  color: 'white',
  transX: 220,
  transY: 371,

  originX: 220,
  originY: 371,

  angle: 15,
  xspeed: 3,
  yspeed: 8,
}


let seed06 = {
  x: 0,
  y: 0,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 300,
  transY: 350,

  originX: 300,
  originY: 350,

  angle: 51,
  xspeed: 4,
  yspeed: -3,
}


let seed06a = {
  x: 0,
  y: 0,
  h: 12,
  w: 3,
  color: 'white',
  transX: 302,
  transY: 347,

  originX: 302,
  originY: 347,

  angle: 51,
  xspeed: 6,
  yspeed: -3,
}


let seed07 = {
  x: 0,
  y: 0,
  h: 25,
  w: 12.5,
  color: 'black',
  transX: 350,
  transY: 325,

  originX: 350,
  originY: 325,

  angle: 2,
  xspeed: 1,
  yspeed: -8,
}

let seed07a = {
  x: 0,
  y: 0,
  h: 12,
  w: 3,
  color: 'white',
  transX: 347,
  transY: 323,

  originX: 347,
  originY: 323,

  angle: 2,
  xspeed: 2,
  yspeed: 1,
}

let miguelHalfCircles = [greenHalfCircle, whiteHalfCircle, redHalfCircle, pinkHalfCircle];
let miguelHalfCirclePosition = [];
let miguelSeeds = [seed01, seed02, seed03, seed04, seed05, seed05a, seed06, seed06a, seed07, seed07a];
let miguelSeedsPosition = [];

let miguelSpeedMultiplier = 2;
// let angle = 0
// let objectScale = 1

class Watermelon{
  constructor(saidGeo){
    this.saidGeo = saidGeo;
  }

  drawGhostedWatermelon() {
    noStroke();
    fill(255, 255, 255, 30);
    push();
    translate(this.saidGeo.originX, this.saidGeo.originY);
    arc(this.saidGeo.x, this.saidGeo.y, this.saidGeo.xWidth, this.saidGeo.yHeight, this.saidGeo.start, this.saidGeo.HowMuchPi)
    pop();
  }

  drawHalfCircle() {
    push();
    noStroke();
    translate(this.saidGeo.transX, this.saidGeo.transY)
    fill(this.saidGeo.color)
    arc(this.saidGeo.x, this.saidGeo.y, this.saidGeo.xWidth, this.saidGeo.yHeight, this.saidGeo.start, this.saidGeo.HowMuchPi)
    pop();



  }

  traceObjectGreen(){
    stroke('green');
    push();
    translate(this.saidGeo.transX, this.saidGeo.transY)
    // rotate(this.saidGeo.angle)
    line(this.saidGeo.x, -2000, this.saidGeo.x, 2*height)
    line(-2000, this.saidGeo.y, 2*width, this.saidGeo.y)
    pop();
  }

  moveX() {
    if (this.saidGeo.transX > 600 || this.saidGeo.transX < 0){
      this.saidGeo.xspeed = this.saidGeo.xspeed *-1;
    }
    this.saidGeo.transX = this.saidGeo.transX + this.saidGeo.xspeed;
  }


  moveY(){
    if (this.saidGeo.transY > 600 || this.saidGeo.transY < 0){
      this.saidGeo.yspeed = this.saidGeo.yspeed *-1;
    }
    this.saidGeo.transY = this.saidGeo.transY + this.saidGeo.yspeed;
  }

  returnPosition() {
    if (this.saidGeo.transX === this.saidGeo.originX & this.saidGeo.transY === this.saidGeo.originY) {
      this.saidGeo.xspeed = 0;
      this.saidGeo.yspeed = 0;
    }
  }

  resetMovement() {
    if (this.saidGeo.transX === this.saidGeo.originX & this.saidGeo.transY === this.saidGeo.originY) {
      this.saidGeo.xspeed = getRandomInt(-10, 10);
      this.saidGeo.yspeed = getRandomInt(-10, 10);
    }
  }
}






class Seed {
  constructor(saidGeo){
    this.saidGeo = saidGeo;
  }

  drawGhostedSeed() {
    noStroke();
    fill(255, 255, 255, 30);

    push();
    translate(this.saidGeo.originX, this.saidGeo.originY);
    rotate(this.saidGeo.angle);
    ellipse(this.saidGeo.x, this.saidGeo.y, this.saidGeo.h, this.saidGeo.w);
    pop();
  }

  drawSeed() {
    push();
    noStroke();
    fill(this.saidGeo.color);
    translate(this.saidGeo.transX, this.saidGeo.transY);
    rotate(this.saidGeo.angle);
    ellipse(this.saidGeo.x, this.saidGeo.y, this.saidGeo.h, this.saidGeo.w);
    pop();
  }

  traceObjectPink(){
    push();
    stroke('pink');
    translate(this.saidGeo.transX, this.saidGeo.transY);
    rotate(this.saidGeo.angle);
    line(this.saidGeo.x, -height*2, this.saidGeo.x, height*2);
    line(-width*2, this.saidGeo.y, width*2, this.saidGeo.y);
    pop();
  }

  moveX() {
    if (this.saidGeo.transX > 600 || this.saidGeo.transX < 0){
      this.saidGeo.xspeed = this.saidGeo.xspeed *-1;
    }
    this.saidGeo.transX = this.saidGeo.transX + this.saidGeo.xspeed;
  }

  moveY(){
    if (this.saidGeo.transY > 600 || this.saidGeo.transY < 0){
      this.saidGeo.yspeed = this.saidGeo.yspeed *-1;
    }
    this.saidGeo.transY = this.saidGeo.transY + this.saidGeo.yspeed;
  }

  returnPosition() {
    if (this.saidGeo.transX === this.saidGeo.originX & this.saidGeo.transY === this.saidGeo.originY) {
      this.saidGeo.xspeed = 0;
      this.saidGeo.yspeed = 0;
    }
  }

  resetMovement() {
    if (this.saidGeo.transX === this.saidGeo.originX & this.saidGeo.transY === this.saidGeo.originY) {
      this.saidGeo.xspeed = getRandomInt(-10, 10);
      this.saidGeo.yspeed = getRandomInt(-10, 10);
    }
  }
}
