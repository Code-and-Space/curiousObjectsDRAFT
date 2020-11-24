// WHITE RECTANGLE BACKGROUND
let camiloRect01 = {
  strokeweight: 0,
  color: 255,
  rectX: 190.214 + 109.786,
  // rectX: 190.214,
  rectY: 193.074 + 56.2805,
  originX: 190.214 + 109.786,
  originY: 193.074 + 56.2805,
  rectWidth: 409.786 - 190.214,
  rectHeight: 305.635 - 193.074,
  rectTl: 0,
  rectTr: 0,
  rectBl: 0,
  rectBr: 0,
  speedX: -1,
  speedY: 1,
}

//BLACK TRIANGLES
// TOP RIGHT CORNER BLACK TRIANGLE
let camiloTriangle01 = {
  color: 0,
  strokeweight: 0,
  triX1: 409.786,
  triY1: 193.074,

  originX1: 409.786,
  originY1: 193.074,

  triX2: 363.640,
  triY2: 193.074,

  originX2: 363.640,
  originY2: 193.074,

  triX3: 409.786,
  triY3: 204.635,

  originX3: 409.786,
  originY3: 204.635,

  speedX: -3,
  speedY: 1,
}

// BOTTOM RIGHT CORNER BLACK TRIANGLE
let camiloTriangle02 = {
  color: 0,
  strokeweight: 0,
  triX1: 409.786,
  triY1: 294.355,
  triX2: 363.640,
  triY2: 305.635,
  triX3: 409.786,
  triY3: 305.635,

  originX1: 409.786,
  originY1: 294.355,
  originX2: 363.640,
  originY2: 305.635,
  originX3: 409.786,
  originY3: 305.635,

  speedX: -4,
  speedY: 1,
}

// TOP LEFT CORNER BLACK TRIANGLE
let camiloTriangle03 = {
  color: 0,
  strokeweight: 0,
  triX1: 236.360,
  triY1: 193.074,
  triX2: 190.214,
  triY2: 204.355,
  triX3: 190.214,
  triY3: 193.074,

  originX1: 236.360,
  originY1: 193.074,
  originX2: 190.214,
  originY2: 204.355,
  originX3: 190.214,
  originY3: 193.074,

  speedX: -2,
  speedY: 1,
}

// BOTTOM LEFT CORNER BLACK TRIANGLE
let camiloTriangle04 = {
  color: 0,
  strokeweight: 0,
  triX1: 190.214,
  triY1: 294.355,
  triX2: 236.360,
  triY2: 305.635,
  triX3: 190.214,
  triY3: 305.635,

  originX1: 190.214,
  originY1: 294.355,
  originX2: 236.360,
  originY2: 305.635,
  originX3: 190.214,
  originY3: 305.635,

  speedX: -1,
  speedY: 1,
}

// BLACK VERTICAL LINE CONNECTING TRIANGLE TIPS
// LINE 1
let camiloLine01 = {
  color: 0,
  strokeweight: 1.5,
  lineX1:236.360,
  lineY1:193.074,
  lineX2:236.360,
  lineY2:305.635,

  originX1:236.360,
  originY1:193.074,
  originX2:236.360,
  originY2:305.635,

  speedX: -1,
  speedY: 1,
}

// LINE 2
let camiloLine02 = {
  color: 0,
  strokeweight: 1.5,
  lineX1:363.640,
  lineY1:193.074,
  lineX2:363.640,
  lineY2:305.635,

  originX1:363.640,
  originY1:193.074,
  originX2:363.640,
  originY2:305.635,

  speedX: -1,
  speedY: 1,
}

// ARCS WITH BLACK FILL
// ARC 1
let camiloArc01 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 0,
  arcX: 300,
  arcY: 129.434,

  originX: 300,
  originY: 129.434,


  arcW: 180,
  arcH: 180,
  arcStart: 3.14159/4,
  arcEnd: 3.14159 - 3.14159/4,
  speedX: -1,
  speedY: 1,
}

