let line1 = {
  type: "line",
  lineweight: 1.5,
  strokeColor: 75,
  oneX: 52,
  oneY: 100,
  originX: 52,
  originY: 100,
  twoX: 70,
  twoY: 95,
  x: 0,
  y: 0,
  speedX: 2,
  speedY: 2,
}

let line2 = {
  type: "line",
  lineweight: 1.5,
  strokeColor: 75,
  oneX: 70,
  oneY: 95,
  originX: 70,
  originY: 95,
  twoX: 525,
  twoY: 95,
  x: 0,
  y: 0,
  speedX: 2,
  speedY: 2,
}

let line3 = {
  type: "line",
  lineweight: 1.5,
  strokeColor: 75,
  oneX: 525,
  oneY: 95,
  originX: 525,
  originY: 95,
  twoX: 548,
  twoY: 100,
  x: 0,
  y: 0,
  speedX: 2,
  speedY: 2,
}

let outerBox = {
  type: "box",
  fillColor: 0,
  lineweight: 3,
  strokeColor: 5,
  X: 50,
  Y: 100,

  originX: 50,
  originY: 100,

  Length: 500,
  Breath: 50,
  Radius: 5,
  speedX: 1,
  speedY: 3,
}

let lineCutOut = {
  type: "line",
  lineweight: 10,
  strokeColor: 255,
  oneX: 200,
  oneY: 152,
  originX: 200,
  originY: 152,
  twoX: 400,
  twoY: 152,
  x: 0,
  y: 0,
  speedX: 1,
  speedY: 3,
}

let playLine = {
  type: "line",
  lineweight: 1,
  strokeColor: 250,
  oneX: 225,
  oneY: 125,
  originX: 225,
  originY: 125,
  twoX: 375,
  twoY: 125,
  x: 0,
  y: 0,
  speedX: 1,
  speedY: 3,
}

let lineBaseStandLeft = {
  type: "line",
  lineweight: 4,
  strokeColor: 10,
  oneX: 125,
  oneY: 155,
  originX: 125,
  originY: 155,
  twoX: 150,
  twoY: 155,
  x: 0,
  y: 0,
  speedX: 1,
  speedY: 3,
}

let lineBaseStandRight = {
  type: "line",
  lineweight: 4,
  strokeColor: 10,
  oneX: 450,
  oneY: 155,
  originX: 450,
  originY: 155,
  twoX: 475,
  twoY: 155,
  x: 0,
  y: 0,
  speedX: 1,
  speedY: 3,
}

let circleBassOuterR = {
  type: "circle",
  fillColor: 255,
  strokeColor: 255,
  lineweight: 8,
  X: 75,
  Y: 125,
  originX: 75,
  originY: 125,
  dia: 15,
  speedX: 6,
  speedY: 3,
}

let circleBassOuterL = {
  type: "circle",
  fillColor: 255,
  strokeColor: 255,
  lineweight: 8,
  X: 525,
  Y: 125,
  originX: 525,
  originY: 125,
  dia: 15,
  speedX: 3,
  speedY: 6,
}

let circleBassInnerL = {
  type: "circle",
  lineweight: 2,
  strokeColor: 255,
  fillColor: "noFill",
  X: 75,
  Y: 125,
  originX: 75,
  originY: 125,
  dia: 30,
  speedX: 1,
  speedY: 6,
}

let circleBassInnerR = {
  type: "circle",
  lineweight: 2,
  strokeColor: 255,
  fillColor: "noFill",
  X: 525,
  Y: 125,
  originX: 525,
  originY: 125,
  dia: 30,
  speedX: 6,
  speedY: 3,
}

let circleSpeakerOuterL = {
  type: "circle",
  lineweight: 1,
  strokeColor: 255,
  fillColor: "noFill",
  X: 125,
  Y: 125,
  originX: 125,
  originY: 125,
  dia: 15,
  speedX: 4,
  speedY: 8,
}

let circleSpeakerOuterR = {
  type: "circle",
  lineweight: 1,
  strokeColor: 255,
  fillColor: "noFill",
  X: 475,
  Y: 125,
  originX: 475,
  originY: 125,
  dia: 15,
  speedX: 8,
  speedY: 4,
}

