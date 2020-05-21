var newsArray = [
  "placeholder",
  "placeholder 2",
  "placeholder 3",
  "Wait 5 hours for the update",
  "'OMG it's just a cookie clicker clone' -literally everyone",
  "At 69420 anti-points you unlock something really cool!",
  "@Pinglol#1337"
];
function showNews() {
  let message = Math.floor(Math.random() * newsArray.length);

  if(Math.round(Math.random(100,1)) == 100){
      $("newsTicker").innerHTML = "You have a 1% chance to get this news ticker. Woah!";
  }else{
      $("newsTicker").innerHTML = newsArray[message];
  }
}
function changeNews() {
  showNews();
}

//pinglol uhhhh