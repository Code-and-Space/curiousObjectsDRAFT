// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

//headrest
let mattCircle01 = {
  color: 220,
  circleX: 190,
  circleY: 150,

  originX: 190,
  originY: 150,

  circleD: 200,
  speedX: 2,
  speedY: 2
}

//negativecircle1
let mattCircle02 = {
  color: 0,
  circleX: 190,
  circleY: 150,

  originX: 190,
  originY: 150,

  circleD: 155,
  speedX: 2,
  speedY: 2
}

//negativerect1
let mattRect01 = {
  color: 0,
  rectX: 90,
  rectY: 150,

  originX: 90,
  originY: 150,

  rectW: 200,
  rectH: 150,
  speedX: 2,
  speedY: 2
}

//metalring
let mattArc01 = {
  color: 220,
  arcX: 190,
  arcY: 150,

  originX: 190,
  originY: 150,

  arcW: 190,
  arcH: 200,
  arcStart: 0,
  speedX: 2,
  speedY: 2
}

//metalringnegative
let mattArc02 = {
  color: "black",
  arcX: 190,
  arcY: 150,

  originX: 190,
  originY: 150,

  arcW: 175,
  arcH: 185,
  arcStart: 0,
  speedX: 2,
  speedY: 2
}

//negativerect2
let mattRect02 = {
  color: "black",
  rectX: 145,
  rectY: 150,

  originX: 145,
  originY: 150,

  rectW: 100,
  rectH: 150,
  speedX: 2,
  speedY: 2
}

//ear1
let mattRect03 = {
  color: 220,
  rectX: 150,
  rectY: 185,

  originX: 150,
  originY: 185,

  rectW: 30,
  rectH: 100,
  speedX: 2,
  speedY: 2
}

//ear2
let mattRect04 = {
  color: 220,
  rectX: 200,
  rectY: 185,

  originX: 200,
  originY: 185,

  rectW: 30,
  rectH: 100,
  speedX: 2,
  speedY: 2
}

//ear1a
let mattRect05 = {
  color: 220,
  rectX: 135,
  rectY: 200,

  originX: 135,
  originY: 200,

  rectW: 15,
  rectH: 75,
  speedX: 2,
  speedY: 2

}

//ear2a
let mattRect06 = {
  color: 220,
  rectX: 230,
  rectY: 200,

  originX: 230,
  originY: 200,

  rectW: 15,
  rectH: 75,
  speedX: 2,
  speedY: 2
}

// consolidate into 1 array
let mattShapes = [mattCircle01, mattCircle02, mattRect01, mattArc01, mattArc02, mattRect02, mattRect03, mattRect04, mattRect05, mattRect06];
let mattShapesArray = [];

// This is to control the time it takes to run a full cycle.
let mattSpeedMultiplier = 2;

// function setup() {
//   createCanvas(600, 600);
//
//   // consolidate into 1 array
//   for (let i = 0; i < mattShapes.length; i++) {
//     // mattShapes[i].speedX = 0;
//     // mattShapes[i].speedY = 0;
//
//     mattShapes[i].speedX = mattShapes[i].speedX * mattSpeedMultiplier;
//     mattShapes[i].speedY = mattShapes[i].speedY * mattSpeedMultiplier;
//
//     mattShapesArray[i] = new HeadphonesChaos(mattShapes[i]);
//   }
// }
//
//
// function draw() {
//   background(0);
//
//   for (let i = 0; i < mattShapesArray.length; i++) {
//     mattShapesArray[i].moveCircle();
//     mattShapesArray[i].moveRect();
//     mattShapesArray[i].moveArc();
//     // mattShapesArray[i].diagramMovement();
//     mattShapesArray[i].drawGhostedHeadphones();
//     // rectArray[i].trackingLines();
//   }
// }



class HeadphonesChaos {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

