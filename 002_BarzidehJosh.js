// I added an xOrigin and yOrigin.
// When transX and transY equal xOrigin and yOrigin, speedX and speedY will equal 0.


//big circle L
let joshCircle01a = {
  color: 255,
  circleX: 260,
  circleY: 170,

  originX: 260,
  originY: 170,

  circleR: 60,
  speedX:-3,
  speedY:-2
}

//big circle R
let joshCircle02a = {
  color: 255,
  circleX: 340,
  circleY: 170,

  originX: 340,
  originY: 170,

  circleR: 60,
  speedX:-3,
  speedY:-2
}

//top sq
let joshRect01a = {
  color: 255,
  rectX: 270,
  rectY: 35,

  originX: 270,
  originY: 35,

  rectWidth: 55,
  rectHeight: 150,
  rectR: 8,
  speedX:1,
  speedY:1
}

//bottom rect
let joshRect02a = {
  color: 255,
  rectX: 230,
  rectY: 170,

  originX: 230,
  originY: 170,

  rectWidth: 140,
  rectHeight: 350,
  rectR: 8,
  speedX:-1,
  speedY:-1
}

//top fill in
let joshRect03a = {
  color: 255,
  rectX: 256,
  rectY: 115,

  originX: 256,
  originY: 115,

  rectWidth: 85,
  rectHeight: 40,
  rectR: 8,
  speedX:11,
  speedY:5
}

//fill circle Background R
let joshCircle03a = {
  color: 'rgb(188,143,143)',
  circleX: 340,
  circleY: 125,

  originX: 340,
  originY: 125,

  circleR: 30,
  speedX:-8,
  speedY:2
}

//fill circle Background L
let joshCircle04a = {
  color: 'rgb(188,143,143)',
  circleX: 255,
  circleY: 125,

  originX: 255,
  originY: 125,

  circleR: 30,
  speedX:4,
  speedY:4
}

//top rect fill in R
let joshRect04a = {
  color: 'rgb(188,143,143)',
  rectX: 325,
  rectY: 30,

  originX: 325,
  originY: 30,

  rectWidth: 30,
  rectHeight: 100,
  rectR: 8,
  speedX:6,
  speedY:-3
}

//top rect fill in L
let joshRect05a = {
  color: 'rgb(188,143,143)',
  rectX: 240,
  rectY: 30,

  originX: 240,
  originY: 30,

  rectWidth: 30,
  rectHeight: 100,
  rectR: 8,
  speedX:3,
  speedY:7
}

//top rect fill labe
let joshRect06a = {
  color: 'rgb(176,196,222)',
  rectX: 240,
  rectY: 220,

  originX: 240,
  originY: 220,

  rectWidth: 120,
  rectHeight: 140,
  rectR: 8,
  speedX:5,
  speedY:2
}

//bottom rect fill labe
let joshRect07a = {
  color: 'rgb(176,196,222)',
  rectX: 240,
  rectY: 371,

  originX: 240,
  originY: 371,

  rectWidth: 120,
  rectHeight: 40,
  rectR: 8,
  speedX:2,
  speedY:3
}

// let joshCirclesList = [joshCircle01a,joshCircle02a,joshCircle03a,joshCircle04a];
// let joshCirclesArray = [];
// let joshShapes = [joshRect01a,joshRect02a,joshRect03a,joshRect04a,joshRect05a,joshRect06a,joshRect07a];
// let joshShapeArray_Josh = [];

// AC NOTES: Instead of separating between boxes and circles, I combined them into one array.
let joshShapeList = [joshCircle01a, joshCircle02a, joshRect01a, joshRect02a, joshRect03a, joshRect04a, joshRect05a, joshRect06a, joshRect07a, joshCircle03a, joshCircle04a];
let joshShapeArray = [];

// This is to control the time it takes to run a full cycle.
let joshSpeedMultiplier = 1;

// function setup() {
//   createCanvas(600, 600);
//
//   // for (let i = 0; i < joshCirclesList.length; i++) {
//   //   joshCirclesArray[i] = new Circle(joshCirclesList[i]);
//   // }
//
//   for (let i = 0; i < joshShapeList.length; i++) {
//     // speedMultiplier is adjusting your speedX and speedY
//     joshShapeList[i].speedX = joshShapeList[i].speedX * joshSpeedMultiplier;
//     joshShapeList[i].speedY = joshShapeList[i].speedY * joshSpeedMultiplier;
//
//     // Sometimes, I just need to pause your shapes by setting speedX and speedY for each object to 0.
//     // joshShapeList[i].speedX = 0;
//     // joshShapeList[i].speedY = 0;
//
//     joshShapeArray[i] = new JoshMovedShapes(joshShapeList[i]);
//   }
// }

