// open processing layout help goes to Ååårhusianer https://openprocessing.org/sketch/2502833
// var credit goes to Jason Erdreich https://www.youtube.com/watch?v=HDn9zc8QYA4 https://www.youtube.com/watch?v=StoBCNiQakM
// gravity credit goes to Jason https://www.youtube.com/watch?v=StoBCNiQakM 

// Global
var velocityY = 0;
var gravity = 0.8;
var isGrounded = false;

//ChatGPT cooked for me for prevPiY I don't even know what that is
var prevPiY = 0;
var LeGoat;
var LeTaco;
var winDoorDir = 3;

var stage = -1;

var spawnX = 100;
var spawnY = 375;

var gameStartTime = 0;
var gameActive = false;
var finalTime = 0;

// player
var piX = 100;
var piY = 375;
var pWidth = 40;
var pHeight = 40;

// platform credit goes to Jason https://www.youtube.com/watch?v=8Cqtoo2Fq-s
// Level 1
var b1X = 300, b1Y = 300, b1Width = 200, b1Height = 40;
var b2X = 600, b2Y = 200, b2Width = 200, b2Height = 40;
var b3X = 755, b3Y = 75, b3Width = 70, b3Height = 130;
var enemy1X = 400, enemy1Y = 430, enemy1Dir = 2;

// Level 2
var c1X = 450, c1Y = 300, c1Width = 600, c1Height = 20;
var c2X = 350, c2Y = 195, c2Width = 680, c2Height = 20;
var c3X = 45, c3Y = 75, c3Width = 70, c3Height = 130;
var c4X = 765, c4Y = 247, c4Width = 30, c4Height = 125;
var enemy2X = 300, enemy2Y = 175, enemy2Dir = 3;

// Level 3
var d1X = 200, d1Y = 250, d1Width = 25, d1Height = 300;
var d2X = 162, d2Y = 390, d2Width = 100, d2Height = 20;
var d3X = 755, d3Y = 85, d3Width = 70, d3Height = 130;
var d4X = 255, d4Y = 110, d4Width = 60, d4Height = 20;
var d5X = 380, d5Y = 160, d5Width = 25, d5Height = 305;
var d6X = 330, d6Y = 303, d6Width = 75, d6Height = 20;
var d7X = 240, d7Y = 390, d7Width = 50, d7Height = 20;
var d8X = 550, d8Y = 303, d8Width = 100, d8Height = 20;
var d9X = 650, d9Y = 200, d9Width = 100, d9Height = 20;
var d10X = 175, d10Y = 160, d10Width = 20, d10Height = 20;
var d11X = 222, d11Y = 110, d11Width = 18, d11Height = 20;

// Level 4
var e1X = 100, e1Y = 380, e1W = 100, e1H = 20;
var eBounceX = 220, eBounceY = 380, eBounceW = 60, eBounceH = 20; 
var e2X = 450, e2Y = 180, e2W = 150, e2H = 20; 
var e3X = 680, e3Y = 180, e3W = 150, e3H = 20; 
var eDoorX = 730, eDoorY = 110, eDoorW = 70, eDoorH = 120; 
var laserAngle = 0;
var laserSpeed = 0.03; 

// Level 5
var h1X = 150, h1Y = 400, h1W = 80, h1H = 20; 
var h2X = 650, h2Y = 300, h2W = 80, h2H = 20; 
var h3X = 150, h3Y = 180, h3W = 80, h3H = 20; 
var h4X = 400, h4Y = 80, h4W = 100, h4H = 20; 
var hDoorX = 400, hDoorY = 40, hDoorW = 60, hDoorH = 60;
var hLaserAngle = 0;
var hEnemyY = 100, hEnemyDir = 6;

// Level 6 
var f1X = 200, f1Y = 350, f1W = 120, f1H = 20;
var f2X = 400, f2Y = 250, f2W = 120, f2H = 20;
var f3X = 600, f3Y = 150, f3W = 120, f3H = 20;
var fDoorX = 700, fDoorY = 60, fDoorW = 70, fDoorH = 120;
var bossY = 250, bossDir = 10;
var fEnemyX = 400, fEnemyDir = 6;
var fLaserAngle1 = 0;
var fLaserAngle2 = 3.14;

