let xuwenAngle = 0;
let xuwenSpeed = 0.005;


let boxDim = 40;
let growth = .5;


// I added an xOrigin and yOrigin.
// When rectX and rectY equal xOrigin and yOrigin, speedX and speedY will equal 0.

//Lamp head rectangle
let xuwenBox01 = { // this is a "map" of all components that define location of xuwenBox01
  color: 0,
  boxX: 220,
  boxY: 152,

  originX: 220,
  originY: 152,

  boxWidth:160,
  boxHeight:120,
  speedX: 5,
  speedY: 7,
}

//Lamp cap circle
let xuwenCircle01 = {
  color: 0,
  circleX: 302,
  circleY: 145,

  originX: 302,
  originY: 145,

  circleWidth: 12,
  circleHeight: 12,
  speedX: 7,
  speedY: 5
}

//Lamp neck rectangle
let xuwenBox02 = {
  color: 0,
  circleX: 294,
  circleY: 230,

  originX: 294,
  originY: 230,

  circleWidth: 16,
  circleHeight: 60,
  speedX: 4,
  speedY: 6,
}

//Lamp shoulder rectangle
let xuwenBox03 = {
  color: 0,
  boxX: 275,
  boxY: 290,

  originX: 275,
  originY: 290,

  boxWidth: 54,
  boxHeight: 22,
  speedX: 8,
  speedY: 3
}

//Lamp chest rectangle
let xuwenBox04 = {
  color: 0,
  boxX: 290,
  boxY: 312,

  originX: 290,
  originY: 312,

  boxWidth: 24,
  boxHeight: 52,
  speedX: 7,
  speedY: 10
}

//Lamp belly upward triangle
let xuwenTriangle01 = {
  color: 0,
  triangleX1: 276,
  triangleY1: 392,
  triangleX2: 302,
  triangleY2: 327,
  triangleX3: 328,
  triangleY3: 392,

  originX1: 276,
  originY1: 392,
  originX2: 302,
  originY2: 327,
  originX3: 328,
  originY3: 392,

  speedX: 5,
  speedY: 5
}

//Lamp belly rectangle
let xuwenBox05 = {
  color: 0,
  boxX: 276,
  boxY: 392,

  originX: 276,
  originY: 392,

  boxWidth: 52,
  boxHeight: 26,
  speedX: 6,
  speedY: 5
}

//Lamp belly downward triangle
let xuwenTriangle02 = {
  color: 0,
  triangleX1: 276,
  triangleY1: 418,
  triangleX2: 302,
  triangleY2: 453,
  triangleX3: 328,
  triangleY3: 418,

  originX1: 276,
  originY1: 418,
  originX2: 302,
  originY2: 453,
  originX3: 328,
  originY3: 418,

  speedX: 3,
  speedY: 3,
}

//Lamp foot triangle
let xuwenTriangle03 = {
  color: 0,
  triangleX1: 267,
  triangleY1: 478,
  triangleX2: 302,
  triangleY2: 428,
  triangleX3: 337,
  triangleY3: 478,

  originX1: 267,
  originY1: 478,
  originX2: 302,
  originY2: 428,
  originX3: 337,
  originY3: 478,

  speedX: 1,
  speedY: 1
}

//Lamp foot rectangle
let xuwenBox06 = {
  color: 0,
  boxX: 264,
  boxY: 478,

  originX: 264,
  originY: 478,

  boxWidth: 76,
  boxHeight: 13,
  speedX: 3,
  speedY: 2
}

//Lamp head left minus triangle
let xuwenTriangle04 = {
  color: [200,200,240],
  triangleX1: 220,
  triangleY1: 150,
  triangleX2: 220,
  triangleY2: 270,
  triangleX3: 230,
  triangleY3: 150,

  originX1: 220,
  originY1: 150,
  originX2: 220,
  originY2: 270,
  originX3: 230,
  originY3: 150,

  speedX: 1,
  speedY: 8
}

//Lamp head right minus triangle
let xuwenTriangle05 = {
  color: [200,200,240],
  triangleX1: 380,
  triangleY1: 150,
  triangleX2: 380,
  triangleY2: 270,
  triangleX3: 370,
  triangleY3: 150,

  originX1: 380,
  originY1: 150,
  originX2: 380,
  originY2: 270,
  originX3: 370,
  originY3: 150,

  speedX: 5,
  speedY: 3
}

//Lamp cap minus rectangle
let xuwenBox07 = {
  color: [200,200,240],
  boxX: 286,
  boxY: 149,

  originX: 286,
  originY: 149,

  boxWidth: 20,
  boxHeight: 2,
  speedX: 8,
  speedY: 2
}

