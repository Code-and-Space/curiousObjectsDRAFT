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

// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

let angle = 0
let objectScale = 1

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

let miguelSeeds = [seed01, seed02, seed03, seed04, seed05, seed05a, seed06, seed06a, seed07, seed07a];
let miguelSeedsPosition = [];

let miguelHalfCircles = [greenHalfCircle, whiteHalfCircle, redHalfCircle, pinkHalfCircle];
let miguelHalfCirclePosition = [];







// This is to control the time it takes to run a full cycle.
let miguelSpeedMultiplier = 1;

// function setup() {
//   createCanvas(600, 600);
//
//   for (let i = 0; i < miguelHalfCircles.length; i++){
//     // Setting your speedX and speedY allows you to just look at the code when every shape is still
//     // miguelHalfCircles[i].xspeed = 0;
//     // miguelHalfCircles[i].yspeed = 0;
//
//     // This is where your speed multiplier adjusts the speedX and speedY
//     miguelHalfCircles[i].xspeed = miguelHalfCircles[i].xspeed * miguelSpeedMultiplier;
//     miguelHalfCircles[i].yspeed = miguelHalfCircles[i].yspeed * miguelSpeedMultiplier;
//
//     miguelHalfCirclePosition[i] = new Watermelon(miguelHalfCircles[i]);
//   }
//   for (let i = 0; i < miguelSeeds.length; i++){
//     // Setting your speedX and speedY allows you to just look at the code when every shape is still
//     // miguelSeeds[i].xspeed = 0;
//     // miguelSeeds[i].yspeed = 0;
//
//     // This is where your speed multiplier adjusts the speedX and speedY
//     miguelSeeds[i].xspeed = miguelSeeds[i].xspeed * miguelSpeedMultiplier;
//     miguelSeeds[i].yspeed = miguelSeeds[i].yspeed * miguelSpeedMultiplier;
//
//     miguelSeedsPosition[i] = new Seed(miguelSeeds[i]);
//   }
// }
//
// function draw() {
//   background(135);
//   for (i = 0; i < miguelHalfCircles.length; i++){
//     miguelHalfCirclePosition[i].drawGhostedWatermelon();
//     miguelHalfCirclePosition[i].drawHalfCircle();
//     miguelHalfCirclePosition[i].traceObjectGreen();
//     miguelHalfCirclePosition[i].moveX();
//     miguelHalfCirclePosition[i].moveY();
//     miguelHalfCirclePosition[i].returnPosition();
//   }
//
//   for (i = 0; i < miguelSeeds.length; i++){
//     miguelSeedsPosition[i].drawGhostedSeed();
//     miguelSeedsPosition[i].drawSeed();
//     miguelSeedsPosition[i].traceObjectPink();
//     miguelSeedsPosition[i].moveX();
//     miguelSeedsPosition[i].moveY();
//     miguelSeedsPosition[i].returnPosition();
//   }
// }



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
    if (this.saidGeo.transX > width || this.saidGeo.transX < 0){
      this.saidGeo.xspeed = this.saidGeo.xspeed *-1;
    }
    this.saidGeo.transX = this.saidGeo.transX + this.saidGeo.xspeed;
  }


  moveY(){
    if (this.saidGeo.transY > height || this.saidGeo.transY < 0){
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
    if (this.saidGeo.transX > width || this.saidGeo.transX < 0){
      this.saidGeo.xspeed = this.saidGeo.xspeed *-1;
    }
    this.saidGeo.transX = this.saidGeo.transX + this.saidGeo.xspeed;
  }

  moveY(){
    if (this.saidGeo.transY > height || this.saidGeo.transY < 0){
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
}