// Level 7
var g1X = 150, g1Y = 350, g1W = 120, g1H = 20;
var g2X = 300, g2Y = 250, g2W = 120, g2H = 20;
var g3X = 450, g3Y = 150, g3W = 120, g3H = 20;
var g4X = 625, g4Y = 165, g4W = 75, g4H = 400;
var g5X = 520, g5Y = 300, g5W = 90, g5H = 20;
var winDoorX = 750, winDoorY = 80, winDoorW = 100, winDoorH = 200;

// taco key
var keyTacoX = 560, keyTacoY = 100, keyTacoW = 45, keyTacoH = 45;
var keyTacoCollected = false;
var tacoShots = 4;


// Level 8 (bonus level)
var i1X = 100, i1Y = 380, i1W = 100, i1H = 20;
var iBounceX = 250, iBounceY = 390, iBounceW = 60, iBounceH = 20;
var i2X = 450, i2Y = 180, i2W = 120, i2H = 20; // Brought this closer and slightly lower
var i3X = 700, i3Y = 260, i3W = 100, i3H = 20;
var iDoorX = 750, iDoorY = 190, iDoorW = 70, iDoorH = 120;
var iLaserAngle = 0;
var iEnemyX = 500, iEnemyDir = 5;

// Setup
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

// stage credit goes to Jason https://www.youtube.com/watch?v=8Cqtoo2Fq-s

// draw
function draw() {
  background(20);

  if (stage == -1) {
    startScreen();
  } else if (stage == 0) {
    level1();
  } else if (stage == 1) {
    level2();
  } else if (stage == 2) {
    level3();
  } else if (stage == 3) {
    level4();
  } else if (stage == 4) {
    level5();
  } else if (stage == 5) {
    level6();
  } else if (stage == 6) {
    level7();
  } else if (stage == 7) {
    level8();
  }

  // Draw timer for all active stages
  if (stage >= 0 && stage <= 7) {
    drawTimer();
  }
}

// keypressed credit goes to Jason https://www.youtube.com/watch?v=HDn9zc8QYA4

// input 
function keyPressed() {
  if (stage == -1 && key === ' ') {
    stage = 0;
    spawnX = 100;
    spawnY = 375;
    die();
    gameStartTime = millis();
    gameActive = true;
    loop();
  }

  if ((key === ' ' || keyCode === UP_ARROW) && isGrounded && stage >= 0) {
    velocityY = -15;
    isGrounded = false;
  }
}

// startscreen
function startScreen() {
  background(30, 40, 60);

  fill(255);
  noStroke();
  textAlign(CENTER);

  textSize(50);
  text("PLATFORMER QUEST", width / 2, height / 2 - 50);

  textSize(20);
  text("Press SPACE to Start", width / 2, height / 2 + 20);
  text("Use ARROWS to Move & Jump", width / 2, height / 2 + 60);
  text("Avoid RED Enemies & Lasers!", width / 2, height / 2 + 100);

  fill(0, 24, 200);
  stroke(0);
  strokeWeight(2);
  rect(width / 2, height / 2 + 150, 40, 40);
}

