console.log("What are you doing here in the console?");
var game = {};
game.points = 0; // points
game.clickers = 0; // autoclicker amount
game.factories = 0; // point factory amount
game.portals = 0; // point portal amount
game.cost1 = 25; // autoclicker cost
game.cost2 = 200; // point factory cost
game.cost3 = 15000; // point portal cost
game.x = 0; // x's
game.y = 0; // y's
game.xCost = 100000; // x cost
game.yCost = 100; // y cost
game.tickpart = 0; // used with tickspeed
game.tickspeed = 50; // tickspeed
game.scaling = 1.1; // cost scaling
game.genMult = 1; // generator multiplier
game.thicc = 0; // used for upgrade displaying
game.visible = 0; // useless
game.multCost = 50; // generator multiplier cost
game.resetPoints = 0; // reset points
game.timePlayed = 0; // time online
game.rtu11 = 0; // detects when rtu11 is bought
game.rtu12 = 0; // detects when rtu12 is bought
game.rtu13 = 0; // detects when rtu13 is bought
game.rtu14 = 0; // detects when rtu14 is bought
game.rtu21 = 0; // detects when rtu21 is bought
game.rtu22 = 0; // detects when rtu22 is bought
game.rtu23 = 0; // detects when rtu23 is bought
game.rtu24 = 0; // detects when rtu24 is bought
game.rtu31 = 0; // detects when rtu31 is bought
game.rtu32 = 0; // detects when rtu32 is bought
game.rtu33 = 0; // detects when rtu33 is bought
game.rtu34 = 0; // detects when rtu34 is bought
game.rtu41 = 0; // detects when rtu41 is bought
game.rtu42 = 0; // detects when rtu42 is bought
game.rtu43 = 0; // detects when rtu43 is bought
game.rtu44 = 0; // detects when rtu44 is bought
game.timePlayedMult = 1; // multiplier to generators
game.ppMult = 1; // multiplier to generators
game.yMult = 1; // multiplier to generators
game.resetUnlocked = 0; // used for displaying upon refresh
game.sacY = 0; // sacrificed y's
game.xPerMin = 0; // x per minute via coordinate plane
game.sacYCost = 1; // cost to get +1 (or +3) x per minute
let message = 0;
const $ = id => document.getElementById(id)
const c = id => document.getElementsByClassName(id)
const t = id => document.getElementsByTagName(id)
const D = thing => new Decimal(thing)
//ooh arrow function ^
function showElement(element) { // shows element
  $(element).style.display = "inline";
}

function hideElement(element) { // hides element
  $(element).style.display = "none";
}

function convertNumber() { // very important, used for displaying number
  if(game.x < 1 && game.y < 1) {
    $("number").innerHTML = "Number = " + Math.floor(game.points);
  } else if (Math.floor(game.x) === 1 && game.y < 1) {
    $("number").innerHTML = "Number = " + "x+" + Math.floor(game.points);
  } else if (game.x > 1 && game.y < 1) {
    $("number").innerHTML = "Number = " + Math.floor(game.x) + "x+" + Math.floor(game.points);
  } else if (game.y === 1) {
    $("number").innerHTML = "Number = " + "y+" + Math.floor(game.x) + "x+" + Math.floor(game.points);
  } else if (game.y > 1) {
    $("number").innerHTML = "Number = " + game.y + "y+" + Math.floor(game.x) + "x+" + Math.floor(game.points);
  }
}

function pointButton() { // click function
  game.points += 1;
  convertNumber();
}

function convertToX() { // buy x function
  if(game.points >= game.xCost){
    game.points -= game.xCost;
    game.x += 1;
    if(game.rtu13 === 1){
      game.xCost *= 1.08; 
    }else{
      game.xCost *= 1.1;
    }
    game.xCost = Math.round(game.xCost);
    convertNumber();
    $("xButton").innerHTML = "Get an x for " + game.xCost + " points";
  }
}

function convertToY () { // buy y function
  if(game.x >= game.yCost){
    game.y += 1;
    if(game.rtu23 === 1){
      game.yCost *= 1.1;
    }else{
      game.yCost *= 1.15;
    }
    game.yCost = Math.round(game.yCost);
    convertNumber();
  $("yButton").innerHTML = "Get a y for " + game.yCost + "x";
  }
}

