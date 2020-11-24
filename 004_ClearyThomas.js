// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

let tomRect01 = {
  color: 'red',
  objectStrokeWeight: 4,
  objectStrokeColor: 51,
  rectX: 124,
  rectY: 162,

  originX: 124,
  originY: 162,

  rectWidth: 160,
  rectHeight: 140,
  fillet01: 0,
  fillet02: 0,
  fillet03: 30,
  fillet04: 30,
  speedX: 3,
  speedY: 1,
}

//handle exterior
let tomCircle01 = {
  color: 'rgb(190,25,41)',
  objectStrokeWeight: 4,
  objectStrokeColor: 51,
  circleX: 302,
  circleY: 225,

  originX: 302,
  originY: 225,

  circleWidth: 90,
  circleHeight: 100,
  speedX: 2,
  speedY: 3,
}

//handle interior
let tomCircle02 = {
  color: 'rgb(220, 220, 220)',
  objectStrokeWeight: 4,
  objectStrokeColor: 51,
  circleX: 306,
  circleY: 225,

  originX: 306,
  originY: 225,

  circleWidth: 55,
  circleHeight: 70,
  speedX: 1,
  speedY: 2,
}

//black rim
let tomRect02 = {
  color: 'black',
  objectStrokeWeight: 4,
  objectStrokeColor: 51,
  rectX: 120,
  rectY: 162,

  originX: 120,
  originY: 162,

  rectWidth: 170,
  rectHeight: 5,
  fillet01: 20,
  fillet02: 20,
  fillet03: 20,
  fillet04: 20,
  speedX: 3,
  speedY: 3,
}

//shine and shadow
let tomCircle03 = {
  color: 'white',
  objectStrokeWeight: 0,
  circleX: 136,
  circleY: 180,

  originX: 136,
  originY: 180,

  circleWidth: 9,
  circleHeight: 9,
  speedX: 5,
  speedY: 3,
}

//vertical long shine
let tomRect03 = {
  color: 'white',
  objectStrokeWeight: 0,
  rectX: 132,
  rectY: 200,

  originX: 132,
  originY: 200,

  fillet01: 17,
  fillet02: 10,
  fillet03: 10,
  fillet04: 10,
  rectWidth: 7,
  rectHeight: 60,
  speedX: 2,
  speedY: 5,
}

let tomRect04 = {
  color: 'white',
  objectStrokeWeight: 0,
  rectX: 128,
  rectY: 163,

  originX: 128,
  originY: 163,

  fillet01: 20,
  fillet02: 20,
  fillet03: 20,
  fillet04: 20,
  rectWidth: 30,
  rectHeight: 2,
  speedX: 1,
  speedY: 3,
}

let tomRect05 = {
  color: 'rgb(190,25,41)',
  objectStrokeWeight: 0,
  rectX: 252,
  rectY: 169,

  originX: 252,
  originY: 169,

  fillet01: 0,
  fillet02: 0,
  fillet03: 0,
  fillet04: 0,
  rectWidth: 30,
  rectHeight: 111,
  speedX: 3,
  speedY: 4
}

let tomArc01 = {
  color: 'rgb(190, 25, 41)',
  // color: 'green',
  arcX: 252,
  arcY: 280,

  originX: 252,
  originY: 280,

  arcWidth: 60,
  arcHeight: 42,
  arcStart: 0,
  arcStop: 90,
  speedX: 3,
  speedY: 3

}

// This is to control the time it takes to run a full cycle.
// This helps the order of the objects being drawn.
let tomSpeedMultiplier = 1;

let tomShapes01 = [tomRect01, tomCircle01, tomRect02, tomCircle03, tomRect03, tomRect04, tomRect05, tomArc01, tomCircle02];
let tomShapeArray01 = [];

// function setup() {
//   createCanvas(600, 600);
//
//   for (let i = 0; i < tomShapes01.length; i++){
//     // Sometimes, I just need to pause your shapes by setting speedX and speedY for each object to 0.
//     // tomShapes01[i].speedX = 0;
//     // tomShapes01[i].speedY = 0;
//
//     tomShapes01[i].speedX = tomShapes01[i].speedX * tomSpeedMultiplier;
//     tomShapes01[i].speedY = tomShapes01[i].speedY * tomSpeedMultiplier;
//     tomShapeArray01[i] = new MovedShape(tomShapes01[i]);
//   }
// }
//
//
// function draw() {
//   background(220);
//   for (let i = 0; i < tomShapes01.length; i++) {
//     tomShapeArray01[i].drawGhostedMug();
//     tomShapeArray01[i].drawBox();
//     tomShapeArray01[i].drawCircle();
//     tomShapeArray01[i].drawArc();
//     tomShapeArray01[i].moveShape();
//     tomShapeArray01[i].traceObject();
//   }
// }




class MovedShape {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