// level 1
function level1() {
  background(150, 230, 240);
  drawFrame();
  drawGround(150, 75, 0);

  drawPlatform(b1X, b1Y, b1Width, b1Height, color(130, 130, 25));
  drawDoor(b3X, b3Y, b3Width, b3Height, color(255));

  stroke(0);
  strokeWeight(5);
  fill(128, 0, 128);
  rect(b2X, b2Y, b2Width, b2Height);

  enemy1X += enemy1Dir;
  if (enemy1X > 750 || enemy1X < 100) enemy1Dir *= -1;
  drawEnemy(enemy1X, enemy1Y, 30, 30);
  checkEnemy(enemy1X, enemy1Y, 30, 30);

  playerMovement();
  applyPhysics();

  checkPlatform(b1X, b1Y, b1Width, b1Height);

  // collision credit goes to Jason https://www.youtube.com/watch?v=qprwX-FMdSY
  // collision credit goes to Xin Xin https://www.youtube.com/watch?v=cZ_VHAT_Sq4
  // A lot of collision credit goes to ChatGPT 
	
  // b2 top
  if (
    piX + pWidth / 2 > b2X - b2Width / 2 &&
    piX - pWidth / 2 < b2X + b2Width / 2 &&
    prevPiY + pHeight / 2 <= b2Y - b2Height / 2 &&
    piY + pHeight / 2 >= b2Y - b2Height / 2 &&
    velocityY >= 0
  ) {
    piY = b2Y - b2Height / 2 - pHeight / 2;
    velocityY = 0;
    isGrounded = true;
  }

  // b2 bottom
  else if (
    piX + pWidth / 2 > b2X - b2Width / 2 &&
    piX - pWidth / 2 < b2X + b2Width / 2 &&
    prevPiY - pHeight / 2 >= b2Y + b2Height / 2 &&
    piY - pHeight / 2 <= b2Y + b2Height / 2 &&
    velocityY < 0
  ) {
    piY = b2Y + b2Height / 2 + pHeight / 2;
    velocityY = 0;
  }

  // b2 left = dead
  else if (
    piX + pWidth / 2 > b2X - b2Width / 2 &&
    piX < b2X &&
    piY + pHeight / 2 > b2Y - b2Height / 2 &&
    piY - pHeight / 2 < b2Y + b2Height / 2
  ) {
    die();
  }

  // b2 right
  else if (
    piX - pWidth / 2 < b2X + b2Width / 2 &&
    piX > b2X &&
    piY + pHeight / 2 > b2Y - b2Height / 2 &&
    piY - pHeight / 2 < b2Y + b2Height / 2
  ) {
    piX = b2X + b2Width / 2 + pWidth / 2;
  }

  if (dist(piX, piY, b3X, b3Y) < 60 && keyIsDown(RIGHT_ARROW)) {
    stage = 1;
    spawnX = 700;
    spawnY = 375;
    die();
  }

  drawPlayer();
}

// Level 2 red platform inspiration goes to Semi99999 https://scratch.mit.edu/projects/14352503/ 
// level 2
function level2() {
  background(180, 220, 255);
  drawFrame();
  drawGround(100, 60, 20);

  drawPlatform(c1X, c1Y, c1Width, c1Height, color(50, 180, 100));
  drawPlatform(c2X, c2Y, c2Width, c2Height, color(50, 180, 100));
  drawPlatform(c4X, c4Y, c4Width, c4Height, color(220, 20, 60));
  drawDoor(c3X, c3Y, c3Width, c3Height, color(150));

  enemy2X += enemy2Dir;
  if (enemy2X > 650 || enemy2X < 50) enemy2Dir *= -1;
  drawEnemy(enemy2X, enemy2Y, 30, 30);
  checkEnemy(enemy2X, enemy2Y, 30, 30);

  playerMovement();
  applyPhysics();

  checkPlatform(c1X, c1Y, c1Width, c1Height);
  checkPlatform(c2X, c2Y, c2Width, c2Height);
  
  // collsion credit goes to Jason https://www.youtube.com/watch?v=qprwX-FMdSY
  // collision credit goes to Xin Xin https://www.youtube.com/watch?v=cZ_VHAT_Sq4
  // c4 top
  if (
    piX + pWidth / 2 > c4X - c4Width / 2 &&
    piX - pWidth / 2 < c4X + c4Width / 2 &&
    prevPiY + pHeight / 2 <= c4Y - c4Height / 2 &&
    piY + pHeight / 2 >= c4Y - c4Height / 2 &&
    velocityY >= 0
  ) {
    piY = c4Y - c4Height / 2 - pHeight / 2;
    velocityY = 0;
    isGrounded = true;
  }

  // c4 bottom
  else if (
    piX + pWidth / 2 > c4X - c4Width / 2 &&
    piX - pWidth / 2 < c4X + c4Width / 2 &&
    prevPiY - pHeight / 2 >= c4Y + c4Height / 2 &&
    piY - pHeight / 2 <= c4Y + c4Height / 2 &&
    velocityY < 0
  ) {
    piY = c4Y + c4Height / 2 + pHeight / 2;
    velocityY = 0;
  }

  //credit goes to ChatGPT
	  
  // c4 left = respawn
  else if (
    piX + pWidth / 2 > c4X - c4Width / 2 &&
    piX < c4X &&
    piY + pHeight / 2 > c4Y - c4Height / 2 &&
    piY - pHeight / 2 < c4Y + c4Height / 2
  ) {
    die();
  }

  // c4 right
  else if (
    piX - pWidth / 2 < c4X + c4Width / 2 &&
    piX > c4X &&
    piY + pHeight / 2 > c4Y - c4Height / 2 &&
    piY - pHeight / 2 < c4Y + c4Height / 2
  ) {
    piX = c4X + c4Width / 2 + pWidth / 2;
  }

  if (dist(piX, piY, c3X, c3Y) < 60 && keyIsDown(LEFT_ARROW)) {
    stage = 2;
    spawnX = 100;
    spawnY = 375;
    die();
  }

  drawPlayer();
}