//Lamp shoulder left minus circle
let xuwenCircle02 = {
  color: [200,200,240],
  circleX: 275,
  circleY: 312,

  originX: 275,
  originY: 312,

  circleWidth: 30,
  circleHeight: 30,
  speedX: 5,
  speedY: 2
}

//Lamp shoulder right minus circle
let xuwenCircle03 = {
  color: [200,200,240],
  circleX: 329,
  circleY: 312,

  originX: 329,
  originY: 312,

  circleWidth: 30,
  circleHeight: 30,
  speedX: 14,
  speedY: 7
}

// let boxes = [xuwenBox01,xuwenBox02,xuwenBox03,xuwenBox04,xuwenBox05,xuwenBox06,xuwenBox07];
// let boxArray = [];
//
// let circles = [xuwenCircle01,xuwenCircle02,xuwenCircle03]
// let circleArray = [];
//
// let triangles = [xuwenTriangle01,xuwenTriangle02,xuwenTriangle03,xuwenTriangle04,xuwenTriangle05]
// let triangleArray = [];


// consolidate into 1 array
let xuwenLampShapes = [xuwenBox01,xuwenBox02,xuwenBox03,xuwenBox04,xuwenBox05,xuwenBox06,xuwenBox07, xuwenCircle01,xuwenCircle02,xuwenCircle03, xuwenTriangle01,xuwenTriangle02,xuwenTriangle03,xuwenTriangle04,xuwenTriangle05]
let xuwenArray = [];

// This is to control the time it takes to run a full cycle.
let xuwenSpeedMultiplier = 1;



// function setup() {
//   createCanvas(600, 600);
//   // speed = 0;
//   // growth = 0;
//
//   for(let i= 0; i < xuwenLampShapes.length; i++){
//
//     // This is where your speed multiplier adjusts the speedX and speedY
//     xuwenLampShapes[i].speedX = xuwenLampShapes[i].speedX * xuwenSpeedMultiplier;
//     xuwenLampShapes[i].speedY = xuwenLampShapes[i].speedY * xuwenSpeedMultiplier;
//
//     // Setting your speedX and speedY allows you to just look at the code when every shape is still
//
//     // xuwenLampShapes[i].speedX = 0;
//     // xuwenLampShapes[i].speedY = 0;
//
//     xuwenArray[i] = new XuwenLamp(xuwenLampShapes[i]);
//   }
// }

// function draw() {
//
//   background([200,200,240]);
//   // background('black');
//
//   for (let i= 0; i< xuwenArray.length; i++){
//     xuwenArray[i].drawGhostedLamp();
//     xuwenArray[i].drawBox();
//     xuwenArray[i].drawCircle();
//     xuwenArray[i].drawTriangle();
//     xuwenArray[i].tracingObject();
//   }
// }




class XuwenLamp {
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  // Method to draw ghosted lamp
  drawGhostedLamp() {
    // Method to draw box
    // In drawing a rect, I have to make sure the object is not a circle or triangle.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circleX === undefined && this.incomingShape.triangleX1 === undefined) {
      noStroke();
      fill(255, 255, 255, 50);
      rect(this.incomingShape.originX,this.incomingShape.originY, this.incomingShape.boxWidth, this.incomingShape.boxHeight);
    }

