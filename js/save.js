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
  if (typeof localStorage.game == "undefined") localStorage.game = JSON.stringify()
  if (typeof game != "undefined") localStorage.game = loopAssign(localStorage.game, game)
}

function load() {
  if (typeof localStorage.game != "undefined") game = localStorage.game
}