// tab functions
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
  Array.from(c("reupg2")).forEach(element => element.style.display = "none");
  hideElement("save");
  hideElement("discord");
  Array.from(c("subtab")).forEach(element => element.style.display = "none");
  Array.from(c("cplane")).forEach(element => element.style.display = "none");
  hideElement("theme");
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
  Array.from(c("reupg2")).forEach(element => element.style.display = "none");
  hideElement("save");
  hideElement("discord");
  Array.from(c("subtab")).forEach(element => element.style.display = "none");
  Array.from(c("cplane")).forEach(element => element.style.display = "none");
  hideElement("theme");
  game.visible = 0;
}

function options() {
  showElement("save");
  showElement("discord");
  showElement("theme");
  Array.from(c("buildingButton")).forEach(element => element.style.display = "none");
  Array.from(c("building")).forEach(element => element.style.display = "none");
  hideElement("xButton");
  Array.from(c("upgradeButton")).forEach(element => element.style.display = "none");
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
  Array.from(c("reupg2")).forEach(element => element.style.display = "none");
  hideElement("yButton");
  hideElement("multButton");
  hideElement("multText");
  hideElement("objectives");
  Array.from(c("subtab")).forEach(element => element.style.display = "none");
  Array.from(c("cplane")).forEach(element => element.style.display = "none");
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
  Array.from(c("reupg2")).forEach(element => element.style.display = "none");
  hideElement("save");
  hideElement("discord");
  Array.from(c("subtab")).forEach(element => element.style.display = "none");
  Array.from(c("cplane")).forEach(element => element.style.display = "none");
  hideElement("theme");
  game.visible = 0;
}

function resetting() {
  showElement("subtab1");
  if(game.rtu14 === 1){
    showElement("subtab2");
  }
  Array.from(c("reupg")).forEach(element => element.style.display = "inline");
  Array.from(c("reupg2")).forEach(element => element.style.display = "inline");
  Array.from(c("cplane")).forEach(element => element.style.display = "none");
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
  hideElement("theme");
}

function cplane() {
  Array.from(c("subtab")).forEach(element => element.style.display = "inline");
  Array.from(c("cplane")).forEach(element => element.style.display = "inline");
  Array.from(c("reupg")).forEach(element => element.style.display = "none");
  Array.from(c("reupg2")).forEach(element => element.style.display = "none");
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
  hideElement("theme");
}

