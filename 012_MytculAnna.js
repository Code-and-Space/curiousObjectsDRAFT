// AC Note: I added an xOrigin and yOrigin.
// When transX and transY equal xOrigin and yOrigin, speedX and speedY will equal 0.

let annaBox01 = {
  color: 0, //main body
  rectX: 0,
  rectY: 0,
  rectWidth: 120,
  rectHeight: 300,
  transX: 300,
  transY: 400,

  originX: 300,
  originY: 400,

  speedX: 1,
  speedY: 2
}

let annaBox02 = {
  color: 0, //neck
  rectX: 0,
  rectY: 0,
  rectWidth: 80,
  rectHeight: 30,
  transX: 300,
  transY: 210,

  originX: 300,
  originY: 210,

  speedX: 2,
  speedY: 2
}

let annaBox03 = {
  color: 0, //body cover in the middle
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 300,
  transY: 220,

  originX: 300,
  originY: 220,

  speedX: -2,
  speedY: 1
}

let annaBox04 = {
  color: 0, //neck cap
  rectX: 0,
  rectY: 0,
  rectWidth: 80,
  rectHeight: 20,
  transX: 300,
  transY: 182,

  originX: 300,
  originY: 182,

  speedX: 2,
  speedY: 3
}

let annaBox05 = {
  color: 0, //cap
  rectX: 0,
  rectY: 0,
  rectWidth: 80,
  rectHeight: 30,
  transX: 300,
  transY: 154,

  originX: 300,
  originY: 154,

  speedX: 2,
  speedY: 5
}

let annaBox06 = {
  color: 0, //handle left
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 50,
  originX: 255,
  originY: 140,

  transX: 255,
  transY: 140,

  speedX: 9,
  speedY: 4
}

let annaBox07 = {
  color: 0, //handle right
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 50,
  transX: 345,
  transY: 140,

  originX: 345,
  originY: 140,

  speedX: 1,
  speedY: 5
}

let annaBox08 = {
  color: 0, //handle left addition
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 20,
  transX: 248,
  transY: 150,

  originX: 248,
  originY: 150,

  speedX: 5,
  speedY: 1
}

let annaBox09 = {
  color: 0, //handle right addition
  rectX: 0,
  rectY: 0,
  rectWidth: 5,
  rectHeight: 20,
  transX: 352,
  transY: 150,

  originX: 352,
  originY: 150,

  speedX: 6,
  speedY: 6
}

let annaBox10 = {
  color: 0, //bottom
  rectX: 0,
  rectY: 0,
  rectWidth: 100,
  rectHeight: 20,
  transX: 300,
  transY: 550,

  originX: 300,
  originY: 550,

  speedX: 1,
  speedY: 1
}

let annaCircle01 = {
  color: 0, //body left
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 60,
  ellipseHeight: 60,
  transX: 270,
  transY: 250,

  originX: 270,
  originY: 250,

  speedX: 9,
  speedY: 9
}

let annaCircle02 = {
  color: 0, //body right
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 60,
  ellipseHeight: 60,
  transX: 330,
  transY: 250,

  originX: 330,
  originY: 250,

  speedX: 7,
  speedY: 2
}

let annaCircle03 = {
  color: 0, //body left low
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 20,
  ellipseHeight: 20,
  transX: 250,
  transY: 550,

  originX: 250,
  originY: 550,

  speedX: -3,
  speedY: -3
}

let annaCircle04 = {
  color: 0, //body right low
  ellipseX: 0,
  ellipseY: 0,
  ellipseWidth: 20,
  ellipseHeight: 20,
  transX: 350,
  transY: 550,

  originX: 350,
  originY: 550,

  speedX: -1,
  speedY: -1
}

let annaArc01 = {
  color: 0, //black
  arcX: 0,
  arcY: 0,
  arcWidth: 95,
  arcHeight: 95,
  transX: 300,
  transY: 115,

  originX: 300,
  originY: 115,

  speedX: -4,
  speedY: 6
}

let annaArc02 = {
  color: 220, //white
  arcX: 0,
  arcY: 0,
  arcWidth: 85,
  arcHeight: 85,
  transX: 300,
  transY: 115,

  originX: 300,
  originY: 115,

  speedX: 4,
  speedY: 4
}

let flaskElements = [annaBox01,annaBox02,annaBox03,annaBox04,annaBox05,annaBox06,annaBox07,annaBox08,annaBox09,annaBox10,annaCircle01,annaCircle02,annaCircle03,annaCircle04,annaArc01,annaArc02];
let flaskArray = [];

// This is to control the time it takes to run a full cycle.
let annaSpeedMultiplier = 1.5;

