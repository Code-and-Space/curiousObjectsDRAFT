// I added an xOrigin and yOrigin.
// When transX and transY equal xOrigin and yOrigin, speedX and speedY will equal 0.

let zoeBox02 = {
  color: 255,
  transX: 226,
  transY: 160,
  xOrigin: 226,
  yOrigin: 160,
  boxX: 0,
  boxY: 0,
  boxHeight: 95,
  boxWidth: 70,
  speedX: 1,
  speedY: -2,
  speedResetX: 1,
  speedResetY: -2
}

let zoeBox05 = {
  color: 0,
  transX: 231,
  transY: 220,
  xOrigin: 231,
  yOrigin: 220,
  boxX: 0,
  boxY: 0,
  boxHeight: 90,
  boxWidth: 10,
  speedX: 4,
  speedY: 4,
  speedResetX: 4,
  speedResetY: 4,
}

let zoeBox07 = {
  color: 0,
  transX: 270,
  transY: 285,
  xOrigin: 270,
  yOrigin: 285,
  boxX: 0,
  boxY: 0,
  boxHeight: 8,
  boxWidth: 8,
  // speedX: .5,
  speedX: 2,
  speedY: 1,
  speedResetX: 2,
  speedResetY: 1,
}

let zoeBox08 = {
  color: 0,
  transX: 267,
  transY: 293,
  xOrigin: 267,
  yOrigin: 293,
  boxX: 0,
  boxY: 0,
  boxHeight: 14,
  boxWidth: 50,
  // speedX: 3.5,
  speedX: 3,
  speedY: 2,
  speedResetX: 3,
  speedResetY: 2,
}

let zoeBox10 = {
  color: 255,
  transX: 220,
  transY: 360,
  xOrigin: 220,
  yOrigin: 360,
  boxX: 0,
  boxY: 0,
  boxHeight: 90,
  boxWidth: 60,
  speedX: -1,
  speedY: 1,
  speedResetX: -1,
  speedResetY: 1,
}

let zoeCircle01 = {
  color: 0,
  circleX: 276,
  circleY: 226,
  xOrigin: 276,
  yOrigin: 226,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 90,
  ellipseWidth: 120,
  speedX: 2,
  speedY: 3,
  speedResetX: 2,
  speedResetY: 3,
}

let zoeCircle03 = {
  color: 255,
  circleX: 276,
  circleY: 226,
  xOrigin: 276,
  yOrigin: 226,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 80,
  ellipseWidth: 110,
  speedX: 2,
  speedY: 1,
  speedResetX: 2,
  speedResetY: 1,
}

let zoeCircle04 = {
  color: 0,
  circleX: 276,
  circleY: 226,
  xOrigin: 276,
  yOrigin: 226,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 70,
  ellipseWidth: 100,
  speedX: 1,
  speedY: 1,
  speedResetX: 1,
  speedResetY: 1,
}

let zoeCircle06 = {
  color: 255,
  circleX: 276,
  circleY: 226,
  xOrigin: 276,
  yOrigin: 226,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 50,
  ellipseWidth: 80,
  speedX: 2,
  speedY: 3,
  speedResetX: 2,
  speedResetY: 3,
}

let zoeCircle09 = {
  color: 0,
  circleX: 274,
  circleY: 378,
  xOrigin: 274,
  yOrigin: 378,
  ellipseX: 0,
  ellipseY: 0,
  ellipseHeight: 70,
  ellipseWidth: 70,
  speedX: 3,
  speedY: 3,
  speedResetX: 3,
  speedResetY: 3,
}

// Instead of separating between boxes and circles, I combined them into one array.
let zoeShapes = [zoeCircle01, zoeBox02, zoeCircle03, zoeCircle04, zoeBox05, zoeCircle06, zoeBox07, zoeBox08, zoeCircle09, zoeBox10];
let zoeShapesPosition = [];

// This is to control the time it takes to run a full cycle.
let zoeSpeedMultiplier = 500;


function setup() {
  createCanvas(600, 600);

  for (i = 0; i < zoeShapes.length; i++) {
    // zoeSpeedMultiplier is adjusting your speedX and speedY
    // zoeShapes[i].speedX = zoeShapes[i].speedX * zoeSpeedMultiplier;
    // zoeShapes[i].speedY = zoeShapes[i].speedY * zoeSpeedMultiplier;
    // zoeShapes[i].speedResetX = zoeShapes[i].speedResetX * zoeSpeedMultiplier;
    // zoeShapes[i].speedResetY = zoeShapes[i].speedResetY * zoeSpeedMultiplier;
    zoeShapesPosition[i] = new Mirror_Zoe(zoeShapes[i]);
  }
}

