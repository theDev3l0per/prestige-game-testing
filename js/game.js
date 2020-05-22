console.log("What are you doing here in the console?");
var game = {};
game.points = 0;
game.clickers = 0;
game.factories = 0;
game.portals = 0;
game.cost1 = 25;
game.cost2 = 200; //...
game.cost3 = 15000;
game.x = 0;
game.y = 0;
game.xCost = 100000;
game.yCost = 100;
game.tickpart = 0;
game.tickspeed = 50;
game.scaling = 1.1;
game.genMult = 1;
game.thicc = 0;
game.visible = 0;
game.multCost = 50;
game.resetPoints = 0;
game.timePlayed = 0;
let message = 0;
const $ = id => document.getElementById(id)
const c = id => document.getElementsByClassName(id)
const t = id => document.getElementsByTagName(id)
const D = thing => new Decimal(thing)
//ooh arrow function ^
function showElement(element) {
  $(element).style.display = "inline";
}

function hideElement(element) {
  $(element).style.display = "none";
}

function convertNumber() {
  if(game.x < 1 && game.y < 1) {
    $("number").innerHTML = "Number = " + Math.floor(game.points);
  } else if (game.x === 1 && game.y < 1) {
    $("number").innerHTML = "Number = " + "x+" + Math.floor(game.points);
  } else if (game.x > 1 && game.y < 1) {
    $("number").innerHTML = "Number = " + game.x + "x+" + Math.floor(game.points);
  } else if (game.y === 1) {
    $("number").innerHTML = "Number = " + "y+" + game.x + "x+" + Math.floor(game.points);
  } else if (game.y > 1) {
    $("number").innerHTML = "Number = " + game.y + "y+" + game.x + "x+" + Math.floor(game.points);
  }
}

function pointButton() {
  game.points += 1;
  convertNumber();
}

function convertToX() {
  if(game.points >= game.xCost){
    game.points -= game.xCost;
    game.x += 1;
    game.xCost *= 1.1;
    game.xCost = Math.round(game.xCost);
    convertNumber();
    $("xButton").innerHTML = "Get an x for " + game.xCost + " points";
  }
}

function convertToY () {
  if(game.x >= game.yCost){
    game.y += 1;
    game.yCost *= 1.15;
    game.yCost = Math.round(game.yCost);
    convertNumber();
  $("yButton").innerHTML = "Get a y for " + game.yCost + "x";
  }
}

function generation() {
  showElement("clickers");
  showElement("clickerButton");
  showElement("factories");
  showElement("factoryButton");
  showElement("portals");
  showElement("portalButton");
  if(game.visible === 1 && game.points > 99999){
    showElement("xButton"); 
  }else{
    hideElement("xButton");
  }
  if(game.x > 99){
    showElement("yButton"); 
  }else{
    hideElement("yButton");
  }
  hideElement("upg1");
  hideElement("upg2");
  hideElement("upg3");
  hideElement("upg4");
  if(game.thicc > 1){
    showElement("multButton");
    showElement("multText");
  }else{
    hideElement("multButton");
    hideElement("multText");
    hideElement("objectives");  
  }
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
  hideElement("save");
  hideElement("discord");
}

function upgrades() {
  if(game.scaling === 1.1){
    showElement("upg1");
  }
  if(game.genMult === 1){
    showElement("upg2");
  }
  if(game.thicc <= 0){
    showElement("upg3");
  }
  if(game.thicc <= 1){
    showElement("upg4");
  }
  
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
  hideElement("save");
  hideElement("discord");
  game.visible = 0;
}

function options() {
  showElement("save");
  showElement("discord");
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("xButton");
  Array.from(c("upgradeButton")).forEach(element => element.style.display = "none");
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
  game.visible = 0;
}

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
  hideElement("save");
  hideElement("discord");
  game.visible = 0;
}

function resetting() {
  Array.from(c("reupg")).forEach(element => element.style.display = "inline");
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("xButton");
  Array.from(c("upgradeButton")).forEach(element => element.style.display = "none");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
  hideElement("save");
  hideElement("discord");
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
  $("clickers").innerHTML = "Autoclickers: " + game.clickers;
  $("clickerButton").innerHTML = "Buy for " + game.cost1 + " points";
  $("factories").innerHTML = "Point Factories: " + game.factories;
  $("factoryButton").innerHTML = "Buy for " + game.cost2 + " points";
  $("portals").innerHTML = "Point Portals: " + game.portals;
  $("portalButton").innerHTML = "Buy for " + game.cost3 + " points";
  $("xButton").innerHTML = "Get an x for " + game.xCost + " points";
  $("yButton").innerHTML = "Get a y for " + game.yCost + "x";
  $("multText").innerHTML = "Current generator multiplier: " + game.genMult + "x";
  $("multButton").innerHTML = "Upgrade mutliplier for " + game.multCost + "x";
  $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
  if(game.resetPoints > 0){
    showElement("resetPoints");
    showElement("br");
    showElement("resetting");
  }
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
  game.tickpart += 50
  if (game.tickpart>=game.tickspeed) {
    game.tickpart -= game.tickspeed
    loop();
  }
}, 33);