    // Method to draw circles
    // In drawing a circle, I have to make sure the object is not a box or triangle.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.boxX === undefined && this.incomingShape.triangleX1 === undefined) {
      noStroke();
      fill(255, 255, 255, 50);
      circle(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.circleWidth);
    }

    // Method to draw triangles
    // In drawing a triangles, I have to make sure the object is not a circle or box.
    // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
    if (this.incomingShape.circleX === undefined && this.incomingShape.boxX === undefined) {
      noStroke();
      fill(255, 255, 255, 50);
      triangle(this.incomingShape.originX1, this.incomingShape.originY1, this.incomingShape.originX2, this.incomingShape.originY2, this.incomingShape.originX3, this.incomingShape.originY3);
    }
  }


  // Method to draw box
  // In drawing a rect, I have to make sure the object is not a circle or triangle.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawBox() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.triangleX1 === undefined) {
      push();
      if (this.incomingShape.boxX > 600 || this.incomingShape.boxX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.boxX = this.incomingShape.boxX + this.incomingShape.speedX;
      if (this.incomingShape.boxY > 600 || this.incomingShape.boxY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.boxY = this.incomingShape.boxY + this.incomingShape.speedY;
      noStroke();
      fill(this.incomingShape.color);
      rect(this.incomingShape.boxX,this.incomingShape.boxY, this.incomingShape.boxWidth, this.incomingShape.boxHeight);
      pop();

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.boxX === this.incomingShape.originX && this.incomingShape.boxY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to draw circle
  // In drawing a circle, I have to make sure the object is not a box or triangle.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawCircle() {
    if (this.incomingShape.boxX === undefined && this.incomingShape.triangleX1 === undefined) {
      fill(this.incomingShape.color);//Black
      noStroke()

      if (this.incomingShape.circleX > width || this.incomingShape.circleX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }

      this.incomingShape.circleX = this.incomingShape.circleX + this.incomingShape.speedX;

      if (this.incomingShape.circleY > 600 || this.incomingShape.circleY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }

      this.incomingShape.circleY = this.incomingShape.circleY + this.incomingShape.speedY;
      circle(this.incomingShape.circleX, this.incomingShape.circleY, this.incomingShape.circleWidth);

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  // Method to draw triangles
  // In drawing a triangles, I have to make sure the object is not a circle or box.
  // This is done with a conditional statement. If the JS Object does not have an other the other names, then the JS Object is a rect.
  drawTriangle() {
    //Lamp belly downward triangle
    if (this.incomingShape.circleX === undefined && this.incomingShape.boxX === undefined) {
      fill(this.incomingShape.color);//Black
      noStroke()
      push()
      rotate(xuwenAngle);
      xuwenAngle = xuwenAngle + xuwenSpeed;
      if (this.incomingShape.triangleX1 > 600 || this.incomingShape.triangleX1 < 0 || this.incomingShape.triangleX2 > 600 || this.incomingShape.triangleX2 < 0 || this.incomingShape.triangleX3 > 600 || this.incomingShape.triangleX3 < 0 ) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.triangleX1 = this.incomingShape.triangleX1 + this.incomingShape.speedX;
      this.incomingShape.triangleX2 = this.incomingShape.triangleX2 + this.incomingShape.speedX;
      this.incomingShape.triangleX3 = this.incomingShape.triangleX3 + this.incomingShape.speedX;

      if (this.incomingShape.triangleY1 > 600 || this.incomingShape.triangleY1 < 0 || this.incomingShape.triangleY2 > 600 || this.incomingShape.triangleY2 < 0 || this.incomingShape.triangleY3 > 600 || this.incomingShape.triangleY3 < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.triangleY1 = this.incomingShape.triangleY1 + this.incomingShape.speedY;
      this.incomingShape.triangleY2 = this.incomingShape.triangleY2 + this.incomingShape.speedY;
      this.incomingShape.triangleY3 = this.incomingShape.triangleY3 + this.incomingShape.speedY;
      triangle(this.incomingShape.triangleX1, this.incomingShape.triangleY1, this.incomingShape.triangleX2, this.incomingShape.triangleY2, this.incomingShape.triangleX3, this.incomingShape.triangleY3);

      pop();


      // At some point, the speed and angle need to return back to 0 to get the drawing to stop. This is one method to do it.
      if (xuwenAngle.toFixed(2) > 40) {
        xuwenSpeed = 0;
        xuwenAngle = 0;
      }
      // console.log(angle.toFixed(2));

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.triangleX1 === this.incomingShape.originX1 && this.incomingShape.triangleY1 === this.incomingShape.originY1 && (xuwenAngle % 360) === 0) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
        xuwenSpeed = 0;
      }
    }
  }

  tracingObject() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.triangleX1 === undefined) {
      stroke(255, 255, 255, 50)
      line(this.incomingShape.boxX, 0, this.incomingShape.boxX, height)
      line(0, this.incomingShape.boxY, 600, this.incomingShape.boxY)
    }

    if (this.incomingShape.triangleX === undefined && this.incomingShape.boxX === undefined) {
      stroke(255, 255, 255, 50)
      line(this.incomingShape.circleX, 0, this.incomingShape.circleX, height)
      line(0, this.incomingShape.circleY, width, this.incomingShape.circleY)
    }

    if (this.incomingShape.circleX === undefined && this.incomingShape.boxX === undefined) {
      stroke(255, 255, 255, 50)
      line(this.incomingShape.triangleX2, 0, this.incomingShape.triangleX2, height)
      line(0, (this.incomingShape.triangleY2+this.incomingShape.triangleY1)/2, width, (this.incomingShape.triangleY1+this.incomingShape.triangleY2)/2)
    }
  }

  resetMovement() {
    if (this.incomingShape.circleX === undefined && this.incomingShape.triangleX1 === undefined) {
      if (this.incomingShape.boxX === this.incomingShape.originX && this.incomingShape.boxY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.boxX === undefined && this.incomingShape.triangleX1 === undefined) {
      if (this.incomingShape.circleX === this.incomingShape.originX && this.incomingShape.circleY === this.incomingShape.originY) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }
    if (this.incomingShape.circleX === undefined && this.incomingShape.boxX === undefined) {
      if (this.incomingShape.speedX === 0) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
        xuwenSpeed = 0.005;
        xuwenAngle = 0;
      }
    }

  }


}