function draw() {
  background(255);
  noStroke();

  for (i = 0; i < zoeShapes.length; i++) {
    // I have one ghosted still of the original mirror.
    zoeShapesPosition[i].drawMirrorGhosted();
    zoeShapesPosition[i].moveBox();
    zoeShapesPosition[i].moveCircle();
    // zoeShapesPosition[i].tracingLines();
  }
}

class Mirror_Zoe {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

  // Draw the ghosted mirror image.
  drawMirrorGhosted() {
    // In drawing a box, I have to make sure the object is not an circle.
    // This is done with a conditional statement. If the JS Object does not have an ellipseX, then the JS Object is a box.
    if (this.incomingShape.ellipseX === undefined) {
      // If the color is 0 (black), then draw with this particular fill.
      if (this.incomingShape.color === 0) {
        push();
        strokeWeight(1)
        stroke(255);
        fill(20, 20, 20, 50);
        // xOrigin and yOrigin is not affected by speed.
        translate(this.incomingShape.xOrigin, this.incomingShape.yOrigin);
        rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.boxHeight, this.incomingShape.boxWidth);
        pop();
      } else { // else, draw with a different fill.
        push();
        strokeWeight(1)
        stroke(255);
        fill(200, 200, 200, 50);
        // xOrigin and yOrigin is not affected by speed.
        translate(this.incomingShape.xOrigin, this.incomingShape.yOrigin);
        rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.boxHeight, this.incomingShape.boxWidth);
        pop();
      }
    }

    // In drawing a box, I have to make sure the object is not a box.
    // This is done with a conditional statement. If the JS Object does not have an boxX, then the JS Object is a circle (or an ellipse).
    if (this.incomingShape.boxX === undefined) {
      if (this.incomingShape.color === 0) {
        push();
        strokeWeight(1)
        stroke(255);
        fill(20, 20, 20, 50);
        // xOrigin and yOrigin is not affected by speed.
        translate(this.incomingShape.xOrigin, this.incomingShape.yOrigin)
        ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseHeight, this.incomingShape.ellipseWidth);
        pop();
      } else {
        push();
        strokeWeight(1)
        stroke(255);
        fill(200, 200, 200, 50);
        // xOrigin and yOrigin is not affected by speed.
        translate(this.incomingShape.xOrigin, this.incomingShape.yOrigin)
        ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseHeight, this.incomingShape.ellipseWidth);
        pop();
      }
    }
  }

  // Move box method
  moveBox() {
    // Making sure that the JS Object in the array is not contain an ellipse with conditional statement.
    if (this.incomingShape.ellipseX === undefined) {
      push();
      fill(this.incomingShape.color);
      if (this.incomingShape.transX > 600 || this.incomingShape.transX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.transX = this.incomingShape.transX + this.incomingShape.speedX;

      if (this.incomingShape.transY > 600 || this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.transY = this.incomingShape.transY + this.incomingShape.speedY;

      translate(this.incomingShape.transX, this.incomingShape.transY);
      rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.boxHeight, this.incomingShape.boxWidth);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.transX === this.incomingShape.xOrigin && this.incomingShape.transY === this.incomingShape.yOrigin) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Move circle method
  moveCircle() {
    // Making sure that the JS Object in the array is not contain an box with conditional statement.
    if (this.incomingShape.boxX === undefined) {


      push()
      fill(this.incomingShape.color);
      if (this.incomingShape.circleX > 600 || this.incomingShape.circleX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;

      if (this.incomingShape.circleY > 600 || this.incomingShape.circleY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;

      translate(this.incomingShape.circleX, this.incomingShape.circleY)
      ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseHeight, this.incomingShape.ellipseWidth);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY equal 0).
      if (this.incomingShape.circleX === this.incomingShape.xOrigin && this.incomingShape.circleY === this.incomingShape.yOrigin) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  resetMovement() {
    if (this.incomingShape.ellipseX === undefined) {
      if (this.incomingShape.transX === this.incomingShape.xOrigin && this.incomingShape.transY === this.incomingShape.yOrigin) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.boxX === undefined) {
      if (this.incomingShape.circleX === this.incomingShape.xOrigin && this.incomingShape.circleY === this.incomingShape.yOrigin) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }

    }

  }
}
