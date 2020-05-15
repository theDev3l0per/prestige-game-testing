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
var xCost = 100000;
var yCost = 100;
var tickpart = 0;
var tickspeed = 50;
var scaling = 1.1;
var genMult = 1;
var thicc = 0;
var visible = 0;
var multCost = 50;

function showElement(element) {
  document.getElementById(element).style.display = "inline";
}

function hideElement(element) {
  document.getElementById(element).style.display = "none";
}

function convertNumber() {
  if(x < 1 && y < 1) {
    document.getElementById("number").innerHTML = "Number = " + Math.floor(points);
  } else if (x === 1 && y < 1) {
    document.getElementById("number").innerHTML = "Number = " + "x+" + Math.floor(points);
  } else if (x > 1 && y < 1) {
    document.getElementById("number").innerHTML = "Number = " + x + "x+" + Math.floor(points);
  } else if (y === 1) {
    document.getElementById("number").innerHTML = "Number = " + "y+" + x + "x+" + Math.floor(points);
  } else if (y > 1) {
    document.getElementById("number").innerHTML = "Number = " + y + "y+" + x + "x+" + Math.floor(points);
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
    document.getElementById("xButton").innerHTML = "Get an x for " + xCost + " points";
  }
}

function convertToY () {
  if(x >= yCost){
    y += 1;
    yCost *= 1.15;
    yCost = Math.round(yCost);
    convertNumber();
    document.getElementById("yButton").innerHTML = "Get a y for " + yCost + "x";
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
  }
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
  hideElement("clickers");
  hideElement("clickerButton");
  hideElement("factories");
  hideElement("factoryButton");
  hideElement("portals");
  hideElement("portalButton");
  hideElement("multButton");
  hideElement("multText");
  visible = 0;
}

function options() {
  hideElement("clickers");
  hideElement("clickerButton");
  hideElement("factories");
  hideElement("factoryButton");
  hideElement("portals");
  hideElement("portalButton");
  hideElement("xButton");
  hideElement("upg1");
  hideElement("upg2");
  hideElement("upg3");
  hideElement("upg4");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  visible = 0;
}

function achievements() {
  hideElement("clickers");
  hideElement("clickerButton");
  hideElement("factories");
  hideElement("factoryButton");
  hideElement("portals");
  hideElement("portalButton");
  hideElement("xButton");
  hideElement("upg1");
  hideElement("upg2");
  hideElement("upg3");
  hideElement("upg4");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  visible = 0;
}

function init() {
  hideElement("xButton");
  hideElement("upgrades")
  generation();
}

init();

var mainGameLoop = window.setInterval(function() {
  tickpart += 50
  if (tickpart>=tickspeed) {
    tickpart -= tickspeed
    loop();
  }
}, 33);

function loop() {
  points += (clickers/33)*genMult;
  points += (factories/3.3)*genMult;
  points += (portals*30.303)*genMult;
  convertNumber();
  if(points > 99999){
    visible = 1;
  }
  if(visible === 1 && points > 99999){
    showElement("xButton"); 
    showElement("upgrades");
  }
  if(x > 99){
    showElement("yButton"); 
  }
}

function buyClicker() {
  if(points >= cost1){
    points -= cost1;
    clickers += 1;
    cost1 *= scaling;
    cost1 = Math.round(cost1);
    convertNumber();
    document.getElementById("clickers").innerHTML = "Autoclickers: " + clickers;
    document.getElementById("clickerButton").innerHTML = "Buy for " + cost1 + " points";
  }
}

function buyFactory() {
  if(points >= cost2){
    points -= cost2;
    factories += 1;
    cost2 *= scaling;
    cost2 = Math.round(cost2);
    convertNumber();
    document.getElementById("factories").innerHTML = "Point Factories: " + factories;
    document.getElementById("factoryButton").innerHTML = "Buy for " + cost2 + " points";
  }
}

function buyPortal() {
  if(points >= cost3){
    points -= cost3;
    portals += 1;
    cost3 *= scaling;
    cost3 = Math.round(cost3);
    convertNumber();
    document.getElementById("portals").innerHTML = "Point Portals: " + portals;
    document.getElementById("portalButton").innerHTML = "Buy for " + cost3 + " points";
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
    document.getElementById("xButton").innerHTML = "Get an x for " + xCost + " points";
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
    document.getElementById("multText").innerHTML = "Current generator multiplier: " + genMult + "x";
    document.getElementById("multButton").innerHTML = "Upgrade mutliplier for " + multCost + "x";
  }
}