// ARC 2
let camiloArc02 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 0,
  arcX: 300,
  arcY: 369.275,

  originX: 300,
  originY: 369.275,

  arcW: 180,
  arcH: 180,
  arcStart: 3.14159+3.14159/4,
  arcEnd: -3.14159/4,
  speedX: -30,
  speedY: 1,
}

// BASE
let camiloTriangle05 = {
  color: 255,
  strokeweight: 0,
  triX1: 269.381,
  triY1: 569.566,
  triX2: 300,
  triY2: 30.434,
  triX3: 330.619,
  triY3: 569.566,

  originX1: 269.381,
  originY1: 569.566,
  originX2: 300,
  originY2: 30.434,
  originX3: 330.619,
  originY3: 569.566,

  speedX: -30,
  speedY: 1,
}

// REDRAW ARCS WITH NO FILL
// ARC 1
let camiloArc03 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 1.5,
  arcX: 300,
  arcY: 129.434,

  originX: 300,
  originY: 129.434,

  arcW: 180,
  arcH: 180,
  arcStart: 3.14159/4,
  arcEnd: 3.14159 - 3.14159/4,
  speedX: -3,
  speedY: 1,
}

// ARC 2
let camiloArc04 = {
  fill: 0,
  strokecol: 0,
  strokeweight: 1.5,
  arcX: 300,
  arcY: 369.275,

  originX: 300,
  originY: 369.275,

  arcW: 180,
  arcH: 180,
  arcStart: 3.14159+3.14159/4,
  arcEnd: -3.14159/4,
  speedX: -1,
  speedY: 1,
}

// BOTTOM RECTANGLE W RADIUSED CORNERS
let camiloRect02 = {
  stroke: 0,
  strokeweight: 3,
  color: 255,
  // rectX: 264.8815 + 109.786,
  rectX: 300,
  // rectY: 551.566 + 56.2805,
  rectY: 551.566,

  // originX: 264.8815 + 109.786,
  originX: 300,
  // originY: 551.566 + 56.2805,
  originY: 551.566,

  rectWidth: 70.237,
  rectHeight: 36,
  rectTl: 10,
  rectTr: 10,
  rectBl: 10,
  rectBr: 10,
  speedX: -5,
  speedY: 1,
}

// THINNER RECTANGLE W RADIUSED CORNERS
let camiloRect03 = {
  stroke: 0,
  strokeweight: 3,
  color: 255,
  // rectX: 266.831 + 109.786,
  rectX: 300,
  // rectY: 480.318 + 56.2805,
  rectY: 480.318,

  // originX: 266.831 + 109.786,
  originX: 300,
  // originY: 480.318 + 56.2805,
  originY: 480.318,

  rectWidth: 66.339,
  rectHeight: 15,
  rectTl: 10,
  rectTr: 10,
  rectBl: 10,
  rectBr: 10,
  speedX: -10,
  speedY: 1,
}

// WHITE BALL AT TOP
let camiloCirc01 = {
  strokecol: 0,
  strokeweight: 3,
  color: 255,

  circX: 300,
  circY: 120.434,
  // circY: 120,


  originX: 300,
  originY: 120.434,

  circD: 180,
  speedX: 5,
  speedY: 14,
}

// BLACK LINE THROUGH WHITE BALL
let camiloLine03 = {
  color: 0,
  strokeweight: 1.5,
  lineX1:210,
  lineY1:120.434,
  lineX2:390,
  lineY2:120.434,

  originX1:210,
  originY1:120.434,
  originX2:390,
  originY2:120.434,

  speedX: -80,
  speedY: 1,
}


let camiloShapes = [camiloRect01, camiloTriangle01, camiloTriangle02, camiloTriangle03, camiloTriangle04, camiloLine01, camiloLine02, camiloArc01, camiloArc02, camiloTriangle05, camiloArc03, camiloArc04, camiloRect02, camiloRect03, camiloCirc01, camiloLine03]
let camiloShapesPosition = [];

