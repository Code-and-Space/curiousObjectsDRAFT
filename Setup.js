function setup() {
  // background('red')
  createCanvas(1000, 800);
  angleMode(DEGREES);



  // 001_AgrawalAnubha
  for (let i = 0; i < iPhoneComponents.length; i++) {
    // iPhoneComponents[i].speedX = 0;
    // iPhoneComponents[i].speedY = 0;

    iPhoneComponents[i].speedX = iPhoneComponents[i].speedX * anubhaSpeedMultiplier;
    iPhoneComponents[i].speedY = iPhoneComponents[i].speedY * anubhaSpeedMultiplier;

    iPhoneComponentsClassArray[i] = new IPhoneMove(iPhoneComponents[i]);
  }



  // 002_BarzidehJosh
  for (let i = 0; i < joshShapeList.length; i++) {
    // speedMultiplier is adjusting your speedX and speedY
    joshShapeList[i].speedX = joshShapeList[i].speedX * joshSpeedMultiplier;
    joshShapeList[i].speedY = joshShapeList[i].speedY * joshSpeedMultiplier;

    // Sometimes, I just need to pause your shapes by setting speedX and speedY for each object to 0.
    // joshShapeList[i].speedX = 0;
    // joshShapeList[i].speedY = 0;

    joshShapeArray[i] = new JoshMovedShapes(joshShapeList[i]);
  }



  // 003_BeerseTyler
  for (let i = 0; i < tylerShapes.length; i++) {
    // tylerShapes[i].speedX = 0;
    // tylerShapes[i].speedY = 0;

    // This is where your speed multiplier adjusts the speedX and speedY
    tylerShapes[i].speedX = tylerShapes[i].speedX * tylerSpeedMultiplier;
    tylerShapes[i].speedY = tylerShapes[i].speedY * tylerSpeedMultiplier;

    tylerShapesArray[i] = new TylerGlass(tylerShapes[i]);
  }



  // 004_ClearyThomas
  for (let i = 0; i < tomShapes01.length; i++){
    // Sometimes, I just need to pause your shapes by setting speedX and speedY for each object to 0.
    // tomShapes01[i].speedX = 0;
    // tomShapes01[i].speedY = 0;

    tomShapes01[i].speedX = tomShapes01[i].speedX * tomSpeedMultiplier;
    tomShapes01[i].speedY = tomShapes01[i].speedY * tomSpeedMultiplier;
    tomShapeArray01[i] = new MovedShape(tomShapes01[i]);
  }



  // 005_CopeteCamilo
  for (i=0; i < camiloShapes.length; i++) {
    camiloShapes[i].speedX = camiloShapes[i].speedX * speedCamiloMultiplier;
    camiloShapes[i].speedY = camiloShapes[i].speedY * speedCamiloMultiplier;
    // camiloShapes[i].speedX = 0;
    // camiloShapes[i].speedY = 0;
    camiloShapesPosition[i] = new CamiloKendama(camiloShapes[i]);
  }



  // 006_CornetAntoine
  for (let i=0; i < antoineShapes.length; i++) {
    // Control speed of rectangles
    if (antoineShapes[i].transX === undefined && antoineShapes[i].lineX1 === undefined && antoineShapes[i].circleX === undefined && antoineShapes[i].ellipseTransX === undefined) {
      antoineShapes[i].speedX = antoineShapes[i].speedX * antoineShapesMultiplier
      antoineShapes[i].speedY = antoineShapes[i].speedY * antoineShapesMultiplier
    }

    // Control speed of triangles
    if (antoineShapes[i].rectX === undefined && antoineShapes[i].lineX1 === undefined && antoineShapes[i].circleX === undefined && antoineShapes[i].ellipseTransX === undefined) {
      antoineShapes[i].speed = antoineShapes[i].speed * antoineShapesMultiplier;
    }

    // Control speed of circles
    if (antoineShapes[i].rectX === undefined && antoineShapes[i].transX === undefined && antoineShapes[i].lineX1 === undefined && antoineShapes[i].ellipseTransX === undefined) {
      antoineShapes[i].speedX = antoineShapes[i].speedX * antoineShapesMultiplier
      antoineShapes[i].speedY = antoineShapes[i].speedY * antoineShapesMultiplier
    }

    antoineShapesArray[i] = new Drone(antoineShapes[i]);
  }



  // 007_DebasSonali
  for (let i = 0; i < sonaliBoxes.length; i++) {
    // This is where your speed multiplier adjusts the speedX and speedY
    // sonaliBoxes[i].speedX = 0;
    // sonaliBoxes[i].speedY = 0;

    // This is where your speed multiplier adjusts the speedX and speedY
    sonaliBoxes[i].speedX = sonaliBoxes[i].speedX * sonaliSpeedMultiplier;
    sonaliBoxes[i].speedY = sonaliBoxes[i].speedY * sonaliSpeedMultiplier;

    sonaliBoxPosition[i] = new SonaliSanitizer(sonaliBoxes[i]);
  }



// 008_DiepDuong
for (let i=0;i < tonyShapes.length;i++){
  // Setting your speedX and speedY allows you to just look at the code when every shape is still
  // tonyShapes[i].speedX = 0;
  // tonyShapes[i].speedY = 0;

  // This is where your speed multiplier adjusts the speedX and speedY
  tonyShapes[i].speedX = tonyShapes[i].speedX * tonySpeedMultiplier;
  tonyShapes[i].speedY = tonyShapes[i].speedY * tonySpeedMultiplier;

  tonyShapesArray[i]= new TonyWatch(tonyShapes[i]);
}



// 009_HernandezYaliana
for (i=0; i < yalianaShapes.length; i++) {
  // speedMultiplier is adjusting your speedX and speedY
  yalianaShapes[i].speedX = yalianaShapes[i].speedX * speedMultiplier;
  yalianaShapes[i].speedY = yalianaShapes[i].speedY * speedMultiplier;
  yalianaShapesArray[i] = new YalianaLamp(yalianaShapes[i]);
}



// 010_JonesJamie
for (let i = 0; i < jamieShapes.length; i++) {
  // Stop moving to ensure guitar is drawing correctly
  // if (jamieShapes[i].rectX === undefined && jamieShapes[i].x1 === undefined) {
  //   jamieShapes[i].speedX = 0;
  //   jamieShapes[i].speedY = 0;
  // }
  // if (jamieShapes[i].circleX === undefined && jamieShapes[i].x1 === undefined) {
  //   jamieShapes[i].speed = 0;
  // }
  // if (jamieShapes[i].circleX === undefined && jamieShapes[i].rectX === undefined) {
  //   jamieShapes[i].speed = 0;
  //   jamieShapes[i].angle = 0;
  // }

  if (jamieShapes[i].rectX === undefined && jamieShapes[i].x1 === undefined) {
    jamieShapes[i].speedX = jamieShapes[i].speedX * jamieSpeedMultiplier;
    jamieShapes[i].speedY = jamieShapes[i].speedY * jamieSpeedMultiplier;
  }
  if (jamieShapes[i].circleX === undefined && jamieShapes[i].x1 === undefined) {
    jamieShapes[i].speed = jamieShapes[i].speed * jamieSpeedMultiplier;
  }
  if (jamieShapes[i].circleX === undefined && jamieShapes[i].rectX === undefined) {
    jamieShapes[i].speed = jamieShapes[i].speed * jamieSpeedMultiplier;
    jamieShapes[i].angle = 0;
  }

  jamieShapesArray[i] = new Guitar(jamieShapes[i]);
}



// 011_KarimRukaiya
for (let i = 0; i < karimShapes.length; i++) {
  // Setting your speedX and speedY allows you to just look at the code when every shape is still
  // karimShapes[i].speedX = 0;
  // karimShapes[i].speedY = 0;

  // karimShapes[i].speedX = karimShapes[i].speedX * karimSpeedMulitplier;
  // karimShapes[i].speedY = karimShapes[i].speedY * karimSpeedMulitplier;

  if (karimShapes[i].rectX === undefined && karimShapes[i].ellipseX === undefined) {
    // This is where your speed multiplier adjusts the speedX and speedY
    karimShapes[i].speedX1 = karimShapes[i].speedX1 * karimSpeedMulitplier;
    karimShapes[i].speedY1 = karimShapes[i].speedY1 * karimSpeedMulitplier;
    karimShapes[i].speedX2 = karimShapes[i].speedX2 * karimSpeedMulitplier;
    karimShapes[i].speedY2 = karimShapes[i].speedY2 * karimSpeedMulitplier;
    karimShapes[i].speedX3 = karimShapes[i].speedX3 * karimSpeedMulitplier;
    karimShapes[i].speedY3 = karimShapes[i].speedY3 * karimSpeedMulitplier;
    karimShapes[i].speedX4 = karimShapes[i].speedX4 * karimSpeedMulitplier;
    karimShapes[i].speedY4 = karimShapes[i].speedY4 * karimSpeedMulitplier;

  }
  karimShapePosition[i] = new MovedBox(karimShapes[i]);
}



// 012_MytculAnna
for (let i = 0; i < flaskElements.length; i++) {
  // Setting your speedX and speedY allows you to just look at the code when every shape is still
  // flaskElements[i].speedX = 0;
  // flaskElements[i].speedY = 0;

  // This is where your speed multiplier adjusts the speedX and speedY
  flaskElements[i].speedX = flaskElements[i].speedX * annaSpeedMultiplier;
  flaskElements[i].speedY = flaskElements[i].speedY * annaSpeedMultiplier;

  flaskArray[i] = new MovedFlask (flaskElements[i]);
}



// 013_NazirSakeena



// 014_NyeZoe
for (i = 0; i < zoeShapes.length; i++) {
  // speedMultiplier is adjusting your speedX and speedY
  zoeShapes[i].speedX = zoeShapes[i].speedX * speedMultiplier;
  zoeShapes[i].speedY = zoeShapes[i].speedY * speedMultiplier;
  zoeShapes[i].speedResetX = zoeShapes[i].speedResetX * speedMultiplier;
  zoeShapes[i].speedResetY = zoeShapes[i].speedResetY * speedMultiplier;
  zoeShapesPosition[i] = new Mirror_Zoe(zoeShapes[i]);
}



// 015_Ortiz-TeedMiguel
for (let i = 0; i < miguelHalfCircles.length; i++){
  // Setting your speedX and speedY allows you to just look at the code when every shape is still
  // miguelHalfCircles[i].xspeed = 0;
  // miguelHalfCircles[i].yspeed = 0;

  // This is where your speed multiplier adjusts the speedX and speedY
  miguelHalfCircles[i].xspeed = miguelHalfCircles[i].xspeed * miguelSpeedMultiplier;
  miguelHalfCircles[i].yspeed = miguelHalfCircles[i].yspeed * miguelSpeedMultiplier;

  miguelHalfCirclePosition[i] = new Watermelon(miguelHalfCircles[i]);
}
for (let i = 0; i < miguelSeeds.length; i++){
  // Setting your speedX and speedY allows you to just look at the code when every shape is still
  // miguelSeeds[i].xspeed = 0;
  // miguelSeeds[i].yspeed = 0;

  // This is where your speed multiplier adjusts the speedX and speedY
  miguelSeeds[i].xspeed = miguelSeeds[i].xspeed * miguelSpeedMultiplier;
  miguelSeeds[i].yspeed = miguelSeeds[i].yspeed * miguelSpeedMultiplier;

  miguelSeedsPosition[i] = new Seed(miguelSeeds[i]);
}



// 016_RavichandarYogesh
for (let i = 0; i < yogeshShapesArray.length; i++) {
  yogeshShapesArray[i].speedX = yogeshShapesArray[i].speedX * yogeshSpeedMultiplier;
  yogeshShapesArray[i].speedY = yogeshShapesArray[i].speedY * yogeshSpeedMultiplier;
  yogeshArray[i] = new YogeshSpeaker(yogeshShapesArray[i]);
}



// 017_SachaMatthew
for (let i = 0; i < mattShapes.length; i++) {
  // mattShapes[i].speedX = 0;
  // mattShapes[i].speedY = 0;

  mattShapes[i].speedX = mattShapes[i].speedX * mattSpeedMultiplier;
  mattShapes[i].speedY = mattShapes[i].speedY * mattSpeedMultiplier;

  mattShapesArray[i] = new HeadphonesChaos(mattShapes[i]);
}



// 018_SatputeYukta
for (let i = 0; i < yuktaShapes.length; i++) {
  yuktaShapesArray[i] = new YuktaClock(yuktaShapes[i]);
}



// 019_VyawahareAishwarya
for (let i = 0; i < aishwaryaShapes.length;i++) {
      // Setting your speedX and speedY allows you to just look at the code when every shape is still
  // shapes[i].speedX = 0;
  // shapes[i].speedY = 0;

  // This is where your speed multiplier adjusts the speedX and speedY
  // shapes[i].speedX = shapes[i].speedX * aishwaryaSpeedMultiplier;
  // shapes[i].speedY = shapes[i].speedY * aishwaryaSpeedMultiplier;

  aishwaryaShapesArray[i] = new Aishwarya(aishwaryaShapes[i]);
}



// 020_ZhangXuwen
  for (let i= 0; i < xuwenLampShapes.length; i++){
    // This is where your speed multiplier adjusts the speedX and speedY
    xuwenLampShapes[i].speedX = xuwenLampShapes[i].speedX * xuwenSpeedMultiplier;
    xuwenLampShapes[i].speedY = xuwenLampShapes[i].speedY * xuwenSpeedMultiplier;

    // Setting your speedX and speedY allows you to just look at the code when every shape is still

    // xuwenLampShapes[i].speedX = 0;
    // xuwenLampShapes[i].speedY = 0;

    xuwenArray[i] = new XuwenLamp(xuwenLampShapes[i]);
  }
}
