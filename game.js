console.log("What are you doing here in the console?");
var points = 0;
var clickers = 0;
var factories = 0;
var portals = 0;
var cost1 = 25;
var cost2 = 200;
var cost3 = 15000;
var x = 0;
var y = 0;
var tickpart = 0;
var tickspeed = 50;

function pointButton() {
  points += 1;
  document.getElementById("number").innerHTML = "Number = " + Math.floor(points);
}

var mainGameLoop = window.setInterval(function() {
  tickpart += 50
  if (tickpart>=tickspeed) {
    tickpart -= tickspeed
    loop();
  }
}, 50);

function loop() {
  points += clickers/20;
  points += factories/2;
  points += portals*50;
  document.getElementById("number").innerHTML = "Number = " + Math.floor(points);
}