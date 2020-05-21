console.log("What are you doing here in the console?");
var points = 0;
var clickers = 0;
var factories = 0;
var portals = 0;
var cost1 = 25;
var cost2 = 200; //...
var cost3 = 15000;
var x = 0;
var y = 0;
var xCost = 100000;
var yCost = 100;
var tickpart = 0;
var tickspeed = 50;
var scaling = 1.1;
var genMult = 1;
var thicc = 0;
var visible = 0;
var multCost = 50;
var resetPoints = 0;
var message = 0;
const $ = id => document.getElementById(id)
const c = id => document.getElementsByClassName(id)

//ooh arrow function ^
function showElement(element) {
  $(element).style.display = "inline";
}

function hideElement(element) {
  $(element).style.display = "none";
}

function convertNumber() {
  if(x < 1 && y < 1) {
    $("number").innerHTML = "Number = " + Math.floor(points);
  } else if (x === 1 && y < 1) {
    $("number").innerHTML = "Number = " + "x+" + Math.floor(points);
  } else if (x > 1 && y < 1) {
    $("number").innerHTML = "Number = " + x + "x+" + Math.floor(points);
  } else if (y === 1) {
    $("number").innerHTML = "Number = " + "y+" + x + "x+" + Math.floor(points);
  } else if (y > 1) {
    $("number").innerHTML = "Number = " + y + "y+" + x + "x+" + Math.floor(points);
  }
}

function pointButton() {
  points += 1;
  convertNumber();
}

function convertToX() {
  if(points >= xCost){
    points -= xCost;
    x += 1;
    xCost *= 1.1;
    xCost = Math.round(xCost);
    convertNumber();
    $("xButton").innerHTML = "Get an x for " + xCost + " points";
  }
}

function convertToY () {
  if(x >= yCost){
    y += 1;
    yCost *= 1.15;
    yCost = Math.round(yCost);
    convertNumber();
  $("yButton").innerHTML = "Get a y for " + yCost + "x";
  }
}

function generation() {
  showElement("clickers");
  showElement("clickerButton");
  showElement("factories");
  showElement("factoryButton");
  showElement("portals");
  showElement("portalButton");
  if(visible === 1 && points > 99999){
    showElement("xButton"); 
  }else{
    hideElement("xButton");
  }
  if(x > 99){
    showElement("yButton"); 
  }else{
    hideElement("yButton");
  }
  hideElement("upg1");
  hideElement("upg2");
  hideElement("upg3");
  hideElement("upg4");
  if(thicc > 1){
    showElement("multButton");
    showElement("multText");
  }else{
    hideElement("multButton");
    hideElement("multText");
    hideElement("objectives");  
  }
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
}

function upgrades() {
  if(scaling === 1.1){
    showElement("upg1");
  }
  if(genMult === 1){
    showElement("upg2");
  }
  if(thicc <= 0){
    showElement("upg3");
  }
  if(thicc <= 1){
    showElement("upg4");
  }
  
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
  Array.from(c("reupg")).forEach(element => element.style.display = "none"); // el
  visible = 0;
}

function options() {
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("xButton");
  Array.from(c("upgradeButton")).forEach(element => element.style.display = "none");
  Array.from(c("reupg")).forEach(element => element.style.display = "none"); // this saves tons of space repeat that for other tabs
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
  visible = 0;// it does foreach and c gets all elements with a certain class
}
//what is "reupg"? i think yahtzee added those classes, for all reupgx elements it has that class
function achievements() {
  showElement("objectives");
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("xButton");
  Array.from(c("upgradeButton")).forEach(element => element.style.display = "none");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
  visible = 0;
}
function resetting() {
  Array.from(c("reupg")).forEach(element => element.style.display = "inline");
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("xButton"); // wetime to make button hover animation things what did you do tuba
  Array.from(c("upgradeButton")).forEach(element => element.style.display = "none");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
}

function init() {
  hideElement("xButton");
  hideElement("upgrades");
  hideElement("resetButton");
  hideElement("resetPoints");
  hideElement("br");
  hideElement("resetting");
  hideElement("objectives")
  generation();
}

init();

var objectives = [
  "1. Get your first Autoclicker",
  "2. Get your first Point Factory",
  "3. Get your first Point Portal",
  "4. Get an x",
  "5. Buy an upgrade",
  "6. Unlock the generator multiplier",
  "7. Reach 100,000,000 points",
  "8. Get a y",
  "9. Reset"
];

function spacing() {
  $("objectives").innerHTML = "";
  while(message < objectives.length){
    $("objectives").innerHTML = $("objectives").innerHTML + objectives[message] + "<br>";
    message += 1;
  }
}