// bounce inspiration goes to Semi99999 https://scratch.mit.edu/projects/14352503/ 

// level 3
function level3() {
  background(255, 220, 180);
  drawFrame();
  drawGround(120, 70, 30);

  drawPlatform(d1X, d1Y, d1Width, d1Height, color(100, 180, 255));
  drawPlatform(d2X, d2Y, d2Width, d2Height, color(50, 205, 50));
  drawPlatform(d4X, d4Y, d4Width, d4Height, color(255, 120, 120));
  drawPlatform(d5X, d5Y, d5Width, d5Height, color(100, 180, 255));
  drawPlatform(d6X, d6Y, d6Width, d6Height, color(100, 180, 255));
  drawPlatform(d7X, d7Y, d7Width, d7Height, color(255, 120, 120));
  drawPlatform(d8X, d8Y, d8Width, d8Height, color(100, 180, 255));
  drawPlatform(d9X, d9Y, d9Width, d9Height, color(100, 180, 255));
  drawPlatform(d10X, d10Y, d10Width, d10Height, color(100, 180, 255));
  drawPlatform(d11X, d11Y, d11Width, d11Height, color(100, 180, 255));
  drawDoor(d3X, d3Y, d3Width, d3Height, color(255));

  playerMovement();
  applyPhysics();

  checkPlatform(d1X, d1Y, d1Width, d1Height);
  checkBouncePlatform(d2X, d2Y, d2Width, d2Height);

  //credit goes to ChatGPT
	
  if (
    piX + pWidth / 2 > d4X - d4Width / 2 &&
    piX - pWidth / 2 < d4X + d4Width / 2 &&
    piY + pHeight / 2 > d4Y - d4Height / 2 &&
    piY - pHeight / 2 < d4Y + d4Height / 2
  ) {
    die();
  }

  if (
    piX + pWidth / 2 > d7X - d7Width / 2 &&
    piX - pWidth / 2 < d7X + d7Width / 2 &&
    piY + pHeight / 2 > d7Y - d7Height / 2 &&
    piY - pHeight / 2 < d7Y + d7Height / 2
  ) {
    die();
  }

  checkPlatform(d5X, d5Y, d5Width, d5Height);
  checkPlatform(d6X, d6Y, d6Width, d6Height);
  checkPlatform(d8X, d8Y, d8Width, d8Height);
  checkPlatform(d9X, d9Y, d9Width, d9Height);
  checkPlatform(d10X, d10Y, d10Width, d10Height);
  checkPlatform(d11X, d11Y, d11Width, d11Height);

  if (dist(piX, piY, d3X, d3Y) < 60 && keyIsDown(RIGHT_ARROW)) {
    stage = 3;
    spawnX = 100;
    spawnY = 375;
    die();
  }

  drawPlayer();
}