let circleSpeakerInnerL = {
  type: "circle",
  lineweight: 2,
  strokeColor: 255,
  fillColor: "noFill",
  X: 125,
  Y: 125,
  originX: 125,
  originY: 125,
  dia: 25,
  speedX: 4,
  speedY: 8,
}

let circleSpeakerInnerR = {
  type: "circle",
  lineweight: 2,
  strokeColor: 255,
  fillColor: "noFill",
  X: 475,
  Y: 125,
  originX: 475,
  originY: 125,
  dia: 25,
  speedX: 8,
  speedY: 4,
}

// Organize all objects into array
let yogeshShapesArray = [line1, line2, line3, outerBox, lineCutOut, playLine, lineBaseStandLeft, lineBaseStandRight, circleBassOuterR, circleBassOuterL, circleBassInnerL, circleBassInnerR, circleSpeakerOuterL, circleSpeakerOuterR, circleSpeakerInnerL, circleSpeakerInnerR];
let yogeshArray = [];

// This is to control the time it takes to run a full cycle.
let yogeshSpeedMultiplier = 1;

// function setup() {
//   createCanvas(600, 600);
//
//   // Create new classes and store in empty array
//   for (let i = 0; i < yogeshShapesArray.length; i++) {
//     yogeshShapesArray[i].speedX = yogeshShapesArray[i].speedX * yogeshSpeedMultiplier;
//     yogeshShapesArray[i].speedY = yogeshShapesArray[i].speedY * yogeshSpeedMultiplier;
//     yogeshArray[i] = new YogeshSpeaker(yogeshShapesArray[i]);
//   }
// }
//
// function draw() {
//   background(225);
//   rectMode(CORNER)
//
//   // Draw speaker
//   for (let i = 0; i < yogeshArray.length; i++) {
//     yogeshArray[i].drawGhostedSpeaker();
//     yogeshArray[i].drawBox();
//     yogeshArray[i].drawCircle();
//     yogeshArray[i].drawLines();
//     // yogeshArray[i].moveBox();
//   }
// }





class YogeshSpeaker {
  constructor(incomingShape) {
    this.incomingShape = incomingShape
  }

  drawGhostedSpeaker() {
    if (this.incomingShape.type === "box") {
      fill(0, 0, 0, 20);
      stroke(0, 0, 0, 20);
      strokeWeight(this.incomingShape.lineweight);
      rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.Length, this.incomingShape.Breath, this.incomingShape.Radius);
    }

    if (this.incomingShape.type === "circle") {
      if (this.incomingShape.fillColor === "noFill") {
        noFill();
        stroke(0, 0, 0, 20);
        strokeWeight(this.incomingShape.lineweight);
        circle(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.dia);
      } else {
        fill(0, 0, 0, 20);
        stroke(0, 0, 0, 20);
        strokeWeight(this.incomingShape.lineweight);
        circle(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.dia);
      }
    }

