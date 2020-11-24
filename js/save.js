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