// level 4
function level4() {
  background(200, 200, 255);
  drawFrame();
  drawGround(80, 40, 20);

  drawPlatform(e1X, e1Y, e1W, e1H, color(100));
  drawPlatform(e2X, e2Y, e2W, e2H, color(100));
  drawPlatform(e3X, e3Y, e3W, e3H, color(100));
  
  drawPlatform(eBounceX, eBounceY, eBounceW, eBounceH, color(50, 205, 50));
  
  drawDoor(eDoorX, eDoorY, eDoorW, eDoorH, color(255));

  laserAngle += laserSpeed;
  drawAndCheckLaser(width / 2, 380, 220, laserAngle);

  playerMovement();
  applyPhysics();

  checkPlatform(e1X, e1Y, e1W, e1H);
  checkPlatform(e2X, e2Y, e2W, e2H);
  checkPlatform(e3X, e3Y, e3W, e3H);
  checkBouncePlatform(eBounceX, eBounceY, eBounceW, eBounceH);

  if (dist(piX, piY, eDoorX, eDoorY) < 60 && keyIsDown(RIGHT_ARROW)) {
    stage = 4;
    spawnX = 100;
    spawnY = 375;
    die();
  }

  drawPlayer();
}

// level 5
function level5() {
  background(100, 50, 50);
  drawFrame();
  drawGround(40, 20, 20);

  drawPlatform(h1X, h1Y, h1W, h1H, color(50, 205, 50));
  drawPlatform(h2X, h2Y, h2W, h2H, color(50, 205, 50));
  drawPlatform(h3X, h3Y, h3W, h3H, color(50, 205, 50));
  
  drawPlatform(h4X, h4Y, h4W, h4H, color(100));
  drawDoor(hDoorX, hDoorY, hDoorW, hDoorH, color(255));

  hLaserAngle -= 0.03;
  drawAndCheckLaser(400, 250, 160, hLaserAngle);

  hEnemyY += hEnemyDir;
  if (hEnemyY < 50 || hEnemyY > 420) hEnemyDir *= -1;
  drawEnemy(400, hEnemyY, 30, 30);
  checkEnemy(400, hEnemyY, 30, 30);

  playerMovement();
  applyPhysics();

  checkBouncePlatform(h1X, h1Y, h1W, h1H);
  checkBouncePlatform(h2X, h2Y, h2W, h2H);
  checkBouncePlatform(h3X, h3Y, h3W, h3H);
  checkPlatform(h4X, h4Y, h4W, h4H);

  if (dist(piX, piY, hDoorX, hDoorY) < 60 && (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW))) {
    stage = 5;
    spawnX = 100;
    spawnY = 375;
    die();
  }

  drawPlayer();
}

// level 6
function level6() {
  background(50, 20, 50);
  drawFrame();
  drawGround(30, 10, 30);

  drawPlatform(f1X, f1Y, f1W, f1H, color(100));
  drawPlatform(f2X, f2Y, f2W, f2H, color(100));
  drawPlatform(f3X, f3Y, f3W, f3H, color(100));
  drawDoor(fDoorX, fDoorY, fDoorW, fDoorH, color(255, 215, 0));

  fLaserAngle1 += 0.05;
  fLaserAngle2 -= 0.04;
  drawAndCheckLaser(300, 0, 300, fLaserAngle1);
  drawAndCheckLaser(500, 0, 350, fLaserAngle2);

  fEnemyX += fEnemyDir;
  if (fEnemyX > 750 || fEnemyX < 50) fEnemyDir *= -1;
  drawEnemy(fEnemyX, 385, 30, 30);
  checkEnemy(fEnemyX, 385, 30, 30);

  bossY += bossDir;
  if (bossY < 100 || bossY > 360) bossDir *= -1;

  stroke(0);
  strokeWeight(5);
  fill(200, 0, 0);
  rect(700, bossY, 40, 150);
  fill(255, 255, 0);
  circle(690, bossY - 30, 15);
  checkEnemy(700, bossY, 40, 150);

  playerMovement();
  applyPhysics();

  checkPlatform(f1X, f1Y, f1W, f1H);
  checkPlatform(f2X, f2Y, f2W, f2H);
  checkPlatform(f3X, f3Y, f3W, f3H);

  if (dist(piX, piY, fDoorX, fDoorY) < 60 && keyIsDown(RIGHT_ARROW)) {
    stage = 6;
    spawnX = 100;
    spawnY = 375;
    die();
  }

  drawPlayer();
}

