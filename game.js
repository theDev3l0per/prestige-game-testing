console.log("What are you doing here in the console?");
var points = 0;
var x = 0;
var y = 0;
var tickpart = 0;
var tickspeed = 1000;

function pointButton() {
  points += 1;
  document.getElementById("number").innerHTML = "Number = " + points;
}

var mainGameLoop = window.setInterval(function() {
  tickpart += 50
  if (tickpart>=tickspeed) {
    tickpart -= tickspeed
    loop();
  }
}, 50);

function loop() {
  if (tickspeed<50) {
    
  }
}