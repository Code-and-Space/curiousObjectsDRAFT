const iphone = {
  innerScreenRectangle: {
    type: "rectangle",
    color: 0, // Black Color
    trackerColor: 'rgb(67, 59, 246) ',
    posX: 160,
    posY: 130,

    originX: 160,
    originY: 130,

    speedX: (Math.random() * 0.90),
    speedY: (Math.random() * 0.90),
    width: 280,
    height: 320
  },

  outerBodyRectangle: {
    type: "angled-rectangle",
    color: 255, // White Color
    trackerColor: 'rgb(193, 253, 111)',
    posX: 150,
    posY: 50,

    originX: 150,
    originY: 50,

    speedX: (Math.random() * 0.90),
    speedY: (Math.random() * 0.90),
    width: 300,
    height: 500,
    arcRadius: 25
  },

  thumbprintScannerCircle: {
    type: "circle",
    color: 255, // White Color
    trackerColor: 'rgb(203, 53, 175)',
    posX: 300,
    posY: 500,

    originX: 300,
    originY: 500,

    speedX: (Math.random() * 0.90),
    speedY: (Math.random() * 0.90),
    width: 60,
    height: 60
  },

  topNotchRectangle: {
    type: "rectangle",
    color: 255, // White Color
    trackerColor: 'rgb(92, 165, 221)',
    posX: 275,
    posY: 90,

    originX: 275,
    originY: 90,

    speedX: (Math.random() * 0.90),
    speedY: (Math.random() * 0.90),
    width: 50,
    height: 10
  }
};

let iPhoneComponents = [iphone.outerBodyRectangle, iphone.topNotchRectangle, iphone.thumbprintScannerCircle, iphone.innerScreenRectangle];
let iPhoneComponentsClassArray = [];

let anubhaSpeedMultiplier = 5;

// function setup() {
//   createCanvas(600, 600);
//   for (let i = 0; i < iPhoneComponents.length; i++) {
//     // iPhoneComponents[i].speedX = 0;
//     // iPhoneComponents[i].speedY = 0;
//
//     iPhoneComponents[i].speedX = iPhoneComponents[i].speedX * anubhaSpeedMultiplier;
//     iPhoneComponents[i].speedY = iPhoneComponents[i].speedY * anubhaSpeedMultiplier;
//
//     iPhoneComponentsClassArray[i] = new IPhoneMove(iPhoneComponents[i]);
//   }
// }

// function draw() {
//   background(188, 143, 143); // Light Brown Colored Background
//   strokeWeight(2);
//   stroke(24);
//
//
//   // Draw iPhone Components
//   for (let i = 0; i < iPhoneComponentsClassArray.length; i++) {
//     iPhoneComponentsClassArray[i].drawGhostedPhone();
//     iPhoneComponentsClassArray[i].drawShape();
//     iPhoneComponentsClassArray[i].animateShape();
//     iPhoneComponentsClassArray[i].showTrackers();
//   }
// }

class IPhoneMove {
  constructor(incomingShape) {
    this.shapeProperties = incomingShape;
  }

  drawGhostedPhone() {
    if (this.shapeProperties.type === "circle") {
      // noStroke();
      fill(255, 255, 255, 20);
      ellipse(this.shapeProperties.originX, this.shapeProperties.originY, this.shapeProperties.width, this.shapeProperties.height);
    } else if (this.shapeProperties.type === "rectangle") {
      // noStroke();
      fill(255, 255, 255, 20);
      rect(this.shapeProperties.originX, this.shapeProperties.originY, this.shapeProperties.width, this.shapeProperties.height);
    } else if (this.shapeProperties.type === "angled-rectangle") {
      // noStroke();
      fill(255, 255, 255, 20);
      rect(this.shapeProperties.originX, this.shapeProperties.originY, this.shapeProperties.width, this.shapeProperties.height, this.shapeProperties.arcRadius);
    }
  }

  drawShape() {
    if (this.shapeProperties.type === "circle") {
      this.drawCircle();
    } else if (this.shapeProperties.type === "rectangle") {
      this.drawRectangle();
    } else if (this.shapeProperties.type === "angled-rectangle") {
      this.drawAngledRectangle();
    }
  }

  showTrackers() {
    if (this.shapeProperties.type === "circle") {
      this.showCircleTrackers();
    } else {
      this.showRectangleTrackers();
    }
  }

  drawAngledRectangle() {
    fill(this.shapeProperties.color);
    rect(this.shapeProperties.posX, this.shapeProperties.posY, this.shapeProperties.width, this.shapeProperties.height, this.shapeProperties.arcRadius);
  }

  drawRectangle() {
    fill(this.shapeProperties.color);
    rect(this.shapeProperties.posX, this.shapeProperties.posY, this.shapeProperties.width, this.shapeProperties.height);
  }

  drawCircle() {
    fill(this.shapeProperties.color);
    ellipse(this.shapeProperties.posX, this.shapeProperties.posY, this.shapeProperties.width, this.shapeProperties.height);
  }

  animateShape() {
    push();
    if (this.shapeProperties.posX > ( 600 - this.shapeProperties.width ) || this.shapeProperties.posX < 0) {
      this.shapeProperties.speedX = this.shapeProperties.speedX * -1;
    }
    if (this.shapeProperties.posY > ( 600 - this.shapeProperties.height ) || this.shapeProperties.posY < 0) {
      this.shapeProperties.speedY = this.shapeProperties.speedY * -1;
    }
    this.shapeProperties.posX = this.shapeProperties.posX + this.shapeProperties.speedX;
    this.shapeProperties.posY = this.shapeProperties.posY + this.shapeProperties.speedY;

    translate(this.shapeProperties.posX, this.shapeProperties.posY, 50);

    if (parseInt(this.shapeProperties.posX) === this.shapeProperties.originX  && parseInt(this.shapeProperties.posY) === this.shapeProperties.originY) {
      this.shapeProperties.speedX = 0;
      this.shapeProperties.speedY = 0;
    }
    pop();
  }

  resetMovement() {
    this.shapeProperties.speedX = Math.random() * 5;
    this.shapeProperties.speedY = Math.random() * 5;
  }

  showRectangleTrackers() {
    stroke(this.shapeProperties.trackerColor);
    line(this.shapeProperties.posX + this.shapeProperties.width / 2, 0, this.shapeProperties.posX + this.shapeProperties.width / 2, 600);
    line(0, this.shapeProperties.posY + this.shapeProperties.height / 2, 600, this.shapeProperties.posY + this.shapeProperties.height / 2);
  }

  showCircleTrackers() {
    push();
    stroke(this.shapeProperties.trackerColor);
    line(this.shapeProperties.posX, 0, this.shapeProperties.posX, 600);
    line(0, this.shapeProperties.posY, 600, this.shapeProperties.posY);
    pop();
  }
}
