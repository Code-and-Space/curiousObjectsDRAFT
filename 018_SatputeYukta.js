let ellipse01 = {
  ellipseX: 300,
  ellipseY: 220,
  ellipseWidth: 150,
  ellipseHeight: 150,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(204, 0, 0)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}


let ellipse02 = {
  ellipseX: 300,
  ellipseY: 220,
  ellipseWidth: 140,
  ellipseHeight: 140,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(255, 255, 255)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}


let ellipse03 = {
  ellipseX: 222,
  ellipseY: 225,
  ellipseWidth: 70,
  ellipseHeight: 70,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(204, 0, 0)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse04 = {
  ellipseX: 370,
  ellipseY: 225,
  ellipseWidth: 70,
  ellipseHeight: 70,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(204, 0, 0)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse05 = {
  ellipseX: 10,
  ellipseY: 200,
  ellipseWidth: 7,
  ellipseHeight: 170,
  ellipseStrokeWeight: 1.5,
  ellipseStroke: 51,
  ellipseFill: 'rgb(204, 0, 0)',
  transX: 180,
  transY: 200,
  ellipseRotate: -208
}

let ellipse06 = {
  ellipseX: 10,
  ellipseY: 0,
  ellipseWidth: 7,
  ellipseHeight: 123,
  ellipseStrokeWeight: 1.5,
  ellipseStroke: 51,
  ellipseFill: 'rgb(204, 0, 0)',
  transX: 280,
  transY: 370,
  ellipseRotate: -210
}


let ellipse07 = {
  ellipseX: 300,
  ellipseY: 300,
  ellipseWidth: 200,
  ellipseHeight: 200,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(204, 0, 0)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0,

  speed: 2
}

let ellipse08 = {
  ellipseX: 300,
  ellipseY: 300,
  ellipseWidth: 180,
  ellipseHeight: 180,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(255, 255, 255)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0,

  speed: 2
}

let ellipse09 = {
  ellipseX: 300,
  ellipseY: 300,
  ellipseWidth: 10,
  ellipseHeight: 10,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(251, 226, 23)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse10 = {
  ellipseX: 233,
  ellipseY: 300,
  ellipseWidth: 7,
  ellipseHeight: 7,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(251, 226, 23)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse11 = {
  ellipseX: 370,
  ellipseY: 300,
  ellipseWidth: 7,
  ellipseHeight: 7,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(251, 226, 23)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse12 = {
  ellipseX: 300,
  ellipseY: 230,
  ellipseWidth: 7,
  ellipseHeight: 7,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(251, 226, 23)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse13 = {
  ellipseX: 300,
  ellipseY: 370,
  ellipseWidth: 7,
  ellipseHeight: 7,
  ellipseStrokeWeight: 0.8,
  ellipseStroke: 51,
  ellipseFill: 'rgb(251, 226, 23)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse14 = {
  ellipseX: 330,
  ellipseY: 300,
  ellipseWidth: 67,
  ellipseHeight: 3.5,
  ellipseStrokeWeight: 0,
  ellipseStroke: 51,
  ellipseFill: 'rgb(0, 0, 0)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let ellipse15 = {
  ellipseX: 300,
  ellipseY: 270,
  ellipseWidth: 4,
  ellipseHeight: 70,
  ellipseStrokeWeight: 0,
  ellipseStroke: 51,
  ellipseFill: 'rgb(0, 0, 0)',
  transX: 0,
  transY: 0,
  ellipseRotate: 0
}

let line01 = {
  lineStrokeWeight: 5,
  lineStroke: 51,
  lineX1: 500,
  lineY1: 420,
  lineX2: 100,
  lineY2: 420
}

let yuktaShapes = [ellipse01, ellipse02, ellipse03, ellipse04, ellipse05, ellipse06, ellipse07, ellipse08, ellipse09, ellipse10, ellipse11, ellipse12, ellipse13, ellipse14, ellipse15, line01]
let yuktaShapesArray = [];



function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < yuktaShapes.length; i++) {
    yuktaShapesArray[i] = new YuktaClock(yuktaShapes[i]);
  }


}

function draw() {
  background(250);

  for (let i = 0; i < yuktaShapesArray.length; i++) {
    yuktaShapesArray[i].drawCircle();
    yuktaShapesArray[i].drawLine();
  }
}

class YuktaClock {
  constructor(incomingShape){
    this.incomingShape = incomingShape;
  }

  drawCircle() {
    if (this.incomingShape.lineX1 === undefined) {
      if (this.incomingShape.speed === undefined) {

        strokeWeight(this.incomingShape.ellipseStrokeWeight);
        stroke(this.incomingShape.ellipseStroke);
        fill(color(this.incomingShape.ellipseFill));
        push();
        translate(this.incomingShape.transX, this.incomingShape.transY);
        rotate(this.incomingShape.ellipseRotate);
        ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseWidth, this.incomingShape.ellipseHeight);
        pop();
      } else {
        if (this.incomingShape.ellipseWidth > 600 || this.incomingShape.ellipseWidth < 0) {
          this.incomingShape.speed = this.incomingShape.speed*-1;
        }
        this.incomingShape.ellipseWidth = this.incomingShape.ellipseWidth + this.incomingShape.speed;

        strokeWeight(this.incomingShape.ellipseStrokeWeight);
        stroke(this.incomingShape.ellipseStroke);
        fill(color(this.incomingShape.ellipseFill));
        push();
        translate(this.incomingShape.transX, this.incomingShape.transY);
        rotate(this.incomingShape.ellipseRotate);
        ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseWidth, this.incomingShape.ellipseWidth);
        pop();
      }
    }
  }

  drawLine() {
    if (this.incomingShape.ellipseX === undefined) {
      strokeWeight(this.incomingShape.lineStrokeWeight);
      stroke(this.incomingShape.lineStroke);
      line(this.incomingShape.lineX1, this.incomingShape.lineY1, this.incomingShape.lineX2, this.incomingShape.lineY2);
    }
  }


}
