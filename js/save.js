function stringify() {
  var i;
  let temp = game
  for(i in temp) {
    temp[i] = temp[i].toString() //dont worry it just doesnt know its in different file  
  }
  return temp
}
function save() {
  localStorage.save = btoa(JSON.stringify(stringify()))//yes you are 100% allowed to do this and it works 
}
function load() {
  game = atob()
}






// pls do confirmation for hard reset
  //all that takes is if(confirm("are you sure????")){hardReset()} i knowv 