//Apple Watch

// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.


// Large Band
let tonyBox01 = {
  color: 'rgb(255, 204, 128)',
  boxX:50,
  boxY:280,

  originX:50,
  originY:280,

  boxXBoundary: 100,
  boxYBoundary:300,
  boxWidth: 200,
  boxHeight:40,
  rectRound: 0,
  speedX:.25,
  speedY:.25
}

// Short Band
let tonyBox02 = {
  color: 'rgb(255, 204, 128)',
  boxX: 300,
  boxY: 280,

  originX: 300,
  originY: 280,

  boxXBoundary: 400,
  boxYBoundary:400,

  boxWidth:100,
  boxHeight:40,
  rectRound: 0,
  speedX:.5,
  speedY:.5
}

// Watch Face Small Grey
let tonyBox03 = {
  color:51,
  boxX:250.5,
  boxY:274.5,

  originX:250.5,
  originY:274.5,

  boxXBoundary: 500,
  boxYBoundary:400,
  boxWidth: 55,
  boxHeight:50,
  rectRound: 15,
  speedX:1,
  speedY:1
}

// Watch Face Big
let tonyBox04 = {
  color: 'rgb(255, 204, 128)',
  boxX:248,
  boxY:272,

  originX:248,
  originY:272,

  boxXBoundary: 500,
  boxYBoundary:400,

  boxWidth: 60,
  boxHeight:55,
  rectRound: 15,
  speedX:1,
  speedY:1
}

// Large Band Circle
let tonyCirc01 = {
  color: 'rgb(255, 204, 128)',

  circX:50,
  circY:300,

  originX:50,
  originY:300,

  circledia:40,
  speedX:1,
  speedY:1
}

// Short Band Circle
let tonyCirc02 = {
  color: 'rgb(255, 204, 128)',

  circX:400,
  circY:300,

  originX:400,
  originY:300,

  circledia:40,
  speedX:1,
  speedY:1

}

// Small Band Side Circle
let tonyCirc03 = {
  color:51,
  circX:355,
  circY:281,

  originX:355,
  originY:281,

  circledia:9,
  speedX:1,
  speedY:1

}

// Small Band Side Circle 2
let tonyCirc04 = {
  color:51,
  circX:355,
  circY:319,

  originX:355,
  originY:319,

  circledia:9,
  speedX:1,
  speedY:1

}

// Large Band Small Circle
let tonyCirc05 = {
  color:51,
  circX:80,
  circY:300,

  originX:80,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1

}

let tonyCirc06 = {
  color:51,
  circX:92,
  circY:300,

  originX:92,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1

}

let tonyCirc07 = {
  color:51,
  circX:104,
  circY:300,

  originX:104,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1

}

let tonyCirc08 = {
  color:51,
  circX:116,
  circY:300,

  originX:116,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1

}

let tonyCirc09 = {
  color:51,
  circX:128,
  circY:300,

  originX:128,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1

}

let circ10 = {
  color:51,
  circX:140,
  circY:300,

  originX:140,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1

}

let circ11 = {
  color:51,
  circX:152,
  circY:300,

  originX:152,
  originY:300,

  circledia:8,
  speedX:1,
  speedY:1
}

// consolidate into 1 array
// Your order in which you draw is important. Circles have to be above rectangles (and vice versa) to create the appropriate overlaps)
let tonyShapes = [tonyBox01, tonyBox02, tonyBox04, tonyBox03, tonyCirc01,tonyCirc02,tonyCirc03,tonyCirc04,tonyCirc05,tonyCirc06,tonyCirc07,tonyCirc08,tonyCirc09,circ10,circ11]
let tonyShapesArray = [];

// This is to control the time it takes to run a full cycle.
let tonySpeedMultiplier = 3;

// function setup() {
//   createCanvas(600, 600);
//
//   for (let i=0;i < tonyShapes.length;i++){
//
//     // Setting your speedX and speedY allows you to just look at the code when every shape is still
//     // tonyShapes[i].speedX = 0;
//     // tonyShapes[i].speedY = 0;
//
//     // This is where your speed multiplier adjusts the speedX and speedY
//     tonyShapes[i].speedX = tonyShapes[i].speedX * tonySpeedMultiplier;
//     tonyShapes[i].speedY = tonyShapes[i].speedY * tonySpeedMultiplier;
//
//     tonyShapesArray[i]= new TonyWatch(tonyShapes[i]);
//   }
// }
//
// function draw() {
//   background(51);
//   for (let i = 0; i < tonyShapesArray.length; i++){
//     tonyShapesArray[i].drawGhostedWatch();
//     tonyShapesArray[i].drawRect();
//     tonyShapesArray[i].drawCircle();
//   }
// }

class TonyWatch {
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  // Method to draw a ghosted outline of your watch
  drawGhostedWatch() {
    noStroke();

    // Draw rectangles
    // In drawing a rect, I have to make sure the object is not a circle.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circX === undefined) {
      fill(255, 255, 255, 20);
      rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.boxWidth,this.incomingShape.boxHeight, this.incomingShape.rectRound);
    }

    // Draw circles
    // In drawing a circle, I have to make sure the object is not a rect.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.boxX === undefined) {
      fill(255, 255, 255, 20);
      circle(this.incomingShape.originX,this.incomingShape.originY,this.incomingShape.circledia)
    }
  }

  // Method to draw rectangles
  // In drawing a rect, I have to make sure the object is not a circle.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawRect(){
    if (this.incomingShape.circX === undefined) {

      if (this.incomingShape.boxX > this.incomingShape.boxXBoundary ||this.incomingShape.boxX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.boxX = this.incomingShape.boxX + this.incomingShape.speedX;

      if (this.incomingShape.boxY > this.incomingShape.boxYBoundary || this.incomingShape.boxY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.boxY = this.incomingShape.boxY + this.incomingShape.speedY;

      fill(color(this.incomingShape.color));

      // Draw and move rectangles
      push()
      translate(this.incomingShape.boxX, this.incomingShape.boxY)
      rect(0, 0,this.incomingShape.boxWidth, this.incomingShape.boxHeight, this.incomingShape.rectRound);
      // rect(this.incomingShape.rectX, this.incomingShape.rectY,this.incomingShape.rectWidth,this.incomingShape.rectHeight,this.incomingShape.rectRound)
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.boxX === this.incomingShape.originX && this.incomingShape.boxY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to draw circles
  // In drawing a circle, I have to make sure the object is not a rect.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawCircle(){
    if (this.incomingShape.boxX === undefined) {
      if (this.incomingShape.circX > 600 || this.incomingShape.circX < 0){
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.circX = this.incomingShape.circX + this.incomingShape.speedX;

      if (this.incomingShape.circY > 600 || this.incomingShape.circY < 0){
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.circY = this.incomingShape.circY + this.incomingShape.speedY;

      fill(color(this.incomingShape.color));

      // Draw and move circles
      push()
      translate(this.incomingShape.circX, this.incomingShape.circY)
      circle(0,0,this.incomingShape.circledia)
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.circX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.circY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  resetMovement() {
    if (this.incomingShape.circX === undefined) {
      if (this.incomingShape.boxX === this.incomingShape.originX && this.incomingShape.boxY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.boxX === undefined) {
      if (parseInt(this.incomingShape.circX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.circY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
  }


}
