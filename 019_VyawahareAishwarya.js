// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

// left square
let aishwaryaBox01 = {
  color: 255,
  rectX: 252,
  rectY: 352,

  originX: 252,
  originY: 352,

  rectWidth: 46,
  rectHeight: 46,
  speedX: 5,
  speedY: 5
}
// right square
let aishwaryaBox02 = {
  color: 255,

  rectX: 302,
  rectY: 352,

  originX: 302,
  originY: 352,

  rectWidth: 46,
  rectHeight: 46,
  speedX: 2,
  speedY: 2
}
//bottom rectangle
let aishwaryaBox03 = {
  color: 255,
  rectX: 252,
  rectY: 402,

  originX: 252,
  originY: 402,

  rectWidth: 96,
  rectHeight: 50,
  speedX: 3,
  speedY: 3
}
//top verticle rectangle
let aishwaryaBox04 = {
  color: 255,
  rectX: 298,
  rectY: 302,

  originX: 298,
  originY: 302,

  rectWidth: 6,
  rectHeight: 46,
  speedX: 1,
  speedY: 1
}
//bottom circle
let aishwaryaCircle01 = {
  color: 255,
  circleX: 300,
  circleY: 450,

  originX: 300,
  originY: 450,

  circleWidth: 96,
  circleHeight: 96,
  speedX:5,
  speedY:5,
  angle:180
}

let aishwaryaShapes = [aishwaryaBox01, aishwaryaBox02, aishwaryaBox03, aishwaryaBox04, aishwaryaCircle01];
let aishwaryaShapesArray = [];

// This is to control the time it takes to run a full cycle.
let aishwaryaSpeedMultiplier = 1;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < shapes.length;i++) {
    // Setting your speedX and speedY allows you to just look at the code when every shape is still
    // shapes[i].speedX = 0;
    // shapes[i].speedY = 0;

    // This is where your speed multiplier adjusts the speedX and speedY
    // shapes[i].speedX = shapes[i].speedX * aishwaryaSpeedMultiplier;
    // shapes[i].speedY = shapes[i].speedY * aishwaryaSpeedMultiplier;

    shapesArray[i] = new MovedShape(shapes[i]);
  }
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < shapes.length; i++) {
    shapesArray[i].drawGhostedMouse();
    shapesArray[i].drawBox();
    shapesArray[i].drawCircle();
    // shapesArray[i].moveShape();
    shapesArray[i].traceObject();
  }
}

class Aishwarya {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

  // Method to draw a ghosted outline of your mouse
  drawGhostedMouse() {
    // draw box
    if (this.incomingShape.circleX === undefined) {
      noStroke();
      fill(255, 255, 255, 30); // white
      rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
    }

    // draw a circle
    if (this.incomingShape.rectX === undefined) {
      noStroke();
      fill(255, 255, 255, 30); // white
      ellipse(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
    }
  }

  drawBox() {
    fill(this.incomingShape.color); // white
    if (this.incomingShape.circleX === undefined) {
      if(this.incomingShape.rectX > 600 || this.incomingShape.rectX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;

      if(this.incomingShape.rectY > 600 || this.incomingShape.rectY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }

      this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

      rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);

      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  drawCircle() {
    if (this.incomingShape.rectX === undefined) {
      fill(this.incomingShape.color); // white
      if(this.incomingShape.circleX >  600 || this.incomingShape.circleX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX* - 1;
      }
      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;

      if(this.incomingShape.circleY > 600 || this.incomingShape.circleY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY* - 1;
      }
      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;

      ellipse(this.incomingShape.circleX, this.incomingShape.circleY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }

    }
  }
  // move X & Y
  // moveShape(){  traceObject() {
  traceObject(){
    stroke(255);
    strokeWeight(1.5);
    if (this.incomingShape.circleX === undefined) {
      line(this.incomingShape.rectX + this.incomingShape.rectWidth / 2, 0, this.incomingShape.rectX + this.incomingShape.rectWidth / 2, height);
      line(0, this.incomingShape.rectY + this.incomingShape.rectHeight / 2, width, this.incomingShape.rectY + this.incomingShape.rectHeight / 2);
    }

    if (this.incomingShape.rectX === undefined) {
      line(this.incomingShape.circleX, 0, this.incomingShape.circleX, height);
      line(0, this.incomingShape.circleY, width, this.incomingShape.circleY);
    }
  }

  resetMovement() {
    if (this.incomingShape.circleX === undefined) {
      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.rectX === undefined) {
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

  }

}