// function draw() {
//   background(188,143,143);
//
//   // for (let i = 0; i < joshShapes.length; i++) {
//   //   joshShapeArray[i].drawBox();
//   //   joshShapeArray[i].moveRect();
//   //   joshShapeArray[i].trackingLines();
//   // }
//   // for (let i = 0; i < joshCirclesList.length; i++) {
//   //   joshCirclesArray[i].drawCircle();
//   //   joshCirclesArray[i].moveCircle();
//   //   joshCirclesArray[i].trackingLines();
//   // }
//
//   for (let i = 0; i < joshShapeArray.length; i++) {
//     joshShapeArray[i].drawBottleGhosted();
//     joshShapeArray[i].drawCircle();
//     joshShapeArray[i].moveCircle();
//     joshShapeArray[i].drawBox();
//     joshShapeArray[i].moveRect();
//     joshShapeArray[i].trackingLines();
//   }
// }

class JoshMovedShapes{
  constructor(inputGeo) {
    this.inputGeo = inputGeo;
  }

  drawBottleGhosted() {
    // I have one ghosted still of the original bottle.


    // Ghosted image has a custom fill.
    fill(255, 255, 255, 50);

    // In drawing a circle, I have to make sure the object is not a rectangle.
    // This is done with a conditional statement. If the JS Object does not have an lineX, then the JS Object is a box.
    if(this.inputGeo.rectX == undefined) {
      noStroke();
      ellipse(this.inputGeo.originX, this.inputGeo.originY, this.inputGeo.circleR);
    }

    // In drawing a rectangle, I have to make sure the object is not a circle.
    // This is done with a conditional statement. If the JS Object does not have an lineX, then the JS Object is a box.
    if (this.inputGeo.circleX === undefined) {
      noStroke();
      // fill(this.inputGeo.color);
      rect(this.inputGeo.originX, this.inputGeo.originY, this.inputGeo.rectWidth, this.inputGeo.rectHeight);
    }
  }

  // Method to draw a circle.
  drawCircle(){
    // In drawing a circle, I have to make sure the object is not a rectangle.
    // This is done with a conditional statement. If the JS Object does not have an lineX, then the JS Object is a box.
    if(this.inputGeo.rectX == undefined) {
      noStroke();
      fill(this.inputGeo.color);
      ellipse(this.inputGeo.circleX, this.inputGeo.circleY, this.inputGeo.circleR);
    }
  }

  // Method to move circle.
  moveCircle(){
    // In drawing a circle, I have to make sure the object is not a rectangle.
    // This is done with a conditional statement. If the JS Object does not have an rectX, then the JS Object is a box.
    if(this.inputGeo.rectX === undefined){
      if (this.inputGeo.circleX > 600 || this.inputGeo.circleX < 0) {
        this.inputGeo.speedX = this.inputGeo.speedX*-1;
      }
      this.inputGeo.circleX = this.inputGeo.circleX + this.inputGeo.speedX;
      if (this.inputGeo.circleY > 600 || this.inputGeo.circleY < 0) {
        this.inputGeo.speedY = this.inputGeo.speedY*-1;
      }
      this.inputGeo.circleY = this.inputGeo.circleY + this.inputGeo.speedY;
    }
    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (this.inputGeo.circleX === this.inputGeo.originX && this.inputGeo.circleY === this.inputGeo.originY) {
      this.inputGeo.speedX = 0;
      this.inputGeo.speedY = 0;
    }
  }

  // Method to draw a rectangle.
  drawBox(){
    // In drawing a rectangle, I have to make sure the object is not a circle.
    // This is done with a conditional statement. If the JS Object does not have an circleX, then the JS Object is a box.
    if (this.inputGeo.circleX === undefined) {
      noStroke();
      fill(this.inputGeo.color);
      rect(this.inputGeo.rectX, this.inputGeo.rectY, this.inputGeo.rectWidth, this.inputGeo.rectHeight);
    }
  }

  moveRect() {
    // In drawing a rectangle, I have to make sure the object is not a circle.
    // This is done with a conditional statement. If the JS Object does not have an circleX, then the JS Object is a box.
    if (this.inputGeo.circleX === undefined) {
      if (this.inputGeo.rectX > 600 || this.inputGeo.rectX < 0) {
        this.inputGeo.speedX = this.inputGeo.speedX*-1;
      }
      this.inputGeo.rectX = this.inputGeo.rectX + this.inputGeo.speedX;
      if (this.inputGeo.rectX > 600 || this.inputGeo.rectX < 0) {
        this.inputGeo.speedY = this.inputGeo.speedY*-1;
      }
      this.inputGeo.rectY = this.inputGeo.rectY + this.inputGeo.speedY;
    }
    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (parseInt(this.inputGeo.rectX) === this.inputGeo.originX && parseInt(this.inputGeo.rectY) === this.inputGeo.originY) {
      this.inputGeo.speedX = 0;
      this.inputGeo.speedY = 0;
    }
    // console.log(parseInt(this.inputGeo.rectX))
  }

