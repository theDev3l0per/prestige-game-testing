function stringify() {
  var i;
  let temp = game
  for(i in temp) {
    temp[i] = temp[i].toString() //dont worry it just doesnt know its in different file  
  }
  return temp
}
function decimalify(save) {
  var i;
  let temp = save
  for(i in temp) {
    temp[i] = new Decimal(temp[i].toString()) //dont worry it just doesnt know its in different file  
  }
  return temp
}

function save() {
  localStorage.save = btoa(JSON.stringify(stringify()))//yes you are 100% allowed to do this and it works 
}
function load() {
  game = atob(JSON.parse(localStorage.save))
}