let speedCamiloMultiplier = 1;

// function setup() {
//
//   createCanvas(600, 600);
//   rectMode(CENTER);
//   // angleMode(RADIANS)
//
//   for (i=0; i < camiloShapes.length; i++) {
//     camiloShapes[i].speedX = camiloShapes[i].speedX * speedCamiloMultiplier;
//     camiloShapes[i].speedY = camiloShapes[i].speedY * speedCamiloMultiplier;
//     // camiloShapes[i].speedX = 0;
//     // camiloShapes[i].speedY = 0;
//     camiloShapesPosition[i] = new CamiloKendama(camiloShapes[i]);
//   }
// }
//
// function draw() {
//   background(0);
//
//
//   noStroke();
//   for (i=0; i < camiloShapesPosition.length; i++) {
//
//     camiloShapesPosition[i].drawKendamaGhosted();
//
//     camiloShapesPosition[i].moveRectangle();
//     camiloShapesPosition[i].tracingRectangles();
//
//     camiloShapesPosition[i].moveCircle();
//     camiloShapesPosition[i].tracingCircles();
//
//     camiloShapesPosition[i].moveArc();
//     camiloShapesPosition[i].tracingArcs();
//
//     camiloShapesPosition[i].moveLine();
//     camiloShapesPosition[i].tracingLines();
//
//
//     camiloShapesPosition[i].moveTriangle();
//     camiloShapesPosition[i].tracingTriangles();
//   }
// }


class CamiloKendama {
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  drawKendamaGhosted() {

    // rectangles
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.circX === undefined && this.incomingShape.lineX1 === undefined) {
      strokeWeight(this.incomingShape.strokeweight);
      fill(255, 255, 255, 50);
      rect(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.rectTl, this.incomingShape.rectTr, this.incomingShape.rectBl, this.incomingShape.rectBr);
    }

