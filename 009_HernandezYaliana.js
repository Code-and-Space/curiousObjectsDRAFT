// I added an xOrigin and yOrigin.
// When transX and transY equal xOrigin and yOrigin, speedX and speedY will equal 0.

let yalianaRect01 = {
  color:0,
  rectX:300,
  rectY:327.5,
  originX:300,
  originY:327.5,
  rectWidth:85,
  rectHeight:85,
  rectR:20,
  speedX:5,
  speedY:9,
}


let yalianaRect02 = {
  color:0,
  rectX:300,
  rectY:273,
  originX:300,
  originY:273,
  rectWidth:13,
  rectHeight:25,
  rectR:0,
  speedX: 2,
  speedY: 6,
}


let yalianaLine01 = {
  strokeweight:3,
  lineX:380,
  lineY:260,
  originX:380,
  originY:260,
  lineX2:215,
  lineY2:260,
  speedX: 6,
  speedY: 2,
  strokeweight2:1
}


let yalianaLine02 = {
  strokeweight:3,
  lineX:260,
  lineY:160,
  originX:260,
  originY:160,
  lineX2:215,
  lineY2:260,
  speedX: 3,
  speedY: 2,
  strokeweight2:1
}


let yalianaLine03 = {
  strokeweight:3,
  lineX:340,
  lineY:160,
  originX:340,
  originY:160,
  lineX2:380,
  lineY2:260,
  speedX: 2,
  speedY: 2,
  strokeweight2:1
}


let yalianaLine04 = {
  strokeweight:3,
  lineX:340,
  lineY:160,
  originX:340,
  originY:160,
  lineX2:260,
  lineY2:160,
  speedX: 5,
  speedY: 5,
  strokeweight2:1
}

// Instead of separating between boxes and circles, I combined them into one array.
let yalianaShapes = [yalianaRect01, yalianaRect02, yalianaLine01, yalianaLine02, yalianaLine03, yalianaLine04];
let yalianaShapesArray = [];

// This is to control the time it takes to run a full cycle.
let speedMultiplier = 2;


// function setup() {
//   createCanvas(600, 600);
//   rectMode(CENTER)
//
//   for (i=0; i < yalianaShapes.length; i++) {
//     // speedMultiplier is adjusting your speedX and speedY
//     yalianaShapes[i].speedX = yalianaShapes[i].speedX * speedMultiplier;
//     yalianaShapes[i].speedY = yalianaShapes[i].speedY * speedMultiplier;
//     yalianaShapesArray[i] = new YalianaLamp(yalianaShapes[i]);
//   }
// }
//
// function draw () {
//   background (228,237,239);
//
//   fill (0);
//   noStroke();
//
//   for (i=0; i < yalianaShapesArray.length; i++) {
//     yalianaShapesArray[i].drawLampGhosted();
//     yalianaShapesArray[i].moveBox();
//     yalianaShapesArray[i].tracingBoxes();
//     yalianaShapesArray[i].moveLine();
//     yalianaShapesArray[i].tracingLines();
//   }
//
// }


class YalianaLamp {
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  drawLampGhosted() {
    // I have one ghosted still of the original lamp.
    // In drawing a box, I have to make sure the object is not an line.
    // This is done with a conditional statement. If the JS Object does not have an lineX, then the JS Object is a box.
    if (this.incomingShape.lineX === undefined) {
      noStroke();
      fill(210)
      push();
      translate(this.incomingShape.originX, this.incomingShape.originY);
      rect(0, 0, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.rectR);
      pop();
    }
    // Draw ghosted lines
    // In drawing lines, I have to make sure the JS object is not an box.
    // This is done with a conditional statement. If the JS Object does not have an rectX, then the JS Object is a line.
    if (this.incomingShape.rectX === undefined) {
      stroke (210);
      strokeWeight (3);
      push();
      line(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.lineX2, this.incomingShape.lineY2);
      pop();
    }
  }

  // Method to move box
  moveBox() {
    // In drawing a box, I have to make sure the object is not an line.
    // This is done with a conditional statement. If the JS Object does not have an lineX, then the JS Object is a box.
    if (this.incomingShape.lineX === undefined) {
      noStroke();
      fill(0)
      push();
      if(this.incomingShape.rectX > 600 || this.incomingShape.rectX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;
      if(this.incomingShape.rectY > 600 || this.incomingShape.rectY < 0){this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

      translate(this.incomingShape.rectX, this.incomingShape.rectY);
      rect(0, 0, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.rectR);
      pop();
    }
    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
      this.incomingShape.speedX = 0;
      this.incomingShape.speedY = 0;
    }
  }

  // Method to trace box centerlines
  tracingBoxes() {
    if (this.incomingShape.lineX === undefined) {
      stroke("red");
      line(this.incomingShape.rectX, 0, this.incomingShape.rectX, height)
      line(0, this.incomingShape.rectY, height, this.incomingShape.rectY)
    }
  }

  // Method to move line
  // In drawing lines, I have to make sure the JS object is not an box.
  // This is done with a conditional statement. If the JS Object does not have an rectX, then the JS Object is a line.
  moveLine() {
    if (this.incomingShape.rectX === undefined) {
      stroke ("black");
      strokeWeight (3);
      push();
      if (this.incomingShape.lineX > 600 || this.incomingShape.lineX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.lineX = this.incomingShape.lineX + this.incomingShape.speedX;
      if (this.incomingShape.lineY > 600 || this.incomingShape.lineY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }

      this.incomingShape.lineY = this.incomingShape.lineY + this.incomingShape.speedY;
      line(this.incomingShape.lineX, this.incomingShape.lineY, this.incomingShape.lineX2, this.incomingShape.lineY2);
      pop();
    }


    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (this.incomingShape.lineX === this.incomingShape.originX && this.incomingShape.lineY === this.incomingShape.originY) {
      this.incomingShape.speedX = 0;
      this.incomingShape.speedY = 0;
    }
  }

  // Method for tracing line endpoints
  tracingLines() {
    if (this.incomingShape.rectX === undefined) {
      stroke("blue");
      strokeWeight(1);
      line(this.incomingShape.lineX, 0, this.incomingShape.lineX, height)
      line(0, this.incomingShape.lineY, height, this.incomingShape.lineY)
    }
  }

  resetMovement() {
    if (this.incomingShape.lineX === undefined) {
      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    if (this.incomingShape.rectX === undefined) {
      if (this.incomingShape.lineX === this.incomingShape.originX && this.incomingShape.lineY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

  }
}