// level 7
function level7() {
  background(0);
  drawFrame();
  drawGround(255, 255, 255);

  drawPlatform(g1X, g1Y, g1W, g1H, color(255));
  drawPlatform(g2X, g2Y, g2W, g2H, color(255));
  drawPlatform(g3X, g3Y, g3W, g3H, color(255));
  drawPlatform(g4X, g4Y, g4W, g4H, color(255));
  drawPlatform(g5X, g5Y, g5W, g5H, color(255));

  // LeGoat door credit goes to Jeremiah (I copied the structure of Level 6)
  // moving final door 
  winDoorY += winDoorDir;
  if (winDoorY < 80 || winDoorY > 320) winDoorDir *= -1;

  imageMode(CENTER);
  image(LeGoat, winDoorX, winDoorY, winDoorW, winDoorH);

  playerMovement();
  applyPhysics();

  checkPlatform(g1X, g1Y, g1W, g1H);
  checkPlatform(g2X, g2Y, g2W, g2H);
  checkPlatform(g3X, g3Y, g3W, g3H);
  checkPlatform(g4X, g4Y, g4W, g4H);
  checkPlatform(g5X, g5Y, g5W, g5H);

	// Reference MDN Web Docs https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection?utm_source=chatgpt.com
	// taco key

  if (!keyTacoCollected) {
    image(LeTaco, keyTacoX, keyTacoY, keyTacoW, keyTacoH);

    if (
      piX + pWidth / 2 > keyTacoX - keyTacoW / 2 &&
      piX - pWidth / 2 < keyTacoX + keyTacoW / 2 &&
      piY + pHeight / 2 > keyTacoY - keyTacoH / 2 &&
      piY - pHeight / 2 < keyTacoY + keyTacoH / 2
    ) {
      keyTacoCollected = true;
      tacoShots = 3;
    }
  }
	
  // wall move when key got
  if (keyTacoCollected && g4Y < 260) {
    g4Y += 2;
  }

  var shootSpeed = 6;
  var spacing = 120; 
	
  //This a Tyler code right here
  for (var i = 0; i < tacoShots; i++) {
	
	 // LeTacos 
    var offset = (frameCount * shootSpeed - i * spacing) % (width + 200);
    var tacoX = winDoorX - offset;
    var tacoY = winDoorY;

    image(LeTaco, tacoX, tacoY, 45, 45);
   
    // collision
    if (
      piX + pWidth / 2 > tacoX - 22.5 &&
      piX - pWidth / 2 < tacoX + 22.5 &&
      piY + pHeight / 2 > tacoY - 22.5 &&
      piY - pHeight / 2 < tacoY + 22.5
    ) {
      die();
    }
  }

  // Defeat LeGoat goes to bonus level
  if (
    piX + pWidth / 2 > winDoorX - winDoorW / 2 &&
    piX - pWidth / 2 < winDoorX + winDoorW / 2 &&
    prevPiY + pHeight / 2 <= winDoorY - winDoorH / 2 &&
    piY + pHeight / 2 >= winDoorY - winDoorH / 2 &&
    velocityY >= 0
  ) {
    stage = 7;
    spawnX = 100;
    spawnY = 360;
    die();
  }
  
  if (dist(piX, piY, winDoorX, winDoorY) < 60 && keyIsDown(RIGHT_ARROW)) {
    stage = 7;
    spawnX = 100;
    spawnY = 360;
    die();
  }

  drawPlayer();
}

