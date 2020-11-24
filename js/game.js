var game = {};
game.points = 0;
game.incrementers = 1;
game.workers = 0;
game.banks = 0;
game.derivatives = 0; 
game.cost = 25;
game.cost2 = 200;
game.cost3 = 15000;
game.tickpart = 0;
game.tickspeed = 50;
game.b = 0,
game.tab = 1;
console.log("What are you doing here in the console?");

const $ = id => document.getElementById(id)
const c = id => document.getElementsByClassName(id)
const t = id => document.getElementsByTagName(id)
const D = id => new Decimal(id)

// so we are going to save the game in an object.

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
  game.points += game.incrementers/30;
  $("points").innerHTML = "Points: " + Math.floor(game.points);
  $("inc").innerHTML = "Incrementers: " + game.incrementers;
  
  
}