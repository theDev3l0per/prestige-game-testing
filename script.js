console.log("What are you doing here in the console?");
var points = 0;
var x = 0;
var y = 0;

function pointButton() {
  points += 1;
  document.getElementById("number").innerHTML = "Number = " + points;
}