// Level 8 (bonus)
function level8() {
  background(255, 215, 0); // Golden background
  drawFrame();
  drawGround(50, 50, 50);

  // Platforms
  drawPlatform(i1X, i1Y, i1W, i1H, color(100));
  
  drawPlatform(iBounceX, iBounceY, iBounceW, iBounceH, color(50, 205, 50)); 
  
  drawPlatform(i2X, i2Y, i2W, i2H, color(100));
  drawPlatform(i3X, i3Y, i3W, i3H, color(100));
  
  // Golden Door
  drawDoor(iDoorX, iDoorY, iDoorW, iDoorH, color(255));

  // Lasers
  iLaserAngle += 0.06;
  drawAndCheckLaser(400, 300, 150, iLaserAngle);
  drawAndCheckLaser(400, 300, 150, -iLaserAngle);
  drawAndCheckLaser(400, 300, 150, iLaserAngle + 1.57); 

  // Fast enemy
  iEnemyX += iEnemyDir;
  if (iEnemyX > 600 || iEnemyX < 400) iEnemyDir *= -1;
  drawEnemy(iEnemyX, 135, 30, 30);
  checkEnemy(iEnemyX, 135, 30, 30);

  playerMovement();
  applyPhysics();

  checkPlatform(i1X, i1Y, i1W, i1H);
  
  checkSuperBouncePlatform(iBounceX, iBounceY, iBounceW, iBounceH);
  
  checkPlatform(i2X, i2Y, i2W, i2H);
  checkPlatform(i3X, i3Y, i3W, i3H);

  if (dist(piX, piY, iDoorX, iDoorY) < 60 && keyIsDown(RIGHT_ARROW)) {
    if (gameActive) {
      finalTime = floor((millis() - gameStartTime) / 1000);
      gameActive = false;
    }

    background(0);
    fill(255, 215, 0);
    textAlign(CENTER);
    textSize(50);
    text("TRUE PLATFORMER MASTER!", width / 2, height / 2 - 20);
    textSize(30);
    text("Final Time: " + finalTime + " seconds", width / 2, height / 2 + 30);
    noLoop();
  }

  drawPlayer();
}

function preload() {
  LeGoat = loadImage("FOeDCrTXEAgqNMJ-2.jpg");
  LeTaco = loadImage("Taco.png");
}

// helpers
function drawFrame() {
  noFill();
  stroke(0);
  strokeWeight(15);
  rect(width / 2, height / 2, width, height);
}

function drawGround(r, g, b) {
  noStroke();
  fill(r, g, b);
  rect(width / 2, 450, width, 100);
}

function drawPlatform(x, y, w, h, col) {
  stroke(0);
  strokeWeight(5);
  fill(col);
  rect(x, y, w, h);
}

function drawDoor(x, y, w, h, col) {
  stroke(0);
  strokeWeight(5);
  fill(col);
  rect(x, y, w, h);
  fill(0);
  circle(x - 20, y, 8);
}

function drawPlayer() {
  stroke(0);
  strokeWeight(1);
  fill(0, 24, 200);
  rect(piX, piY, pWidth, pHeight);
}

function drawEnemy(x, y, w, h) {
  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);
  rect(x, y, w, h);
}

function drawAndCheckLaser(px, py, length, angle) {
  var endX = px + cos(angle) * length;
  var endY = py + sin(angle) * length;

  stroke(255, 0, 0);
  strokeWeight(8);
  line(px, py, endX, endY);

  noStroke();
  fill(200, 0, 0);
  circle(px, py, 25);
  fill(255);
  circle(px, py, 10);

  if (distToSegment(piX, piY, px, py, endX, endY) < pWidth / 2) {
    die();
  }
}

function drawTimer() {
  var currentTime = gameActive ? floor((millis() - gameStartTime) / 1000) : finalTime;
  fill(255);
  noStroke();
  textSize(24);
  textAlign(LEFT);
  textStyle(BOLD);
  text("Time: " + currentTime, 20, 40);
  textAlign(CENTER);
  textStyle(NORMAL);
}

function die() {
  piX = spawnX;
  piY = spawnY;
  velocityY = 0;
}

//movement credit goes to Jason https://www.youtube.com/watch?v=8Cqtoo2Fq-s

function playerMovement() {
  if (keyIsDown(LEFT_ARROW)) piX -= 5;
  if (keyIsDown(RIGHT_ARROW)) piX += 5;

  if (piX - pWidth / 2 < 0) {
    piX = pWidth / 2;
  }

  if (piX + pWidth / 2 > width) {
    piX = width - pWidth / 2;
  }
}

function applyPhysics() {
  prevPiY = piY;
  velocityY += gravity;
  piY += velocityY;
  isGrounded = false;

  //border collision goes to Chat GPT

  if (piY - pHeight / 2 < 0) {
    piY = pHeight / 2;
    velocityY = 0;
  }

  if (piY + pHeight / 2 > 400) {
    piY = 400 - pHeight / 2;
    velocityY = 0;
    isGrounded = true;
  }
}

