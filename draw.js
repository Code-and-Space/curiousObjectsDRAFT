let scaleFactor = 0.34;

function draw() {
  background(200);

  //Draw Background Grid
  stroke(255, 255, 255, 50)
  strokeWeight(1);
  for (i = 0; i < width; i++) {
    line(0, i*200, width, i*200);
  }
  for (i = 0; i < height; i++) {
    line(i*200, 0, i*200, height);
  }



  // 001_AgrawalAnubha
  push();
  rectMode(CORNER);
  noStroke();
  translate(0, 0);
  scale(scaleFactor);
  fill(188, 143, 143); // Light Brown Colored Background
  rect(0, 0, 600, 600)
  strokeWeight(2);
  stroke(24);
  // Draw iPhone Components
  for (let i = 0; i < iPhoneComponentsClassArray.length; i++) {
    iPhoneComponentsClassArray[i].drawGhostedPhone();
    iPhoneComponentsClassArray[i].drawShape();
    iPhoneComponentsClassArray[i].animateShape();
    iPhoneComponentsClassArray[i].showTrackers();
  }
  pop();



  // 002_BarzidehJosh
  push();
  rectMode(CORNER);
  translate(200, 0);
  scale(scaleFactor);

  fill(188,143,143);
  rect(0, 0, 600, 600)
  for (let i = 0; i < joshShapeArray.length; i++) {
    joshShapeArray[i].drawBottleGhosted();
    joshShapeArray[i].drawCircle();
    joshShapeArray[i].moveCircle();
    joshShapeArray[i].drawBox();
    joshShapeArray[i].moveRect();
    // joshShapeArray[i].trackingLines();
  }
  pop();


  // 003_BeerseTyler
  push();
  rectMode(CORNER);
  translate(400, 0);
  scale(scaleFactor);

  noStroke();
  fill(0, 102, 204);
  rect(0, 0, 600, 600)

  for (let i = 0; i < tylerShapesArray.length; i++) {
    tylerShapesArray[i].drawGhostedGlass();
    tylerShapesArray[i].moveRect();
    tylerShapesArray[i].moveCircle();
    // tylerShapesArray[i].traceShapes();
  }
  pop();


  // 004_ClearyThomas
  push();
  rectMode(CORNER);
  translate(600, 0);
  scale(scaleFactor);

  noStroke();
  fill(220);
  rect(0, 0, 600, 600)

  for (let i = 0; i < tomShapes01.length; i++) {
    tomShapeArray01[i].drawGhostedMug();
    tomShapeArray01[i].drawBox();
    tomShapeArray01[i].drawCircle();
    tomShapeArray01[i].drawArc();
    tomShapeArray01[i].moveShape();
    tomShapeArray01[i].traceObject();
  }

  pop();


  // 005_CopeteCamilo

  push();
  translate(800, 0);
  scale(scaleFactor);

  noStroke();
  fill(0);
  rect(0, 0, 600, 600)

  rectMode(CENTER);
  for (i=0; i < camiloShapesPosition.length; i++) {
    camiloShapesPosition[i].drawKendamaGhosted();
    camiloShapesPosition[i].moveRectangle();
    // camiloShapesPosition[i].tracingRectangles();

    camiloShapesPosition[i].moveCircle();
    // camiloShapesPosition[i].tracingCircles();

    camiloShapesPosition[i].moveArc();
    // camiloShapesPosition[i].tracingArcs();

    camiloShapesPosition[i].moveLine();
    // camiloShapesPosition[i].tracingLines();

    camiloShapesPosition[i].moveTriangle();
    // camiloShapesPosition[i].tracingTriangles();
  }
  pop();



  // 006_CornetAntoine

  push();
  angleMode(RADIANS);
  translate(0, 200);
  scale(scaleFactor);

  noStroke();
  fill(255);
  rect(0, 0, 600, 600)
  fill(0);

  for (let i=0; i < antoineShapesArray.length; i++) { // your array name is rectangles, not boxes
    antoineShapesArray[i].drawGhostedDrone();
    antoineShapesArray[i].drawbox(); // AC Note: you're missing parenthesis
    antoineShapesArray[i].drawtriangle();
    antoineShapesArray[i].drawline();
    antoineShapesArray[i].drawcircle();
    antoineShapesArray[i].drawellipse();

    // antoineShapesArray[i].tracingBox();
    // antoineShapesArray[i].tracingCircle();

  }
  pop();




  // 007_DebasSonali


  push();
  translate(200, 200);
  scale(scaleFactor);

  noStroke();
  fill(0);
  rect(0, 0, 600, 600)

  for (i = 0; i < sonaliBoxes.length; i++) {
    sonaliBoxPosition[i].drawGhostedSanitizer();
    sonaliBoxPosition[i].moveBox();

    // sonaliBoxPosition[i].trackingLines();
  }
  pop();




  // 008_DiepDuong

  push();
  translate(400, 200);
  scale(scaleFactor);

  noStroke();
  fill(51);
  rect(0, 0, 600, 600)

  for (let i = 0; i < tonyShapesArray.length; i++){
    tonyShapesArray[i].drawGhostedWatch();
    tonyShapesArray[i].drawRect();
    tonyShapesArray[i].drawCircle();
  }
  pop();


  // 009_HernandezYaliana



  push();
  translate(600, 200);
  scale(scaleFactor);

  noStroke();
  fill(228,237,239);
  rect(0, 0, 600, 600)

  rectMode(CENTER)
  for (i=0; i < yalianaShapesArray.length; i++) {
    yalianaShapesArray[i].drawLampGhosted();
    yalianaShapesArray[i].moveBox();
    // yalianaShapesArray[i].tracingBoxes();
    yalianaShapesArray[i].moveLine();
    // yalianaShapesArray[i].tracingLines();
  }
  pop();



  // 010_JonesJamie

  push();
  translate(800, 200);
  scale(scaleFactor);

  noStroke();
  fill(255);
  rect(0, 0, 600, 600)

  rectMode(CORNER)
  angleMode(DEGREES);
  for (let i = 0; i < jamieShapesArray.length; i++) {
    // jamieShapesArray[i].drawGhostedGuitar();
    jamieShapesArray[i].drawCircle();
    // jamieShapesArray[i].traceCircle();
    jamieShapesArray[i].drawRect();
    jamieShapesArray[i].drawQuad();
  }
  pop();



  // 011_KarimRukaiya
  push();
  translate(0, 400);
  scale(scaleFactor);

  noStroke();
  fill(0);
  rect(0, 0, 600, 600)

  rectMode(CENTER)
  for (i = 0; i < karimShapes.length; i++) {
    karimShapePosition[i].ghostedMask();
    karimShapePosition[i].moveBox();
    karimShapePosition[i].moveEllipse();
    karimShapePosition[i].moveCurve();

    // karimShapePosition[i].trackingLines();
  }
  pop();


  // 012_MytculAnna
  push();
  translate(200, 400);
  scale(scaleFactor);

  noStroke();
  fill(220);
  rect(0, 0, 600, 600)

  rectMode(CENTER)
  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i].drawGhostedBottle();
    flaskArray[i].moveBox();
    flaskArray[i].trackingLines();
    flaskArray[i].drawCircle();
    flaskArray[i].drawArc();
  }
  pop();



  // 013_NazirSakeena
  push();
  translate(400, 400);
  scale(scaleFactor);
  // noFill();

  noStroke();
  angleMode(DEGREES)
  fill(255);
  rect(0, 0, 600, 600)
  // stroke(0)
  strokeWeight(4);

  for (i = 0; i < sakeenaCircleGroup1.length; i++) {
    rotateSakeenaCircle(sakeenaCircleGroup1[i])
  }
  for (i = 0; i < sakeenaCircleGroup2.length; i++) {
    rotateSakeenaCircle(sakeenaCircleGroup2[i])
  }
  for (i = 0; i < sakeenaCircleGroup3.length; i++) {
    rotateSakeenaCircle(sakeenaCircleGroup3[i])
  }
  for (i = 0; i < sakeenaCircleGroup4.length; i++) {
    rotateSakeenaCircle(sakeenaCircleGroup4[i])
  }
  for (i = 0; i < sakeenaCircleGroup5.length; i++) {
    rotateSakeenaCircle(sakeenaCircleGroup5[i])
  }
  for (i = 0; i < sakeenaCircleGroup6.length; i++) {
    rotateSakeenaCircle(sakeenaCircleGroup6[i])
  }
  pop();


  // 014_NyeZoe
  push();
  translate(600, 400);
  scale(scaleFactor);
  // noFill();

  noStroke();
  fill(255);
  rect(0, 0, 600, 600)

  for (i = 0; i < zoeShapes.length; i++) {
    // I have one ghosted still of the original mirror.
    zoeShapesPosition[i].drawMirrorGhosted();
    zoeShapesPosition[i].moveBox();
    zoeShapesPosition[i].moveCircle();
    // zoeShapesPosition[i].tracingLines();
  }
  pop();









  // 015_Ortiz-TeedMiguel
  push();
  translate(800, 400);
  scale(scaleFactor);
  // noFill();

  noStroke();
  fill(135);
  rect(0, 0, 600, 600)

  for (i = 0; i < miguelHalfCircles.length; i++){
    miguelHalfCirclePosition[i].drawGhostedWatermelon();
    miguelHalfCirclePosition[i].drawHalfCircle();
    miguelHalfCirclePosition[i].traceObjectGreen();
    miguelHalfCirclePosition[i].moveX();
    miguelHalfCirclePosition[i].moveY();
    miguelHalfCirclePosition[i].returnPosition();
  }

  for (i = 0; i < miguelSeeds.length; i++){
    miguelSeedsPosition[i].drawGhostedSeed();
    miguelSeedsPosition[i].drawSeed();
    miguelSeedsPosition[i].traceObjectPink();
    miguelSeedsPosition[i].moveX();
    miguelSeedsPosition[i].moveY();
    miguelSeedsPosition[i].returnPosition();
  }
  pop();


  // 016_RavichandarYogesh
  push();
  translate(0, 600);
  scale(scaleFactor);
  // noFill();

  noStroke();
  fill(225);
  rect(0, 0, 600, 600);
  rectMode(CORNER);

  for (let i = 0; i < yogeshArray.length; i++) {
    yogeshArray[i].drawGhostedSpeaker();
    yogeshArray[i].drawBox();
    yogeshArray[i].drawCircle();
    yogeshArray[i].drawLines();
    // yogeshArray[i].moveBox();
  }

  pop();

