const Decimal = require("../break_eternity.js")

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
  localStorage.game = loopAssign(localStorage.game, game)
}

function load() {
  if (localStorage.game)
}