console.log("What are you doing here in the console?");
var game = {};
game.points = 0;
game.incrementers = 0;
game.cost = 25;
game.cost2 = 200;
game.tickpart = 50;
game.tickspeed = 1000;
game.b = 0;

const $ = id => document.getElementById(id)
const c = id => document.getElementsByClassName(id)
const t = id => document.getElementsByTagName(id)
const D = id => new Decimal(id)
//ooh arrow function ^

function showElement(element) { // shows element
  $(element).style.display = "inline";
}

function hideElement(element) { // hides element
  $(element).style.display = "none";
}

function init() { // only run this once 
 
}

init();

var mainGameLoop = window.setInterval(function() { // runs the loop
  game.tickpart += 50
  if (game.tickpart>=game.tickspeed) {
    game.tickpart -= game.tickspeed
    loop();
  }
}, 33);

function loop() { // don't change this stuff unless you know what you're doing
  
}