//buggy ^

spacing();

var mainGameLoop = window.setInterval(function() {
  tickpart += 50
  if (tickpart>=tickspeed) {
    tickpart -= tickspeed
    loop(); // time to change the loop function to switches 
  }
}, 33);

function loop() {
  points += (clickers/33)*genMult;
  points += (factories/3.3)*genMult;
  points += (portals*30.303)*genMult;
  convertNumber();
  document.getElementById("resetButton").innerHTML = "Reset for " + Math.floor(y+(x/100)) + " reset points";
  if(points > 99999){
    visible = 1;
  }
  if(visible === 1 && points > 99999){
    showElement("xButton"); 
    showElement("upgrades");
  }
  if(x >= 100){
    showElement("yButton"); 
  }
  if(y >= 1){
    showElement("resetButton");
  }
  if(clickers === 1){
    message[0] = "1. Get your first Autoclicker (Completed)";
    spacing();
  }
  if(factories === 1){
    message[1] = "2. Get your first Point Factory (Completed)";
    spacing();
  }
  if(portals === 1){
    message[2] = "3. Get your first Point Portal (Completed)";
    spacing();
  }
  if(x === 1){
    message[3] = "4. Get an x (Completed)";
    spacing();
  }
  if(scaling === 1.06){
    message[4] = "5. Buy an upgrade (Completed)";
    spacing();
  }
  if(thicc === 2){
    message[5] = "6. Unlock the generator multiplier (Completed)";
    spacing();
  }
  if(points > 99999999){
    message[6] = "7. Reach 100,000,000 points (Completed)";
    spacing();
  }
  if(y === 1){
    message[7] = "8. Get a y (Completed)";
    spacing();
  }
  if(resetPoints > 0){
    message[8] = "9. Reset (Completed)";
    spacing();
  }
}

function buyClicker() {
  if(points >= cost1){
    points -= cost1;
    clickers += 1;
    cost1 *= scaling;
    cost1 = Math.round(cost1);
    convertNumber();
    $("clickers").innerHTML = "Autoclickers: " + clickers;
    $("clickerButton").innerHTML = "Buy for " + cost1 + " points";
  }
}

function buyFactory() {
  if(points >= cost2){
    points -= cost2;
    factories += 1;
    cost2 *= scaling;
    cost2 = Math.round(cost2);
    convertNumber();
    $("factories").innerHTML = "Point Factories: " + factories;
    $("factoryButton").innerHTML = "Buy for " + cost2 + " points";
  }
}

function buyPortal() {
  if(points >= cost3){
    points -= cost3;
    portals += 1;
    cost3 *= scaling;
    cost3 = Math.round(cost3);
    convertNumber();
    $("portals").innerHTML = "Point Portals: " + portals;
    $("portalButton").innerHTML = "Buy for " + cost3 + " points";
  }
}

function buyUpg1() {
  if(x >= 10){
    scaling = 1.06;
    hideElement("upg1");
  }
}

function buyUpg2() {
  if(x >= 20){
    genMult = 3;
    hideElement("upg2");
  }
}

function buyUpg3() {
  if(x >= 30){
    thicc = 1;
    xCost *= 0.5;
    hideElement("upg3");
    $("xButton").innerHTML = "Get an x for " + xCost + " points";
  }
}

function buyUpg4() {
  if(x >= 50){
    thicc = 2;
    hideElement("upg4");
  }
}

function buyMult() {
  if(x >= multCost){
    multCost += 5;
    genMult *= 1.6;
    genMult = Math.round(genMult);
    $("multText").innerHTML = "Current generator multiplier: " + genMult + "x";
    $("multButton").innerHTML = "Upgrade mutliplier for " + multCost + "x";
  }
}
//hmm oh i have an amazing idea to tear the code into pieces as in make it way smaller so uh what are the ones nvm
function reset() {
  showElement("resetPoints");
  showElement("br");
  showElement("resetting");
  resetPoints += Math.floor(y+(x/100));
  $("resetPoints").innerHTML = "Reset Points: " + resetPoints;
  points = 0;
  clickers = 0;
  factories = 0;
  portals = 0;
  cost1 = 25;
  cost2 = 200;
  cost3 = 15000;
  x = 0;
  y = 0;
  xCost = 100000;
  yCost = 100;
  tickpart = 0;
  tickspeed = 50;
  scaling = 1.1;
  genMult = 1;
  thicc = 0;
  visible = 0;
  multCost = 50;
}