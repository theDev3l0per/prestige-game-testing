function loopAssign(x, y) {
  
    for (var key in y) {
        if (!y.hasOwnProperty(key)) continue;
        if (typeof y[key] == "object") {
            loopAssign(x[key],y[key])
        }
        else {
            x[key] = y[key]
        }
    }
    return x
}

function save() {
  if (typeof localStorage.game == "undefined") localStorage.game = JSON.stringify(game)
  localStorage.game = JSON.stringify(loopAssign(JSON.parse(localStorage.game), game))
}
// btw there's a save button in the game also autosave
function load() {
  if (typeof localStorage.game != "undefined") game = JSON.parse(localStorage.game)
}

function reset() {
  if (confirm("Are you sure you want to reset?")) {
    var game = {};
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
    game.b = 0;
    game.tab = 1;
    save();
    load();
  }
}