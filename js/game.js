var game = require('./gamedata.json')
console.log("What are you doing here in the console?");


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