  trackingLines() {
    stroke(255);
    strokeWeight(1.5);
    if (this.inputGeo.circleX === undefined) {
      line(this.inputGeo.rectX+this.inputGeo.rectWidth/2, 0, this.inputGeo.rectX+this.inputGeo.rectWidth/2, height)
      line(0, this.inputGeo.rectY+this.inputGeo.rectHeight/2, height, this.inputGeo.rectY+this.inputGeo.rectHeight/2)
    } else if (this.inputGeo.rectX === undefined) {
      line(this.inputGeo.circleX, 0, this.inputGeo.circleX, height)
      line(0, this.inputGeo.circleY, height, this.inputGeo.circleY)
    }
  }

  resetMovement() {
    if (this.inputGeo.circleX === undefined) {
      if (parseInt(this.inputGeo.rectX) === this.inputGeo.originX && parseInt(this.inputGeo.rectY) === this.inputGeo.originY) {
        this.inputGeo.speedX = getRandomInt(1, 10) * joshSpeedMultiplier;
        this.inputGeo.speedY = getRandomInt(1, 10) * joshSpeedMultiplier;
      }
    }
    if(this.inputGeo.rectX === undefined){
      if (this.inputGeo.circleX === this.inputGeo.originX && this.inputGeo.circleY === this.inputGeo.originY) {
        this.inputGeo.speedX = getRandomInt(-10, 10) * joshSpeedMultiplier;
        this.inputGeo.speedY = getRandomInt(-10, 10) * joshSpeedMultiplier;
      }
    }
  }
}


// class Circle{
//   constructor(inputGeo) {
//     this.inputGeo = inputGeo;
//   }
//   drawCircle(){
//     // if(this.inputGeo.rectX== true){
//     //  translate(this.inputGeo.rectX, this.inputGeo.rectY, 50);
//     noStroke();
//     fill(this.inputGeo.color);
//     ellipse(this.inputGeo.circleX, this.inputGeo.circleY, this.inputGeo.circleR);
//
//   }
//   moveCircle(){
//
//     if (this.inputGeo.circleX > width || this.inputGeo.circleX < 0) {
//       this.inputGeo.speedX = this.inputGeo.speedX*-1;
//     }
//     this.inputGeo.circleX = this.inputGeo.circleX + this.inputGeo.speedX;
//     if (this.inputGeo.circleY > width || this.inputGeo.circleY < 0) {
//       this.inputGeo.speedY = this.inputGeo.speedY*-1;
//     }
//     this.inputGeo.circleY = this.inputGeo.circleY + this.inputGeo.speedY;
//   }
//   trackingLines() {
//     stroke(255);
//     strokeWeight(1.5);
//     line(this.inputGeo.circleX, 0, this.inputGeo.circleX, height)
//     line(0, this.inputGeo.circleY, height, this.inputGeo.circleY)
//   }
// }
// class MovedjoshShapes {
//   constructor(inputGeo) {
//     this.inputGeo = inputGeo;
//   }
//
//   drawBox(){
//     noStroke();
//     fill(this.inputGeo.color);
//     rect(this.inputGeo.rectX, this.inputGeo.rectY, this.inputGeo.rectWidth, this.inputGeo.rectHeight);
//   }
//
//
//
//   moveRect() {
//     if (this.inputGeo.rectX > width || this.inputGeo.rectX < 0) {
//       this.inputGeo.speedX = this.inputGeo.speedX*-1;
//     }
//     this.inputGeo.rectX = this.inputGeo.rectX + this.inputGeo.speedX;
//     if (this.inputGeo.rectX > width || this.inputGeo.rectX < 0) {
//       this.inputGeo.speedY = this.inputGeo.speedY*-1;
//     }
//     this.inputGeo.rectY = this.inputGeo.rectY + this.inputGeo.speedY;
//   }
//
//   trackingLines() {
//     stroke(255);
//     strokeWeight(1.5);
//     line(this.inputGeo.rectX+this.inputGeo.rectWidth/2, 0, this.inputGeo.rectX+this.inputGeo.rectWidth/2, height)
//     line(0, this.inputGeo.rectY+this.inputGeo.rectHeight/2, height, this.inputGeo.rectY+this.inputGeo.rectHeight/2)
//
//   }
// }