    // circles
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      stroke(255, 255, 255, 50)
      strokeWeight(this.incomingShape.strokeweight);
      fill(255, 255, 255, 50);
      circle(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.circD)
    }

    // arcs
    if (this.incomingShape.triX1 === undefined && this.incomingShape.circX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      if (this.incomingShape.strokeweight === 0) {
        fill(255, 255, 255, 50);
        noStroke();
        // strokeWeight(this.incomingShape.strokeweight);
        push();

        arc(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.arcW, this.incomingShape.arcH, this.incomingShape.arcStart, this.incomingShape.arcEnd)
        pop();
      } else {

        noFill();
        stroke(255, 255, 255, 50);
        strokeWeight(this.incomingShape.strokeweight);
        push()

        arc(this.incomingShape.originX, this.incomingShape.originY, this.incomingShape.arcW, this.incomingShape.arcH, this.incomingShape.arcStart, this.incomingShape.arcEnd)
        pop();
      }
    }

    // line
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.arcX === undefined) {
      strokeWeight(this.incomingShape.strokeweight);
      stroke(255, 255, 255, 50);
      line(this.incomingShape.originX1, this.incomingShape.originY1, this.incomingShape.originX2, this.incomingShape.originY2);
    }


    // triangles
    if (this.incomingShape.circX === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      strokeWeight(this.incomingShape.strokeweight);
      fill(255, 255, 255, 50);
      push()

      triangle(this.incomingShape.originX1, this.incomingShape.originY1, this.incomingShape.originX2, this.incomingShape.originY2, this.incomingShape.originX3, this.incomingShape.originY3);
      pop();
    }

  }

  moveRectangle() {
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.circX === undefined && this.incomingShape.lineX1 === undefined) {
      strokeWeight(this.incomingShape.strokeweight);
      fill(this.incomingShape.color);
      push();
      //MOVE X
      if (this.incomingShape.rectX > 600 || this.incomingShape.rectX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.rectX = this.incomingShape.rectX + this.incomingShape.speedX;

      //MOVE Y
      if (this.incomingShape.rectY > 600 || this.incomingShape.rectY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.rectY = this.incomingShape.rectY + this.incomingShape.speedY;

      rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight, this.incomingShape.rectTl, this.incomingShape.rectTr, this.incomingShape.rectBl, this.incomingShape.rectBr);
      pop();

    }
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.circX === undefined && this.incomingShape.lineX1 === undefined) {

      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.rectX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.rectY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }
  tracingRectangles() {
    if (this.incomingShape.rectX) {
      strokeWeight(1);
      stroke("red");
      line(this.incomingShape.rectX, 0, this.incomingShape.rectX, height)
      line(0, this.incomingShape.rectY, height, this.incomingShape.rectY)
    }
  }

  moveCircle() {
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      stroke(this.incomingShape.strokecol)
      strokeWeight(this.incomingShape.strokeweight);
      fill(this.incomingShape.color);

      if (this.incomingShape.circX > 600 || this.incomingShape.circX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.circX = this.incomingShape.circX + this.incomingShape.speedX;
      //MOVE X
      if (this.incomingShape.circY > 600 || this.incomingShape.circY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY * -1;
      }
      this.incomingShape.circY = this.incomingShape.circY + this.incomingShape.speedY;

      push();
      translate(this.incomingShape.circX, this.incomingShape.circY)
      circle(0, 0, this.incomingShape.circD)
      pop();

    }
    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (this.incomingShape.circX === this.incomingShape.originX && parseInt(this.incomingShape.circY) === parseInt(this.incomingShape.originY)) {
      this.incomingShape.speedX = 0;
      this.incomingShape.speedY = 0;
    }
  }

  //TRACE
  tracingCircles() {
    if (this.incomingShape.circX) {
      strokeWeight(1);
      stroke("blue");
      line(this.incomingShape.circX, 0, this.incomingShape.circX, height)
      line(0, this.incomingShape.circY, height, this.incomingShape.circY)
    }
  }


  moveArc() {
    if (this.incomingShape.triX1 === undefined && this.incomingShape.circX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      if (this.incomingShape.strokeweight === 0) {
        fill(this.incomingShape.fill);
        noStroke();
        // strokeWeight(this.incomingShape.strokeweight);
        push();

        //MOVE X
        if (this.incomingShape.arcY > 600 || this.incomingShape.arcY < 0) {
          this.incomingShape.speedY = this.incomingShape.speedY * -1;
          // console.log('test')
        }
        this.incomingShape.arcY = this.incomingShape.arcY + this.incomingShape.speedY;

        //MOVE Y
        if (this.incomingShape.arcX > 600 || this.incomingShape.arcX < 0) {
          this.incomingShape.speedX = this.incomingShape.speedX * -1;
        }
        this.incomingShape.arcX = this.incomingShape.arcX + this.incomingShape.speedX;

        arc(this.incomingShape.arcX, this.incomingShape.arcY, this.incomingShape.arcW, this.incomingShape.arcH, this.incomingShape.arcStart, this.incomingShape.arcEnd)
        pop();
      } else {

        noFill();
        stroke(this.incomingShape.strokecol);
        strokeWeight(this.incomingShape.strokeweight);
        push()

        //MOVE X
        if (this.incomingShape.arcY > 600 || this.incomingShape.arcY < 0) {
          this.incomingShape.speedY = this.incomingShape.speedY * -1;
          // console.log('test')
        }
        this.incomingShape.arcY = this.incomingShape.arcY + this.incomingShape.speedY;

        //MOVE Y
        if (this.incomingShape.arcX > 600 || this.incomingShape.arcX < 0) {
          this.incomingShape.speedX = this.incomingShape.speedX * -1;
        }
        this.incomingShape.arcX = this.incomingShape.arcX + this.incomingShape.speedX;

        arc(this.incomingShape.arcX, this.incomingShape.arcY, this.incomingShape.arcW, this.incomingShape.arcH, this.incomingShape.arcStart, this.incomingShape.arcEnd)
        pop();
      }
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.arcX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.arcY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = 0;
        this.incomingShape.speedY = 0;
      }
    }
  }

  //TRACE
  tracingArcs() {
    if (this.incomingShape.arcX) {
      strokeWeight(1);
      stroke("yellow");
      line(this.incomingShape.arcX, 0, this.incomingShape.arcX, height);
      line(0, this.incomingShape.arcY, width, this.incomingShape.arcY);
    }
  }


  moveLine() {
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.circX === undefined) {
      strokeWeight(this.incomingShape.strokeweight);
      stroke(this.incomingShape.color);
      push()

      //MOVE X
      if (this.incomingShape.lineX1 > width || this.incomingShape.lineX1 < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.lineX1 = this.incomingShape.lineX1 + this.incomingShape.speedX;

      line(this.incomingShape.lineX1, this.incomingShape.lineY1, this.incomingShape.lineX2, this.incomingShape.lineY2);
      pop();
    }
    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (parseInt(this.incomingShape.lineX1) === parseInt(this.incomingShape.originX1)) {
      this.incomingShape.speedX = 0;
      this.incomingShape.speedY = 0;
    }

  }

  //TRACE
  tracingLines() {
    if (this.incomingShape.lineX1) {

      strokeWeight(1);
      stroke("green");
      line(this.incomingShape.lineX1, 0, this.incomingShape.lineX1, height);
      line(0, this.incomingShape.lineY1, width, this.incomingShape.lineY1);
    }
  }

  moveTriangle() {
    if (this.incomingShape.circX === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      strokeWeight(this.incomingShape.strokeweight);
      fill(this.incomingShape.color);
      // push()
      // MOVE X
      if (this.incomingShape.triX1 > width || this.incomingShape.triX1 < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX * -1;
      }
      this.incomingShape.triX1 = this.incomingShape.triX1 + this.incomingShape.speedX;

      triangle(this.incomingShape.triX1, this.incomingShape.triY1, this.incomingShape.triX2, this.incomingShape.triY2, this.incomingShape.triX3, this.incomingShape.triY3);
      // pop();
    }
    // Below, if the values are equal again, then stop (speedX and speedY = 0).
    if (parseInt(this.incomingShape.triX1) === parseInt(this.incomingShape.originX1)) {
      this.incomingShape.speedX = 0;
      this.incomingShape.speedY = 0;
    }
  }

  //TRACE
  tracingTriangles() {
    if (this.incomingShape.triX1) {
      strokeWeight(1);
      stroke("purple");
      line(this.incomingShape.triX1, 0, this.incomingShape.triX1, height);
      line(0, this.incomingShape.triY1, width, this.incomingShape.triY1);
    }
  }

  resetMovement() {
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.circX === undefined && this.incomingShape.lineX1 === undefined) {
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.rectX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.rectY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    // reset circle
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (this.incomingShape.circX === this.incomingShape.originX && parseInt(this.incomingShape.circY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    // reset arc
    if (this.incomingShape.triX1 === undefined && this.incomingShape.circX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.lineX1 === undefined) {
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.arcX) === parseInt(this.incomingShape.originX) && parseInt(this.incomingShape.arcY) === parseInt(this.incomingShape.originY)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }
    }

    // reset line
    if (this.incomingShape.triX1 === undefined && this.incomingShape.arcX === undefined && this.incomingShape.rectX === undefined && this.incomingShape.circX === undefined) {
      // Below, if the values are equal again, then stop (speedX and speedY = 0).
      if (parseInt(this.incomingShape.lineX1) === parseInt(this.incomingShape.originX1)) {
        this.incomingShape.speedX = getRandomInt(-10, 10);
        this.incomingShape.speedY = getRandomInt(-10, 10);
      }


    }
  }
}