function checkPlatform(px, py, pw, ph) {
  if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px + pw / 2 &&
    prevPiY + pHeight / 2 <= py - ph / 2 &&
    piY + pHeight / 2 >= py - ph / 2 &&
    velocityY >= 0
  ) {
    piY = py - ph / 2 - pHeight / 2;
    velocityY = 0;
    isGrounded = true;
  } else if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px + pw / 2 &&
    prevPiY - pHeight / 2 >= py + ph / 2 &&
    piY - pHeight / 2 <= py + ph / 2 &&
    velocityY < 0
  ) {
    piY = py + ph / 2 + pHeight / 2;
    velocityY = 0;
  } else if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px &&
    piY + pHeight / 2 > py - ph / 2 &&
    piY - pHeight / 2 < py + ph / 2
  ) {
    piX = px - pw / 2 - pWidth / 2;
  } else if (
    piX - pWidth / 2 < px + pw / 2 &&
    piX + pWidth / 2 > px &&
    piY + pHeight / 2 > py - ph / 2 &&
    piY - pHeight / 2 < py + ph / 2
  ) {
    piX = px + pw / 2 + pWidth / 2;
  }
}

function checkBouncePlatform(px, py, pw, ph) {
  if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px + pw / 2 &&
    prevPiY + pHeight / 2 <= py - ph / 2 &&
    piY + pHeight / 2 >= py - ph / 2 &&
    velocityY >= 0
  ) {
    piY = py - ph / 2 - pHeight / 2;
    velocityY = -20;
    isGrounded = false;
  } else if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px + pw / 2 &&
    prevPiY - pHeight / 2 >= py + ph / 2 &&
    piY - pHeight / 2 <= py + ph / 2 &&
    velocityY < 0
  ) {
    piY = py + ph / 2 + pHeight / 2;
    velocityY = 0;
  } else if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px &&
    piY + pHeight / 2 > py - ph / 2 &&
    piY - pHeight / 2 < py + ph / 2
  ) {
    piX = px - pw / 2 - pWidth / 2;
  } else if (
    piX - pWidth / 2 < px + pw / 2 &&
    piX + pWidth / 2 > px &&
    piY + pHeight / 2 > py - ph / 2 &&
    piY - pHeight / 2 < py + ph / 2
  ) {
    piX = px + pw / 2 + pWidth / 2;
  }
}

function checkSuperBouncePlatform(px, py, pw, ph) {

  if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px + pw / 2 &&
    prevPiY + pHeight / 2 <= py - ph / 2 &&
    piY + pHeight / 2 >= py - ph / 2 &&
    velocityY >= 0
  ) {
    piY = py - ph / 2 - pHeight / 2;
    velocityY = -24; 
    isGrounded = false;
  } 
  // bottom
  else if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px + pw / 2 &&
    prevPiY - pHeight / 2 >= py + ph / 2 &&
    piY - pHeight / 2 <= py + ph / 2 &&
    velocityY < 0
  ) {
    piY = py + ph / 2 + pHeight / 2;
    velocityY = 0;
  } 
  // left
  else if (
    piX + pWidth / 2 > px - pw / 2 &&
    piX - pWidth / 2 < px &&
    piY + pHeight / 2 > py - ph / 2 &&
    piY - pHeight / 2 < py + ph / 2
  ) {
    piX = px - pw / 2 - pWidth / 2;
  } 
  // right
  else if (
    piX - pWidth / 2 < px + pw / 2 &&
    piX + pWidth / 2 > px &&
    piY + pHeight / 2 > py - ph / 2 &&
    piY - pHeight / 2 < py + ph / 2
  ) {
    piX = px + pw / 2 + pWidth / 2;
  }
}

function checkEnemy(x, y, w, h) {
  if (
    piX + pWidth / 2 > x - w / 2 &&
    piX - pWidth / 2 < x + w / 2 &&
    piY + pHeight / 2 > y - h / 2 &&
    piY - pHeight / 2 < y + h / 2
  ) {
    die();
  }
}

function distToSegment(px, py, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  if (dx === 0 && dy === 0) {
    return dist(px, py, x1, y1);
  }

  var t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
  t = constrain(t, 0, 1);

  var closestX = x1 + t * dx;
  var closestY = y1 + t * dy;

  return dist(px, py, closestX, closestY);
}
