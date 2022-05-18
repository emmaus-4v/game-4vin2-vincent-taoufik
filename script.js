/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const KEY_Z = 90;
const KEY_X = 88;
const SPELEN = 1;
const GAMEOVER = 2;
const GAME = 3;
const PLAY = 4;
const INNIT = 5;
const NO = 6;
var spelStatus = SPELEN;
var roundStatus = GAME;
var roundStatus2 = INNIT;

var spelerX = 500; // x-positie van speler
var spelerY = 500; // y-positie van speler

let colourpoint = '#0000FF';

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
    c1y = getRandomInt(400 + 100)
    c2x = getRandomInt(1000 + 100)
    c2y = getRandomInt(400 + 100)
    c3x = getRandomInt(1000 + 100)
    c3y = getRandomInt(400 + 100)
    c4x = getRandomInt(1000 + 100)
    c4y = getRandomInt(400 + 100)
    c5x = getRandomInt(1000 + 100)
    c5y = getRandomInt(400 + 100)

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour = 'darkred' }
    else { circlecolour = 'darkblue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour2 = 'darkred' }
    else { circlecolour2 = 'darkblue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour3 = 'darkred' }
    else { circlecolour3 = 'darkblue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour4 = 'darkred' }
    else { circlecolour4 = 'darkblue' }

    var x = (getRandomInt(2));
    if (x === 1) { circlecolour5 = 'darkred' }
    else { circlecolour5 = 'darkblue' }

  }

  if (roundStatus2 = GAME) {

    fill(circlecolour);
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

  // vijand

  // kogel
};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond

  // touch the circles


  // kogel

  // speler


  if (keyIsDown(KEY_X)) {
    colourpoint = '#0000FF';
  };
  if (keyIsDown(KEY_Z)) {
    colourpoint = '#FF0000';
  };


  background('#060622');
  noStroke();
  noCursor();
  pointer();


  // punten en health

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

    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    background('#ff0000');
    textSize(340);
    text("sgsg", 400, 423);
  }
};