function init() { // only run this once 
  // don't change this stuff unless you know what you're doing
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
  $("cplane").innerHTML = "You are generating " + game.xPerMin + "x per minute. <br> Sacrificed y's: " + game.sacY;
  if(game.multCost >= 300){
      game.multCost = 100000;
      $("multText").innerHTML = "Current generator multiplier: " + game.genMult + "x";
      $("multButton").innerHTML = "Generator multiplier has been maxed out";
      $("multButton").className = "multButton2";
    }
  if(Math.floor(game.sacYCost) === 1){
    $("sacrifice").innerHTML = "Sacrifice a y in exchange for x generation"; 
  }else{
    $("sacrifice").innerHTML = "Sacrifice " + Math.floor(game.sacYCost) + "y in exchange for x generation";
  }
  
  if(game.resetUnlocked === 1){
    showElement("resetPoints");
    showElement("br");
    showElement("resetting");
  }
  if(game.resetPoints > 0) {
    game.resetUnlocked = 1
  }
  if(game.rtu11 === 1){
    $("reupg11").className = "reupg2"; 
  }
  if(game.rtu12 === 1){
    $("reupg12").className = "reupg2";
  }
  if(game.rtu13 === 1){
    $("reupg13").className = "reupg2";
  }
  if(game.rtu14 === 1){
    $("reupg14").className = "reupg2";
  }
  if(game.rtu21 === 1){
    $("reupg21").className = "reupg2";
  }
  if(game.rtu22 === 1){
    $("reupg22").className = "reupg2";
  }
  if(game.rtu23 === 1){
    $("reupg23").className = "reupg2";
  }
  if(game.rtu24 === 1){
    $("reupg24").className = "reupg2";
  }
  if(game.rtu31 === 1){
    $("reupg31").className = "reupg2";
  }
  if(game.rtu32 === 1){
    $("reupg32").className = "reupg2";
  }
  if(game.rtu33 === 1){
    $("reupg33").className = "reupg2";
  }
  if(game.rtu34 === 1){
    $("reupg34").className = "reupg2";
  }
  if(game.rtu41 === 1){
    $("reupg41").className = "reupg2";
  }
  if(game.rtu42 === 1){
    $("reupg42").className = "reupg2";
  }
  if(game.rtu43 === 1){
    $("reupg43").className = "reupg2";
  }
  if(game.rtu44 === 1){
    $("reupg44").className = "reupg2";
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
  game.timePlayed += 0.033;
  if(game.rtu11 === 1 && game.timePlayed >= 1){
    game.timePlayedMult = Math.log(game.timePlayed);
  }else{
    game.timePlayedMult = 1;
  }
  if(game.rtu12 === 1 && game.clickers >= 1){
    game.ppMult = Math.log(game.clickers);
  }else{
    game.ppMult = 1;
  }
  if(game.rtu33 === 1 && game.y >= 1){
    game.yMult = Math.log(game.y);
  }else{
    game.yMult = 1;
  }
  game.points += (game.clickers/33)*game.genMult*game.timePlayedMult;
  game.points += (game.factories/3.3)*game.genMult*game.timePlayedMult;
  game.points += (game.portals*30.303)*game.genMult*game.timePlayedMult*game.ppMult;
  game.x += (game.xPerMin/1980)
  convertNumber();
  if(game.rtu31 === 1){
    $("resetButton").innerHTML = "Reset for " + Math.floor((game.y+(game.x/100))*Math.log((game.y+(game.x/100)))) + " reset points"; 
  }else{
    $("resetButton").innerHTML = "Reset for " + Math.floor(game.y+(game.x/100)) + " reset points";
  }
  if(game.points > 99999){
    game.visible = 1;
  }
  if(game.resetUnlocked === 1){
    showElement("resetPoints");
    showElement("br");
    showElement("resetting");
  }
  if(game.resetPoints > 0) {
    game.resetUnlocked = 1
  }
  if(game.visible === 1 && game.points > 99999 || game.x >= 1){
    showElement("xButton"); 
    showElement("upgrades");
  }
  if(game.x >= 100){
    showElement("yButton"); 
  }
  if(game.y >= 1){
    showElement("resetButton");
  }
}

function buyClicker() { // buy autoclicker function
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

function buyFactory() { // buy point factory function
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

function buyPortal() { // buy point portal function
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

// upgrade functions
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

function buyMult() { // buy generator multiplier function
  if(game.x >= game.multCost){
    if(game.rtu24 === 1){
      game.multCost += 3;
    }else{
      game.multCost += 5;
    }
    if(game.rtu21 === 1){
      game.genMult *= 1.3;
    }else{
      game.genMult *= 1.25; 
    }
    game.genMult = Math.round(game.genMult);
    $("multText").innerHTML = "Current generator multiplier: " + game.genMult + "x";
    $("multButton").innerHTML = "Upgrade mutliplier for " + game.multCost + "x";
    if(game.multCost >= 300){
      game.multCost = 100000;
      $("multText").innerHTML = "Current generator multiplier: " + game.genMult + "x";
      $("multButton").innerHTML = "Generator multiplier has been maxed out";
      $("multButton").className = "multButton2";
    }
  }
}

function newPrestigeLayerWhen() {
 console.log("Take a screenshot of this message and you will get a special role!") 
}

function buyReupg(id) { // don't change this stuff unless you know what you're doing
  switch(id) {
    case 11:
      if(game.resetPoints >= 2 && game.rtu11 === 0){
        game.resetPoints -= 2;
        game.rtu11 = 1;
        $("reupg11").className = "reupg2";
        $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 12:
      if(game.resetPoints >= 4 && game.rtu12 === 0){
        game.resetPoints -= 4;
        game.rtu12 = 1;
        $("reupg12").className = "reupg2";
        $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 13:
      if(game.resetPoints >= 8 && game.rtu13 === 0){
          game.resetPoints -= 8;
          game.rtu13 = 1;
          $("reupg13").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 14:
      if(game.resetPoints >= 16 && game.rtu14 === 0){
          game.resetPoints -= 16;
          game.rtu14 = 1;
          $("reupg14").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
          showElement("subtab2");
      }
    break;
    case 21:
      if(game.resetPoints >= 14 && game.rtu21 === 0){
          game.resetPoints -= 14;
          game.rtu21 = 1;
          $("reupg21").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 22:
      if(game.resetPoints >= 30 && game.rtu22 === 0){
          game.resetPoints -= 30;
          game.rtu22 = 1;
          $("reupg22").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 23:
      if(game.resetPoints >= 40 && game.rtu23 === 0){
          game.resetPoints -= 40;
          game.rtu23 = 1;
          $("reupg23").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 24:
      if(game.resetPoints >= 50 && game.rtu24 === 0){
          game.resetPoints -= 50;
          game.rtu24 = 1;
          $("reupg24").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 31:
      if(game.resetPoints >= 160 && game.rtu31 === 0){
          game.resetPoints -= 160;
          game.rtu31 = 1;
          $("reupg31").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 32:
      if(game.resetPoints >= 160 && game.rtu32 === 0){
          game.resetPoints -= 160;
          game.rtu32 = 1;
          $("reupg32").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
      }
    break;
    case 33:
      if(game.resetPoints >= 180 && game.rtu33 === 0){
          game.resetPoints -= 180;
          game.rtu33 = 1;
          $("reupg33").className = "reupg2";
          $("resetPoints").innerHTML = "Reset Points: " + game.resetPoints;
          game.xPerMin *= 2;
          $("cplane").innerHTML = "You are generating " + game.xPerMin + "x per minute. <br> Sacrificed y's: " + game.sacY;
      }
    break;
  }
}

function sacrificeY() { // used for coordinate plane
  if(game.y >= Math.floor(game.sacYCost)){
    game.y -= Math.floor(game.sacYCost);
    convertNumber();
    game.sacY += Math.floor(game.sacYCost);
    game.sacYCost *= 1.1;
    if(game.rtu32 === 1){
      game.xPerMin += 3;
    }else{
      game.xPerMin += 1;
    }
    $("cplane").innerHTML = "You are generating " + game.xPerMin + "x per minute. <br> Sacrificed y's: " + game.sacY;
    if(Math.floor(game.sacYCost) === 1){
      $("sacrifice").innerHTML = "Sacrifice a y in exchange for x generation"; 
    }else{
      $("sacrifice").innerHTML = "Sacrifice " + Math.floor(game.sacYCost) + "y in exchange for x generation";
    }
  }
}

function changeTheme(theme) { // theme change function
  switch(theme) {
    case 'light':
      $("style").href = "stylesheets/Dark.css";
      $("theme").innerHTML = "Switch Theme (Currently Dark)"
      $("theme").onclick = () => changeTheme('dark');
    break;
    case 'dark':
      $("style").href = "stylesheets/Classic.css";
      $("theme").innerHTML = "Switch Theme (Currently Classic)"
      $("theme").onclick = () => changeTheme('classic');
    break;
    case 'classic':
      $("style").href = "stylesheets/Void.css";
      $("theme").innerHTML = "Switch Theme (Currently Void)"
      $("theme").onclick = () => changeTheme('void');
    break;
    case 'void':
      $("style").href = "stylesheets/NoCss.css";
      $("theme").innerHTML = "Switch Theme (Currently NoCSS)"
      $("theme").onclick = () => changeTheme('nocss');
    break;
    case 'nocss':
      $("style").href = "stylesheets/Light.css";
      $("theme").innerHTML = "Switch Theme (Currently Light)"
      $("theme").onclick = () => changeTheme('light');
    break;
  }
}

function reset() { // reset function
  showElement("resetPoints");
  showElement("br");
  showElement("resetting");
  hideElement("resetButton");
  if(game.rtu31 === 1){
    game.resetPoints += Math.floor((game.y+(game.x/100))*Math.log((game.y+(game.x/100)))); 
  }else{
    game.resetPoints += Math.floor(game.y+(game.x/100));
  }
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
  if(game.rtu22 === 0){
    game.scaling = 1.1;
    game.genMult = 1;
    game.thicc = 0;
  }else if(game.rtu22 === 1){
    game.genMult = 3;
  }
  game.visible = 0;
  game.multCost = 50;
  $("multButton").className = "multButton";
  $("clickerButton").innerHTML = "Buy for " + game.cost1 + " points";
  $("clickers").innerHTML = "Autoclickers: " + game.clickers;
  $("factoryButton").innerHTML = "Buy for " + game.cost2 + " points";
  $("factories").innerHTML = "Point Factories: " + game.factories;
  $("portalButton").innerHTML = "Buy for " + game.cost3 + " points";
  $("portals").innerHTML = "Point Portals: " + game.portals;
  $("xButton").innerHTML = "Get an x for " + game.xCost + " points";
  $("yButton").innerHTML = "Get a y for " + game.yCost + "x";
  $("multText").innerHTML = "Current generator multiplier: 3x";
  $("multButton").innerHTML = "Upgrade mutliplier for " + game.multCost + "x";
  generation();
}