  // Draw ghosted still of the original headphones.
  drawGhostedHeadphones() {

    // Method to draw a circle
    // In drawing a circle, I have to make sure the object is not a rect or arc.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      push();
      fill(255, 255, 255, 20);
      translate(this.incomingShape.originX, this.incomingShape.originY);
      circle(0, 0, this.incomingShape.circleD);
      pop();
    }

    // Method to draw a rect
    // In drawing a rect, I have to make sure the object is not a circle or arc.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      fill(255, 255, 255, 20);
      push();
      translate(this.incomingShape.originX, this.incomingShape.originY)
      rect(0, 0, this.incomingShape.rectW, this.incomingShape.rectH);
      pop()
    }

    // Method to draw an arc
    // In drawing an arc, I have to make sure the object is not a rect or circle.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circleX === undefined && this.incomingShape.rectX === undefined) {
      push()
      fill(255, 255, 255, 20);
      translate(this.incomingShape.originX, this.incomingShape.originY);
      arc(0, 0, this.incomingShape.arcW, this.incomingShape.arcH, 0, PI, OPEN);
      pop();
    }
  }

  moveCircle() {
    // Method to draw a circle
    // In drawing a circle, I have to make sure the object is not a rect or arc.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      fill(this.incomingShape.color);
      if (this.incomingShape.circleX > 600 || this.incomingShape.circleX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;
      if (this.incomingShape.circleY > 600 || this.incomingShape.circleY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;

      push()
      translate(this.incomingShape.circleX, this.incomingShape.circleY)
      circle(0, 0, this.incomingShape.circleD)
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to draw a rect
  // In drawing a rect, I have to make sure the object is not a circle or arc.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  moveRect() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.rectX + this.incomingShape.rectW > 600 || this.incomingShape.rectX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;

      if (this.incomingShape.rectY > 600 || this.incomingShape.rectY < 0) {

        // if (this.incomingShape.rectY + this.incomingShape.rectHeight > height || this.incomingShape.rectY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

      // stroke(255)
      fill(this.incomingShape.color);
      push();
      translate(this.incomingShape.rectX, this.incomingShape.rectY)
      rect(0, 0, this.incomingShape.rectW, this.incomingShape.rectH);
      pop()

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }

    }
  }

  // Method to draw an arc
  // In drawing an arc, I have to make sure the object is not a rect or circle.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  moveArc() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.rectX === undefined) {
      fill(this.incomingShape.color);
      // fill('red');
      if (this.incomingShape.arcX > 600 || this.incomingShape.arcX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }

      this.incomingShape.arcX = this.incomingShape.arcX + this.incomingShape.speedX;
      if (this.incomingShape.arcY > 600 || this.incomingShape.arcY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }

      this.incomingShape.arcY = this.incomingShape.arcY + this.incomingShape.speedY;

      push()
      translate(this.incomingShape.arcX, this.incomingShape.arcY);
      arc(0, 0, this.incomingShape.arcW, this.incomingShape.arcH, 0, PI, OPEN);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.arcX === this.incomingShape.originX && this.incomingShape.arcY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  diagramMovement() {
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      stroke(255)
      line(this.incomingShape.circleX, 0, this.incomingShape.circleX, height)
      line(0, this.incomingShape.circleY, width, this.incomingShape.circleY)
    } else if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      stroke(255)
      line(this.incomingShape.rectX, 0, this.incomingShape.rectX, height)
      line(0, this.incomingShape.rectY, width, this.incomingShape.rectY)
    } else if (this.incomingShape.circleX === undefined && this.incomingShape.rectX === undefined) {
      stroke(255)
      line(this.incomingShape.arcX, 0, this.incomingShape.arcX, height);
      line(0, this.incomingShape.arcY, width, this.incomingShape.arcY);
    }
  }

  resetMovement() {
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.circleX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.rectX === this.incomingShape.originX && this.incomingShape.rectY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.circleX === undefined && this.incomingShape.rectX === undefined) {
      if (this.incomingShape.arcX === this.incomingShape.originX && this.incomingShape.arcY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
  }
}
