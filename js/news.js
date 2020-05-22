var newsArray = [
  "Thank you for playing Algebraic Progression!",
  "Wait 5 hours for the update",
  "'OMG it's just a cookie clicker clone' -literally everyone",
  "At 69420 anti-points you unlock something really cool!",
  "@Pinglol#1337",
  "Click, click, click...",
  "lol get rekt",
  "<p onclick=\"window.location.href=\"https://www.youtube.com/watch?v=DLzxrzFCyOs\"\">Click me!</p>",
  "You can't reach 1.79e308",
  "That's a lot of x's",
  "Algebraic Progression NGUd'^^-----++++",
  "It'll be 5 hours until the update",
  "Contains microtransaction repellent",
  "This is a bad game",
  "Thanks to TheMKeyHolder for helping (a lot)",
  "noice",
  "'i fixed the bug and it's now back' -randomtuba",
  "Do Alt+F4 for free Vbucks",
  "Somebody once told me that functions were gonna roll me",
  "Wait, how many news messages are there?",
  "Thanks for adding random_library.js",
  "*sigh* *sets up the camera* *gets fake tear into focus* I am super duper sorry for shouting 'Free Reset Points!' during an exam. The goal of my content is always to entertai-",
  "OMG HE ADDED MY NEWS TICKER WOAHHHHH",
  "[insert text here]",
  "showNews();",
  "Can you put an array inside of an array? -randomtuba",
  "how do i make a table -randomtuba",
  "Take the point portals from the shadow realm, and you're good to go!",
  "1e420.69",
  "Stop! Wait 5 hours",
  "randomtuba was slain by Xx_ThinkinW/Portalz420_xX using 'Buy for 15000 points'",
  "bruh moment",
  "Sometimes you just wanna [REDACTED] someone so hard they split into the fifteenth dimension",
  "Don't you hate when the message doesn't finish its sente",
  "Don't eat points. Eat paper instead.",
  "There isn't a discord server for this game yet, but we're working on it",
  "CHOCOLATE",
  "Whomst'd've'zh'bh'rh't'd've done this?!",
  "ono it broke again - TheMKeyHolder",
  "Is this good CSS or terrible CSS?",
  "ur not an epic gamer chad like me yuo noob",
  "pls like and scrubsibe for Algebraic Progression content",
  "'oops I broke it' -randomtuba",
  "Don't say that people shouldn't program. Don't say that this game is 'just a cookie clicker clone'. If you say both of those things, then fuck you.",
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  ":ripaarex:",
  "Can you enter "
];
function showNews() {
  let message = Math.floor(Math.random() * newsArray.length);

  if(Math.round(Math.random(100,1)) === 100){
      $("newsTicker").innerHTML = "You have a 1% chance to get this news ticker. Woah!";
  }else{
      $("newsTicker").innerHTML = newsArray[message];
  }
}
function changeNews() {
  showNews();
}
setInterval(showNews, 10000)
//pinglol uhhhh