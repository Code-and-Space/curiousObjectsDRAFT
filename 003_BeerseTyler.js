// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

//bottom stem rectangle
let box01= {
  boxX: 181.02,
  boxY: 163.335,

  originX: 181.02,
  originY: 163.335,

  boxWidth: 37.94,
  boxHeight: 38.2,
  color: "black",
  speedX: 2,
  speedY:3,
}

//bottom stem outer circles
let circle01= {
  circleX: 151.758,
  circleY: 184.548,

  originX: 151.758,
  originY: 184.548,

  circledia: 82.7185,
  color: 'rgb(0, 102, 204)',
  speedX: 1,
  speedY: 1,
}

let circle02= {
  circleX: 248.222,
  circleY: 184.548,

  originX: 248.222,
  originY: 184.548,

  circledia: 82.7185,
  color: 'rgb(0, 102, 204)',
  speedX: 3,
  speedY: 2,
}

//stem to bulb circles
let circle03= {
  circleX: 182.8999,
  circleY: 168.644,

  originX: 182.8999,
  originY: 168.644,

  circledia: 13,
  color: 'rgb(0, 102, 204)',
  speedX: 1,
  speedY: 1,
}

let circle04= {
  circleX: 217.3648,
  circleY: 168.644,

  originX: 217.3648,
  originY: 168.644,

  circledia: 13,
  color: 'rgb(0, 102, 204)',
  speedX: 1,
  speedY: 2,
}

//stem to base circles
let circle05= {
  circleX: 183.8999,
  circleY: 196.0791,

  originX: 183.8999,
  originY: 196.0791,

  circledia: 11.1429,
  color: 'rgb(0, 102, 204)',
  speedX: 2,
  speedY: 2,
}

let circle06= {
  circleX: 214.3648,
  circleY: 196.0791,

  originX: 214.3648,
  originY: 196.0791,

  circledia: 11.1429,
  color: 'rgb(0, 102, 204)',
  speedX: 1,
  speedY: 1,
}

//base
let box02= {
  boxX: 170.4312,
  boxY: 200.626,

  originX: 170.4312,
  originY: 200.626,

  boxWidth: 59.1351,
  boxHeight: 3.1037,
  color: "black",
  speedX: 2,
  speedY: 1,
}

let circle07= {
  circleX: 170.4312,
  circleY: 202.1778,

  originX: 170.4312,
  originY: 202.1778,

  circledia: 3.1037,
  color: "black",
  speedX: 2,
  speedY: 1,
}
let circle08= {
  circleX: 229.5663,
  circleY: 202.1778,

  originX: 229.5663,
  originY: 202.1778,

  circledia: 3.1037,
  color: "black",
  speedX:1,
  speedY:1,
}

//bulb rectangle
let box03= {
  boxX: 161.2,
  boxY: 74.5,

  originX: 161.2,
  originY: 74.5,

  boxWidth: 76.55,
  boxHeight: 49.6,
  color: "black",
  speedX: 1,
  speedY: 2,
}

//bulb upper circles
let circle09= {
  circleX: 83.74,
  circleY: 83.74,

  originX: 83.74,
  originY: 83.74,

  circledia: 167.5,
  color: 'rgb(0, 102, 204)',
  speedX: 2,
  speedY: 2,
}

let circle10= {
  circleX: 316.26,
  circleY: 83.74,

  originX: 316.26,
  originY: 83.74,

  circledia: 167.5,
  color: 'rgb(0, 102, 204)',
  speedX: 3,
  speedY: 3,
}

//inner bulb cirlces
let circle11= {
  circleX:199.97,
  circleY: 121.93,

  originX:199.97,
  originY: 121.93,

  circledia: 76.68,
  color: "black",
  speedX:3,
  speedY:3,
}

let circle12= {
  circleX: 199.97,
  circleY: 127.69,

  originX: 199.97,
  originY: 127.69,

  circledia: 76.68,
  color: "black",
  speedX:1,
  speedY:1,
}

// consolidate into 1 array
// Your order in which you draw is important. Circles have to be above rectangles (and vice versa) to create the appropriate overlaps)
let tylerShapes = [box01, circle01, circle02, circle03, circle04, circle05, circle06, box02, circle07, circle08, box03, circle09, circle10, circle11, circle12];
let tylerShapesArray = [];

