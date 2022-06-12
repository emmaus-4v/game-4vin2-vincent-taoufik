/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var img;
const KEY_Z = 90;
const KEY_X = 88;
const KEY_SPACE = 32;
const ZERO = 48;
const SPELEN = 1;
const GAMEOVER = 2;
const GAME = 3;
const PLAY = 4;
const MENU = 69;
const INNIT = 5;
const NO = 6;
var subscore = 0;
var score = 1500;
var roundq = 0;
var spelStatus = MENU;
var roundStatus = GAME;
var roundStatus2 = INNIT;
var cooldown = 0;

var c1x = 11
var c1y = 12
var c2x = 13
var c2y = 14
var c3x = 15
var c3y = 16
var c4x = 17
var c4y = 18
var c5x = 19
var c5y = 20

var circlecolour1a = 21
var circlecolour2a = 22
var circlecolour3a = 23
var circlecolour4a = 24
var circlecolour5a = 25

var spelerX = 500; // x-positie van speler
var spelerY = 500; // y-positie van speler

let colourpoint = 'blue';

var pointer = function () {
  noStroke();
  fill(colourpoint);
  ellipse(mouseX, mouseY, 30, 30);
  fill('#ffffff');
  ellipse(mouseX, mouseY, 20, 20);
}



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */


var circles = function () {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  if (roundStatus2 === INNIT) {
    c1x = getRandomInt(1000 + 100)
    c1y = getRandomInt(600 + 100)
    c2x = getRandomInt(1000 + 100)
    c2y = getRandomInt(600 + 100)
    c3x = getRandomInt(1000 + 100)
    c3y = getRandomInt(600 + 100)
    c4x = getRandomInt(1000 + 100)
    c4y = getRandomInt(600 + 100)
    c5x = getRandomInt(1000 + 100)
    c5y = getRandomInt(600 + 100)

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour1 = 'darkred'; circlecolour1a = 'red' }
    else { circlecolour1 = 'darkblue'; circlecolour1a = 'blue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour2 = 'darkred'; circlecolour2a = 'red' }
    else { circlecolour2 = 'darkblue'; circlecolour2a = 'blue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour3 = 'darkred'; circlecolour3a = 'red' }
    else { circlecolour3 = 'darkblue'; circlecolour3a = 'blue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour4 = 'darkred'; circlecolour4a = 'red' }
    else { circlecolour4 = 'darkblue'; circlecolour4a = 'blue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour5 = 'darkred'; circlecolour5a = 'red' }
    else { circlecolour5 = 'darkblue'; circlecolour5a = 'blue' }

    roundStatus2 = GAME
  }

  if (roundStatus2 = GAME) {

    fill(circlecolour1);
    ellipse(c1x, c1y, 60, 60);

    fill(circlecolour2);
    ellipse(c2x, c2y, 60, 60);

    fill(circlecolour3);
    ellipse(c3x, c3y, 60, 60);

    fill(circlecolour4);
    ellipse(c4x, c4y, 60, 60);

    fill(circlecolour5);
    ellipse(c5x, c5y, 60, 60);

    stroke('#ffffff');

  }

  // speler

  fill('white')
  textSize(20);
  text('Resterende Tijd: ' + score / 50, 20, 30);
  text('Resterende Golven: ' + (5 - subscore), 20, 70);
  // vijand

  // kogel
};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {


  var c1xa = (c1x - 25);
  var c1ya = (c1y - 25);
  var c1xb = (c1x + 25);
  var c1yb = (c1y + 25);
  var c2xa = (c2x - 25);
  var c2ya = (c2y - 25);
  var c2xb = (c2x + 25);
  var c2yb = (c2y + 25);
  var c3xa = (c3x - 25);
  var c3ya = (c3y - 25);
  var c3xb = (c3x + 25);
  var c3yb = (c3y + 25);
  var c4xa = (c4x - 25);
  var c4ya = (c4y - 25);
  var c4xb = (c4x + 25);
  var c4yb = (c4y + 25);
  var c5xa = (c5x - 25);
  var c5ya = (c5y - 25);
  var c5xb = (c5x + 25);
  var c5yb = (c5y + 25);

  if (mouseX > c1xa && mouseY > c1ya && mouseX < c1xb &&
    mouseY < c1yb && colourpoint == circlecolour1a) {
    c1x = 5000
    roundq = roundq + 1
  }

  if (mouseX > c2xa && mouseY > c2ya && mouseX < c2xb &&
    mouseY < c2yb && colourpoint == circlecolour2a) {
    c2x = 5000
    roundq = roundq + 1
  }

  if (mouseX > c3xa && mouseY > c3ya && mouseX < c3xb &&
    mouseY < c3yb && colourpoint == circlecolour3a) {
    c3x = 5000
    roundq = roundq + 1
  }

  if (mouseX > c4xa && mouseY > c4ya && mouseX < c4xb &&
    mouseY < c4yb && colourpoint == circlecolour4a) {
    c4x = 5000
    roundq = roundq + 1
  }

  if (mouseX > c5xa && mouseY > c5ya && mouseX < c5xb &&
    mouseY < c5yb && colourpoint == circlecolour5a) {
    c5x = 5000
    roundq = roundq + 1
  }
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health
  if (roundq === 5) {
    roundStatus2 = INNIT
    roundq = 0
    subscore = subscore + 1
  }


};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond

  if (keyIsDown(KEY_X)) {
    colourpoint = 'blue';
    score = score - 10
  };
  if (keyIsDown(KEY_Z)) {
    colourpoint = 'red';
  };


  background('#001018');
  noStroke();
  noCursor();
  pointer();


  // punten en health

  if (spelStatus = SPELEN) {
    score = score - 1
  }

  if (score < 0) {
    spelStatus = GAMEOVER
  }
}

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...

  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  console.log("setup");
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('#060622');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    verwerkBotsing();
    tekenAlles();
    circles();
    pointer();

    if (subscore === 6) {
      spelStatus = GAMEOVER
    }

  }
  if (spelStatus === GAMEOVER) {
    textSize(200);

    if (score > 0) {
      background('#00ff00');
      text('score', 400, 223);
      text(score, 400, 423);
      textSize(20);
    }
    else {
      background('#ff0000');
      text('Tijd is op!', 400, 423)
    }
    textSize(12)
    text('Druk op "SPATIE" om opnieuw te spelen', 400, 500)

    if (keyIsDown(KEY_SPACE))
      spelStatus = MENU
      cooldown = 100

  }

  if (spelStatus === MENU) {
   
 function preload() {
  img = loadImage('Iris.png');

 }
  
 image (img);




    textSize(16)
    background('pink')
    fill('white')
    textSize(50)
    text('Welkom bij IRIS!', 460, 300)

    rect(100, 400, 400, 200)
    fill('black')
    textSize(20)
    text('Druk op "SPATIE" om het spel te starten', 125, 500)

    fill('white')
    rect(800, 400, 370, 200)
    fill('black')
    textSize(20)
    text('Druk op "NUL(0)" voor uitleg', 860, 500)

    if (cooldown > 0) {
      cooldown = cooldown - 1
    }

    if (keyIsDown(KEY_SPACE) && cooldown === 0) {
      spelStatus = SPELEN;
      subscore = 0;
      score = 1500;
      roundq = 0;
      roundStatus2 = INNIT;
    }

    if (keyIsDown(ZERO)) {
      text('Beweeg je muis over de bolletjes met de correspondere kleur. Je verandert de kleur van je muis met "Z" voor Rood en "X" voor Blauw. VEEL SUCCES!', 100, 200)
    }
  }
};

