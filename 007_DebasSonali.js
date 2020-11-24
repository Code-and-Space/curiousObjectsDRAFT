// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.
// I also added the radiused corners.
// I also updated your transX and transY from your previous sketches.

let sonaliBox01 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 100,
  rectHeight: 180,
  transX: 300,
  transY: 150,

  originX: 300,
  originY: 150,

  tlCorner: 35,
  trCorner: 35,
  blCorner: 8,
  brCorner: 8,

  speedX: 2,
  speedY: 2,
}

let sonaliBox02 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 44,
  rectHeight: 20,
  transX: 327,
  transY: 130,

  originX: 327,
  originY: 130,

  tlCorner: 5,
  trCorner: 5,
  blCorner: 2,
  brCorner: 2,

  speedX: -2,
  speedY: -2,
}

let sonaliBox03 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 32,
  rectHeight: 10,
  transX: 332,
  transY: 120,

  originX: 332,
  originY: 120,

  tlCorner: 3,
  trCorner: 3,
  blCorner: 1,
  brCorner: 1,

  speedX: 1.5,
  speedY: 1.5,
}

let sonaliBox04 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 14,
  rectHeight: 30,

  transX: 340,
  transY: 90,

  originX: 340,
  originY: 90,

  speedX: -1.5,
  speedY: -1.5,

}

let sonaliBox05 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 20,
  rectHeight: 10,
  transX: 337,
  transY: 80,

  originX: 337,
  originY: 80,

  speedX: 2.5,
  speedY: 2.5,

}

let sonaliBox06 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 49,
  rectHeight: 6,

  transX: 334,
  transY: 74,

  originX: 334,
  originY: 74,

  speedX: -2.5,
  speedY: -2.5,

}


let sonaliBox07 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 18,
  rectHeight: 25,
  transX: 340,
  transY: 150,
  originX: 340,
  originY: 150,
  speedX: .75,
  speedY: .75,

}

let sonaliBox08 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 12,
  rectHeight: 16,
  transX: 343,
  transY: 175,

  originX: 343,
  originY: 175,

  speedX: -.75,
  speedY: -.75,

}

let sonaliBox09 = {
  color: 255,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 10,
  rectHeight: 52,
  transX: 344,
  transY: 191,

  originX: 344,
  originY: 191,

  speedX: .5,
  speedY: .5,

}

let sonaliBox10 = {
  color: 224,
  boxStrokeWeight: 1,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  rectWidth: 100,
  rectHeight: 130,
  transX: 300,
  transY: 200,

  originX: 300,
  originY: 200,

  tlCorner: 1,
  trCorner: 1,
  blCorner: 8,
  brCorner: 8,

  speedX: -.5,
  speedY: -.5,

}

let sonaliBox11 = {
  color: 224,
  boxStrokeWeight: 1,
  strokeColor: 160,

  rectX: 0,
  rectY: 0,
  rectWidth: 10,
  rectHeight: 120,
  transX: 344,
  transY: 200,

  originX: 344,
  originY: 200,

  speedX: 3,
  speedY: 3,
}

let sonaliBox12 = {
  color: 224,
  boxStrokeWeight: 0.5,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  color: 'grey',
  rectWidth: 14,
  rectHeight: 2,
  transX: 340,
  transY: 92,

  originX: 340,
  originY: 92,

  speedX: 3,
  speedY: 3,
}

let sonaliBox13 = {
  color: 224,
  boxStrokeWeight: 0.5,
  strokeColor: 0,

  rectX: 0,
  rectY: 0,
  color: 'grey',
  rectWidth: 14,
  rectHeight: 2,
  transX: 340,
  transY: 94,

  originX: 340,
  originY: 94,

  speedX: 3,
  speedY: 3,
}


// consolidate into 1 array
// Your order in which you draw is important. Circles have to be above rectangles (and vice versa) to create the appropriate overlaps)
let sonaliBoxes = [sonaliBox01, sonaliBox02, sonaliBox03, sonaliBox04, sonaliBox05, sonaliBox06, sonaliBox07, sonaliBox08, sonaliBox09, sonaliBox10, sonaliBox11, sonaliBox12, sonaliBox13];
let sonaliBoxPosition = [];