    if (this.incomingShape.type === "line") {
      stroke(this.incomingShape.strokeColor);
      strokeWeight(this.incomingShape.lineweight);
      line(this.incomingShape.oneX, this.incomingShape.oneY, this.incomingShape.twoX, this.incomingShape.twoY);
    }

  }

  drawBox() {
    if (this.incomingShape.type === "box") {
      fill(this.incomingShape.fillColor);
      stroke(this.incomingShape.strokeColor);
      strokeWeight(this.incomingShape.lineweight);

      if (this.incomingShape.X > 600 || this.incomingShape.X < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.X = this.incomingShape.X + this.incomingShape.speedX;

      if (this.incomingShape.Y > 600 || this.incomingShape.Y < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.Y = this.incomingShape.Y + this.incomingShape.speedY;

      push();
      translate(this.incomingShape.X, this.incomingShape.Y)
      rect(0, 0, this.incomingShape.Length, this.incomingShape.Breath, this.incomingShape.Radius);
      pop();

      if (this.incomingShape.X === this.incomingShape.originX && this.incomingShape.Y === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  drawCircle() {
    if (this.incomingShape.type === "circle") {
      if (this.incomingShape.fillColor === "noFill") {
        noFill();
        stroke(this.incomingShape.strokeColor);
        strokeWeight(this.incomingShape.lineweight);
        if (this.incomingShape.X > 600 || this.incomingShape.X < 0) {
          this.incomingShape.speedX = this.incomingShape.speedX * -1;
        }
        this.incomingShape.X = this.incomingShape.X + this.incomingShape.speedX;

        if (this.incomingShape.Y > 600 || this.incomingShape.Y < 0) {
          this.incomingShape.speedY = this.incomingShape.speedY * -1;
        }
        this.incomingShape.Y = this.incomingShape.Y + this.incomingShape.speedY;

        push();
        translate(this.incomingShape.X, this.incomingShape.Y);
        circle(0, 0, this.incomingShape.dia);
        pop();

        if (this.incomingShape.X === this.incomingShape.originX && this.incomingShape.Y === this.incomingShape.originY) {
          this.incomingShape.speedX = 0;
          this.incomingShape.speedY = 0;
        }

      } else {
        fill(this.incomingShape.fillColor);
        stroke(this.incomingShape.strokeColor);
        strokeWeight(this.incomingShape.lineweight);
        if (this.incomingShape.X > 600 || this.incomingShape.X < 0) {
          this.incomingShape.speedX = this.incomingShape.speedX * -1;
        }
        this.incomingShape.X = this.incomingShape.X + this.incomingShape.speedX;

        if (this.incomingShape.Y > 600 || this.incomingShape.Y < 0) {
          this.incomingShape.speedY = this.incomingShape.speedY * -1;
        }
        this.incomingShape.Y = this.incomingShape.Y + this.incomingShape.speedY;


        push();
        translate(this.incomingShape.X, this.incomingShape.Y)
        circle(0, 0, this.incomingShape.dia);
        pop();

        if (this.incomingShape.X === this.incomingShape.originX && this.incomingShape.Y === this.incomingShape.originY) {
          this.incomingShape.speedX = 0;
          this.incomingShape.speedY = 0;
        }

      }
    }
  }

  drawLines() {
    if (this.incomingShape.type === "line") {
      stroke(this.incomingShape.strokeColor);
      strokeWeight(this.incomingShape.lineweight);

      if (this.incomingShape.oneX > 600 || this.incomingShape.oneX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.oneX = this.incomingShape.oneX + this.incomingShape.speedX;

      if (this.incomingShape.oneY > 600 || this.incomingShape.oneY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.oneY = this.incomingShape.oneY + this.incomingShape.speedY;

      push();
      // translate(this.incomingShape.x, this.incomingShape.y);
      line(this.incomingShape.oneX, this.incomingShape.oneY, this.incomingShape.twoX, this.incomingShape.twoY);
      pop();

      if (this.incomingShape.oneX === this.incomingShape.originX && this.incomingShape.oneY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  resetMovement() {
    if (this.incomingShape.type === "box") {
      if (this.incomingShape.X === this.incomingShape.originX && this.incomingShape.Y === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.type === "circle") {
      if (this.incomingShape.X === this.incomingShape.originX && this.incomingShape.Y === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.type === "line") {
      if (this.incomingShape.oneX === this.incomingShape.originX && this.incomingShape.oneY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
  }

  // moveBox() {
  //   if (this.incomingShape.X > width || this.incomingShape.X < 0) {
  //     this.incomingShape.speedX = this.incomingShape.speedX * -1;
  //   }
  //   this.incomingShape.X = this.incomingShape.X + this.incomingShape.speedX;
  //
  //   if (this.incomingShape.Y > height || this.incomingShape.Y < 0) {
  //     this.incomingShape.speedY = this.incomingShape.speedY * -1;
  //   }
  //   this.incomingShape.Y = this.incomingShape.Y + this.incomingShape.speedY;
  //
  //   translate(this.incomingShape.X, this.incomingShape.Y)
  // }
}