    // Draw ghosted still of the original mug.
  drawGhostedMug() {

    // Method to draw a rectangle
    // In drawing a rect, I have to make sure the object is not a circle or arc.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.objectStrokeWeight === 0) {
        noStroke();
        fill(255, 255, 255, 50);
        rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.fillet01, this.incomingShape.fillet02, this.incomingShape.fillet03, this.incomingShape.fillet04);
      } else {
        stroke(255, 255, 255, 50);
        strokeWeight(this.incomingShape.objectStrokeWeight);
        fill(255, 255, 255, 50);
        rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.fillet01, this.incomingShape.fillet02, this.incomingShape.fillet03, this.incomingShape.fillet04);
      }
    }

    // Method to draw a ellipse
    // In drawing a ellipse, I have to make sure the object is not a rect or arc.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.objectStrokeWeight === 0) {
        noStroke();
        fill(255, 255, 255, 50);
        ellipse(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
      } else {
        stroke(255, 255, 255, 50);
        strokeWeight(this.incomingShape.objectStrokeWeight);
        fill(255, 255, 255, 50);
        ellipse(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
      }
    }

    // Method to draw an arc
    // In drawing an arc, I have to make sure the object is not a rect or ellipse.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    noStroke();
    if (this.incomingShape.rectX === undefined && this.incomingShape.circleX === undefined) {
      fill(255, 255, 255, 50);
      arc(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.arcWidth, this.incomingShape.arcHeight, this.incomingShape.arcStart, this.incomingShape.arcStop);
    }

  }

  // Method to draw a rectangle
  // In drawing a rect, I have to make sure the object is not a circle or arc.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawBox() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.objectStrokeWeight === 0) {
        noStroke();
        fill(this.incomingShape.color);
        rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.fillet01, this.incomingShape.fillet02, this.incomingShape.fillet03, this.incomingShape.fillet04);
      } else {
        stroke(this.incomingShape.objectStrokeColor);
        strokeWeight(this.incomingShape.objectStrokeWeight);
        fill(this.incomingShape.color);
        rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.fillet01, this.incomingShape.fillet02, this.incomingShape.fillet03, this.incomingShape.fillet04);
      }

    }
  }

  // Method to draw a ellipse
  // In drawing a ellipse, I have to make sure the object is not a rect or arc.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawCircle(){
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.objectStrokeWeight === 0) {
        noStroke();
        fill(this.incomingShape.color);
        ellipse(this.incomingShape.circleX, this.incomingShape.circleY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
      } else {
        stroke(this.incomingShape.objectStrokeColor);
        strokeWeight(this.incomingShape.objectStrokeWeight);
        fill(this.incomingShape.color);
        ellipse(this.incomingShape.circleX, this.incomingShape.circleY, this.incomingShape.circleWidth, this.incomingShape.circleHeight);
      }
    }
  }

  // Method to draw an arc
  // In drawing an arc, I have to make sure the object is not a rect or ellipse.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawArc() {
    noStroke();
    if (this.incomingShape.rectX === undefined && this.incomingShape.circleX === undefined) {
      fill(this.incomingShape.color);
      arc(this.incomingShape.arcX, this.incomingShape.arcY, this.incomingShape.arcWidth, this.incomingShape.arcHeight, this.incomingShape.arcStart, this.incomingShape.arcStop);
    }
  }


  //moveX & Y

  moveShape() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      if(this.incomingShape.rectX > 600 || this.incomingShape.rectX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;

      if(this.incomingShape.rectY > 600 || this.incomingShape.rectY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }

    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      if(this.incomingShape.circleX > 600 || this.incomingShape.circleX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX

      if(this.incomingShape.circleY > 600 || this.incomingShape.circleY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }

    if (this.incomingShape.rectX === undefined && this.incomingShape.circleX === undefined) {
      if(this.incomingShape.arcX > 600 || this.incomingShape.arcX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.arcX = this.incomingShape.arcX + this.incomingShape.speedX;

      if(this.incomingShape.arcY > 600 || this.incomingShape.arcY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.arcY = this.incomingShape.arcY + this.incomingShape.speedY;

      // console.log(this.incomingShape.arcX)
      // console.log(this.incomingShape.originX)


      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.arcX === this.incomingShape.originX && this.incomingShape.arcY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  traceObject(){
    strokeWeight(0.5);
    stroke('rgb(40,135,204)')
    line(this.incomingShape.rectX + this.incomingShape.rectWidth/2, 0, this.incomingShape.rectX + this.incomingShape.rectWidth/2, height)
    line(0, this.incomingShape.rectY + this.incomingShape.rectHeight/2, width, this.incomingShape.rectY + this.incomingShape.rectHeight/2)
  }

  resetMovement() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    if (this.incomingShape.rectX === undefined && this.incomingShape.circleX === undefined) {
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.arcX === this.incomingShape.originX && this.incomingShape.arcY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }




  }


}