// This is to control the time it takes to run a full cycle.
let tylerSpeedMultiplier = 2

// function setup() {
//   createCanvas(600, 600);
//
//   for (let i = 0; i < tylerShapes.length; i++) {
//     // tylerShapes[i].speedX = 0;
//     // tylerShapes[i].speedY = 0;
//
//
//     // This is where your speed multiplier adjusts the speedX and speedY
//     tylerShapes[i].speedX = tylerShapes[i].speedX * tylerSpeedMultiplier;
//     tylerShapes[i].speedY = tylerShapes[i].speedY * tylerSpeedMultiplier;
//
//     tylerShapesArray[i] = new TylerGlass(tylerShapes[i]);
//   }
// }
//
// function draw() {
//   background(0, 102, 204);
//   noStroke();
//
//   for (let i = 0; i < tylerShapesArray.length; i++) {
//     tylerShapesArray[i].drawGhostedGlass();
//     tylerShapesArray[i].moveRect();
//     tylerShapesArray[i].moveCircle();
//     // tylerShapesArray[i].traceShapes();
//   }
// }

class TylerGlass {
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  // Draw a ghosted outline of your glass
  drawGhostedGlass() {
    // Method to draw a circle
    // In drawing a circle, I have to make sure the object is not a rect.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    noStroke();
    if (this.incomingShape.boxX === undefined) {
      fill(255, 255, 255, 20)
      circle(this.incomingShape.originX, this.incomingShape.originY,this.incomingShape.circledia)
    }

    // Method to draw rect
    // In drawing a rect, I have to make sure the object is not a circle.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circleX === undefined) {
      fill(255, 255, 255, 20)
      rect(this.incomingShape.originX, this.incomingShape.originY,this.incomingShape.boxWidth, this.incomingShape.boxHeight);
    }
  }

  // Method to draw a circle
  // In drawing a circle, I have to make sure the object is not a rect.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  moveCircle() {
    noStroke();
    if (this.incomingShape.boxX === undefined) {
      if (this.incomingShape.circleX > 600 || this.incomingShape.circleX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;

      if (this.incomingShape.circleY > 600 || this.incomingShape.circleY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;

      // Draw and move circles
      fill(color(this.incomingShape.color));
      push()
      translate(this.incomingShape.circleX, this.incomingShape.circleY)
      circle(0,0,this.incomingShape.circledia)
      pop()

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.circleX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.circleY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }


  // Method to draw rect
  // In drawing a rect, I have to make sure the object is not a circle.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  moveRect() {
    noStroke();
    if (this.incomingShape.circleX === undefined) {
      // rectMode(CENTER)
      fill(color(this.incomingShape.color));
      if(this.incomingShape.boxX > 600 || this.incomingShape.boxX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.boxX = this.incomingShape.boxX + this.incomingShape.speedX;

      if(this.incomingShape.boxY > 600 || this.incomingShape.boxY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.boxY = this.incomingShape.boxY + this.incomingShape.speedY;

      // Draw and move box
      push()
      translate(this.incomingShape.boxX, this.incomingShape.boxY)
      rect(0,0,this.incomingShape.boxWidth, this.incomingShape.boxHeight);
      pop()

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.boxX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.boxY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to trace shapes
  traceShapes() {
    if (this.incomingShape.boxX === undefined) {
      stroke("RED")
      // line(x1,y1,x2,y2)
      line(this.incomingShape.circleX, 0, this.incomingShape.circleX, height)
      line(0, this.incomingShape.circleY, width, this.incomingShape.circleY)
    }
    if (this.incomingShape.circleX === undefined) {

      stroke('rgb(0, 102, 204)')
      // line(x1,y1,x2,y2)
      line(this.incomingShape.boxX, 0, this.incomingShape.boxX, height)
      line(0, this.incomingShape.boxY, width, this.incomingShape.boxY)

    }
  }

  resetMovement() {
    if (this.incomingShape.boxX === undefined) {

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.circleX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.circleY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    if (this.incomingShape.boxX === undefined) {

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.circleX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.circleY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
  }


}