function loop() {
  game.points += (game.clickers/33)*game.genMult;
  game.points += (game.factories/3.3)*game.genMult;
  game.points += (game.portals*30.303)*game.genMult;
  convertNumber();
  document.getElementById("resetButton").innerHTML = "Reset for " + Math.floor(game.y+(game.x/100)) + " reset points";
  if(game.points > 99999){
    game.visible = 1;
  }
  if(game.visible === 1 && game.points > 99999){
    showElement("xButton"); 
    showElement("upgrades");
  }
  if(game.x >= 100){
    showElement("yButton"); 
  }
  if(game.y >= 1){
    showElement("resetButton");
  }
  if(game.clickers === 1){
    message[0] = "1. Get your first Autoclicker (Completed)";
    spacing();
  }
  if(game.factories === 1){
    message[1] = "2. Get your first Point Factory (Completed)";
    spacing();
  }
  if(game.portals === 1){
    message[2] = "3. Get your first Point Portal (Completed)";
    spacing();
  }
  if(game.x === 1){
    message[3] = "4. Get an x (Completed)";
    spacing();
  }
  if(game.scaling === 1.06){
    message[4] = "5. Buy an upgrade (Completed)";
    spacing();
  }
  if(game.thicc === 2){
    message[5] = "6. Unlock the generator multiplier (Completed)";
    spacing();
  }
  if(game.points > 99999999){
    message[6] = "7. Reach 100,000,000 points (Completed)";
    spacing();
  }
  if(game.y === 1){
    message[7] = "8. Get a y (Completed)";
    spacing();
  }
  if(game.resetPoints > 0){
    message[8] = "9. Reset (Completed)";
    spacing();
  }
  
}

function buyClicker() {
  if(game.points >= game.cost1){
    game.points -= game.cost1;
    game.clickers += 1;
    game.cost1 *= game.scaling;
    game.cost1 = Math.round(game.cost1);
    convertNumber();
    $("clickers").innerHTML = "Autoclickers: " + game.clickers;
    $("clickerButton").innerHTML = "Buy for " + game.cost1 + " points";
  }
}

function buyFactory() {
  if(game.points >= game.cost2){
    game.points -= game.cost2;
    game.factories += 1;
    game.cost2 *= game.scaling;
    game.cost2 = Math.round(game.cost2);
    convertNumber();
    $("factories").innerHTML = "Point Factories: " + game.factories;
    $("factoryButton").innerHTML = "Buy for " + game.cost2 + " points";
  }
}

function buyPortal() {
  if(game.points >= game.cost3){
    game.points -= game.cost3;
    game.portals += 1;
    game.cost3 *= game.scaling;
    game.cost3 = Math.round(game.cost3);
    convertNumber();
    $("portals").innerHTML = "Point Portals: " + game.portals;
    $("portalButton").innerHTML = "Buy for " + game.cost3 + " points";
  }
}

function buyUpg1() {
  if(game.x >= 10){
    game.scaling = 1.06;
    hideElement("upg1");
  }
}

function buyUpg2() {
  if(game.x >= 20){
    game.genMult = 3;
    hideElement("upg2");
  }
}

function buyUpg3() {
  if(game.x >= 30){
    game.thicc = 1;
    game.xCost *= 0.5;
    hideElement("upg3");
    $("xButton").innerHTML = "Get an x for " + game.xCost + " points";
  }
}

function buyUpg4() {
  if(game.x >= 50){
    game.thicc = 2;
    hideElement("upg4");
  }
}

function buyMult() {
  if(game.x >= game.multCost){
    game.multCost += 5;
    game.genMult *= 1.6;
    game.genMult = Math.round(game.genMult);
    $("multText").innerHTML = "Current generator multiplier: " + game.genMult + "x";
    $("multButton").innerHTML = "Upgrade mutliplier for " + game.multCost + "x";
  }
}

function reset() {
  showElement("resetPoints");
  showElement("br");
  showElement("resetting");
  $("clickers").innerHTML = "Autoclickers: " + game.clickers;
  $("clickerButton").innerHTML = "Buy for " + game.cost1 + " points";
  $("factories").innerHTML = "Point Factories: " + game.factories;
  $("factoryButton").innerHTML = "Buy for " + game.cost2 + " points";
  $("portals").innerHTML = "Point Portals: " + game.portals;
  $("portalButton").innerHTML = "Buy for " + game.cost3 + " points";
  $("xButton").innerHTML = "Get an x for " + game.xCost + " points";
  $("yButton").innerHTML = "Get a y for " + game.yCost + "x";
  $("multText").innerHTML = "Current generator multiplier: " + game.genMult + "x";
  $("multButton").innerHTML = "Upgrade mutliplier for " + game.multCost + "x";
  game.resetPoints += Math.floor(game.y+(game.x/100));
  $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
  game.points = 0;
  game.clickers = 0;
  game.factories = 0;
  game.portals = 0;
  game.cost1 = 25;
  game.cost2 = 200;
  game.cost3 = 15000;
  game.x = 0;
  game.y = 0;
  game.xCost = 100000;
  game.yCost = 100;
  game.tickpart = 0;
  game.tickspeed = 50;
  game.scaling = 1.1;
  game.genMult = 1;
  game.thicc = 0;
  game.visible = 0;
  game.multCost = 50;
}