// This is to control the time it takes to run a full cycle.
let sonaliSpeedMultiplier = 1;

// let sonaliBoxes01 = [sonaliBox07, sonaliBox08, sonaliBox09, sonaliBox10, sonaliBox11];
// let sonaliBoxPosition01 = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < sonaliBoxes.length; i++) {
    // This is where your speed multiplier adjusts the speedX and speedY
    // sonaliBoxes[i].speedX = 0;
    // sonaliBoxes[i].speedY = 0;

    // This is where your speed multiplier adjusts the speedX and speedY
    sonaliBoxes[i].speedX = sonaliBoxes[i].speedX * sonaliSpeedMultiplier;
    sonaliBoxes[i].speedY = sonaliBoxes[i].speedY * sonaliSpeedMultiplier;

    sonaliBoxPosition[i] = new SonaliSanitizer(sonaliBoxes[i]);
  }

  //  for (let i = 0; i < sonaliBoxes01.length; i++) {
  //  sonaliBoxPosition01[i] = new MovedsonaliBox01(sonaliBoxes01[i]);
  // }
}


function draw() {
  background(0);
  // rectMode(CENTER);

  for (i = 0; i < sonaliBoxes.length; i++) {
    sonaliBoxPosition[i].drawGhostedSanitizer();
    sonaliBoxPosition[i].moveBox();

    // sonaliBoxPosition[i].trackingLines();
  }

  // for (i = 0; i < sonaliBoxes01.length; i++) {
  //   sonaliBoxPosition01[i].movesonaliBox01();
  //   sonaliBoxPosition01[i].trackingLines01();
  // }
}




// Renamed class to be more descriptive of your object
class SonaliSanitizer {
  constructor (incomingBox) {
    this.incomingBox = incomingBox;
  }

  // Method to draw a ghosted sanitizer
  drawGhostedSanitizer() {
    fill(255, 255, 255, 15);
    stroke(255, 255, 255, 5);

    // If there are no radiused corners, then just draw a box
    if (this.incomingBox.tlCorner === undefined) {
      push();
      translate(this.incomingBox.originX, this.incomingBox.originY);
      rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
      pop();
    } else { // Otherwise, your JavaScript Object has radius corners. Draw corners with radius.
      push();
      translate(this.incomingBox.originX, this.incomingBox.originY);
      rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight, this.incomingBox.tlCorner, this.incomingBox.trCorner, this.incomingBox.blCorner, this.incomingBox.brCorner);
      pop();
    }
  }

  // Method to draw box
  moveBox() {
    stroke(this.incomingBox.strokeColor);
    strokeWeight(this.incomingBox.boxStrokeWeight);
    fill(this.incomingBox.color);

    if (this.incomingBox.transX > 600 || this.incomingBox.transX < 0) {
      this.incomingBox.speedX = this.incomingBox.speedX*-1;
    }
    this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
    if (this.incomingBox.transY > 600 || this.incomingBox.transY < 0) {
      this.incomingBox.speedY = this.incomingBox.speedY*-1;
    }
    this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;

    // If there are no radiused corners, then just draw a box
    if (this.incomingBox.tlCorner === undefined) {
      push();
      translate(this.incomingBox.transX, this.incomingBox.transY);
      rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
      pop();
    } else { // Otherwise, your JavaScript Object has radius corners. Draw corners with radius.
      push();
      translate(this.incomingBox.transX, this.incomingBox.transY);
      rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight, this.incomingBox.tlCorner, this.incomingBox.trCorner, this.incomingBox.blCorner, this.incomingBox.brCorner);
      pop();
    }

    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (this.incomingBox.transX === this.incomingBox.originX && this.incomingBox.transY === this.incomingBox.originY) {
      this.incomingBox.speedX = 0;
      this.incomingBox.speedY = 0;
    }
  }

  trackingLines() {
    stroke(255);
    strokeWeight(1.5)
    line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
    line(0, this.incomingBox.transY, height, this.incomingBox.transY)
  }

  resetMovement() {
    if (this.incomingBox.transX === this.incomingBox.originX && this.incomingBox.transY === this.incomingBox.originY) {
      this.incomingBox.speedX = getRandomInt(-10, 10);
      this.incomingBox.speedY = getRandomInt(-10, 10);
    }
  }

}
