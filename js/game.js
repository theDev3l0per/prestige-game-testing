const $ = id => document.getElementById(id)
const c = id => document.getElementsByClassName(id)
const t = id => document.getElementsByTagName(id)
const D = id => new Decimal(id)

var game = {};
game.tb = 0
game.points = 0;
game.incrementers = 1;
game.workers = 0;
game.banks = 0;
game.derivatives = 0; 
game.cost1 = 25;
game.cost2 = 200;
game.cost3 = 15000;
game.tickpart = 0;
game.tickspeed = 50;
game.b = 0,
game.tab = 1;
console.log("What are you doing here in the console?");

// so we are going to save the game in an object.

function showElement(element) { // shows element
  $(element).style.display = "inline";
}

function hideElement(element) { // hides element
  $(element).style.display = "none";
}

function init() { // only run this once 
 hideElement("tab3");
 if (game.b >= 0){
   showElement("tab3");
 }
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
  game.points += game.incrementers/30; //1 per sec
  game.points += game.workers/3; //10 per sec
  game.points += game.banks*10/3; //1000 per sec
  $("points").innerHTML = "Points: " + Math.floor(game.points);
  $("inc").innerHTML = "Incrementers: " + game.incrementers;
  $("workers").innerHTML = "Workers: " + game.workers;
  $("banks").innerHTML = "Banks: " + game.banks;
  $("incbuy").innerHTML = "Buy an incrementer for " + game.cost1 + " points";
  $("workerbuy").innerHTML = "Buy a worker for " + game.cost2 + " points";
  $("bankbuy").innerHTML = "Buy a bank for " + game.cost3 + " points";

  Array.from(document.querySelectorAll("body *")).forEach(elem => {
    if (!elem.getAttribute("display")) return elem;
    elem.style.display = eval(elem.getAttribute("display"))
      ? "inline-block"
      : "none";
  });
}

function tabSwitch(x) {
  switch (x) {
    case 1:
    game.tab = 1;
    break;
    case 2:
    game.tab = 2;
    break;
    case 3:
    game.tab = 3;
  }
}

function buyInc(x) {
  switch (x) {
    case 1:
    if (game.points > game.cost1){
      game.points -= game.cost1;
      game.incrementers += 1;
      game.cost1 = Math.round(game.cost1*1.15);
    }
    break;
    case 2:
    if (game.points > game.cost2){
      game.points -= game.cost2;
      game.workers += 1;
      game.cost2 = Math.round(game.cost2*1.15);
    }
    break;
    case 3:
    if (game.points > game.cost3){
      game.points -= game.cost3;
      game.banks += 1;
      game.cost3 = Math.round(game.cost3*1.15);
    }
    break;
  }
  
  function prestige() {
    game.points = 0;
    game.incrementers = 1;
    game.workers = 0;
    game.banks = 0;
    game.derivatives = 0; 
    game.cost1 = 25;
    game.cost2 = 200;
    game.cost3 = 15000;
    game.tickpart = 0;
    game.tickspeed = 50;
    game.tb += 1;
    game.b += Math.round(Math.log2(game.points/100000))
    showElement("tab3");
  }
}