// function setup() {
//   createCanvas(600, 600);
//   rectMode(CENTER);
//   // console.log(flaskElements);
//   for (let i = 0; i < flaskElements.length; i++) {
//
//     // Setting your speedX and speedY allows you to just look at the code when every shape is still
//     // flaskElements[i].speedX = 0;
//     // flaskElements[i].speedY = 0;
//
//     // This is where your speed multiplier adjusts the speedX and speedY
//     flaskElements[i].speedX = flaskElements[i].speedX * annaSpeedMultiplier;
//     flaskElements[i].speedY = flaskElements[i].speedY * annaSpeedMultiplier;
//
//     flaskArray[i] = new MovedFlask (flaskElements[i]);
//   }
// }
//
// function draw() {
//   background (220);
//   push();
//   translate(0, 0);
//
//
//   for (let i = 0; i < flaskElements.length; i++) {
//     flaskArray[i].drawGhostedBottle();
//     flaskArray[i].moveBox();
//     flaskArray[i].trackingLines();
//     flaskArray[i].drawCircle();
//     flaskArray[i].drawArc();
//   }
//   pop();
// }



class MovedFlask {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }

  // Method to draw ghosted bottle
  drawGhostedBottle() {
    // If I have a JS Object NAME called rectX
    // Then I know I am a box
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.ellipseX === undefined && this.incomingShape.arcX === undefined) {
      noStroke();
      fill(0, 0, 0, 20);
      rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
    }

    // Draw ellipse
    // If object does not contain name with rectX or arcX, then object is attributes of an ellipse
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      noStroke();
      fill(0, 0, 0, 20);
      ellipse(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.ellipseWidth, this.incomingShape.ellipseHeight);
    }

    // Draw arc
    // If object does not contain name with rectX or ellipseX, then object is attributes of an ellipse
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.ellipseX === undefined && this.incomingShape.rectX === undefined) {
      noStroke();
      fill(0, 0, 0, 20);
      arc(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.arcWidth, this.incomingShape.arcHeight, PI,TWO_PI);
    }


  }

  // Method to draw box
  moveBox() {
    // If I have a JS Object NAME called rectX
    // Then I know I am a box
    if (this.incomingShape.ellipseX === undefined && this.incomingShape.arcX === undefined) {
      push();
      if (this.incomingShape.transX > 600 || this.incomingShape.transX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.transX = this.incomingShape.transX + this.incomingShape.speedX;
      if (this.incomingShape.transY > 600 || this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.transY = this.incomingShape.transY + this.incomingShape.speedY;
      translate(this.incomingShape.transX, this.incomingShape.transY, 50);
      noStroke();
      fill(0);
      rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.transX === this.incomingShape.originX && this.incomingShape.transY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to draw circles
  drawCircle() {
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {

      fill(this.incomingShape.color); //black

      push();
      if (this.incomingShape.transX > 600 || this.incomingShape.transX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.transX  = this.incomingShape.transX  + this.incomingShape.speedX;
      if ( this.incomingShape.transY > 600 ||  this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.transY  = this.incomingShape.transY  + this.incomingShape.speedY;
      translate(this.incomingShape.transX, this.incomingShape.transY, 0)
      ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseWidth, this.incomingShape.ellipseHeight);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.transX === this.incomingShape.originX && this.incomingShape.transY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to draw arcs
  drawArc () {
    if (this.incomingShape.ellipseX === undefined && this.incomingShape.rectX === undefined) {
      fill(this.incomingShape.color);
      push()
      if (this.incomingShape.transX > 600 || this.incomingShape.transX  < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.transX  = this.incomingShape.transX + this.incomingShape.speedX;
      if ( this.incomingShape.transY > 600 ||  this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.transY  = this.incomingShape.transY + this.incomingShape.speedY;
      strokeWeight(0);
      translate(this.incomingShape.transX, this.incomingShape.transY, 0)
      arc(this.incomingShape.arcX, this.incomingShape.arcX, this.incomingShape.arcWidth, this.incomingShape.arcHeight, PI,TWO_PI);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.transX === this.incomingShape.originX && this.incomingShape.transY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to trace shapes
  trackingLines() {
    stroke(0);
    strokeWeight(0.2)
    line(this.incomingShape.transX, 0, this.incomingShape.transX, height)
    line(0, this.incomingShape.transY, height, this.incomingShape.transY)
  }

  resetMovement() {
    if (this.incomingShape.ellipseX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.transX === this.incomingShape.originX && this.incomingShape.transY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      if (this.incomingShape.transX === this.incomingShape.originX && this.incomingShape.transY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.ellipseX === undefined && this.incomingShape.rectX === undefined) {
      if (this.incomingShape.transX === this.incomingShape.originX && this.incomingShape.transY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
  }

}