// 017_SachaMatthew
push();
translate(200, 600);
scale(scaleFactor);
// noFill();

noStroke();
fill(0);
rect(0, 0, 600, 600);
rectMode(CORNER);

for (let i = 0; i < mattShapesArray.length; i++) {
  mattShapesArray[i].moveCircle();
  mattShapesArray[i].moveRect();
  mattShapesArray[i].moveArc();
  // mattShapesArray[i].diagramMovement();
  mattShapesArray[i].drawGhostedHeadphones();
  // rectArray[i].trackingLines();
}

pop();




// 018_SatputeYukta
push();
translate(400, 600);
scale(scaleFactor);
// noFill();

noStroke();
fill(250);
rect(0, 0, 600, 600);
rectMode(CORNER);

for (let i = 0; i < yuktaShapesArray.length; i++) {
  yuktaShapesArray[i].drawCircle();
  yuktaShapesArray[i].drawLine();
}

pop();


// 019_VyawahareAishwarya
push();
translate(600, 600);
scale(scaleFactor);
// noFill();

noStroke();
fill(0);
rect(0, 0, 600, 600);
rectMode(CORNER);

for (let i = 0; i < aishwaryaShapes.length; i++) {
  aishwaryaShapesArray[i].drawGhostedMouse();
  aishwaryaShapesArray[i].drawBox();
  aishwaryaShapesArray[i].drawCircle();
  // shapesArray[i].moveShape();
  aishwaryaShapesArray[i].traceObject();
}

pop();





// 020_ZhangXuwen
push();
translate(800, 600);
scale(scaleFactor);
// noFill();

// angleMode(RADIANS)
noStroke();
fill(200,200,240);
rect(0, 0, 600, 600);
rectMode(CORNER);

for (let i= 0; i< xuwenArray.length; i++){
  xuwenArray[i].drawGhostedLamp();
  xuwenArray[i].drawBox();
  xuwenArray[i].drawCircle();
  xuwenArray[i].drawTriangle();
  xuwenArray[i].tracingObject();
}

pop();








}
