var newsArray;

function updateNewsArray() {
newsArray = [
    ["Welcome to Prestige Game",true,"a1"],
    ["Thank you for playing Prestige Game!",true,"a2"],
    ["Wait 5 hours for the update",true,"a3"],
    ["'OMG it's just a cookie clicker clone' -literally everyone",true,"a4"],
    ["At 69420 anti-points you unlock something really cool!",true,"a5"],
    ["@Pinglol#1337",true,"a6"],
    ["'no' -randomtuba",true,"a7"],
    [":kekw:",true,"a8"],
    ["'thonkeres' -TheMKeyHolder",true,"a9"],
    ["Vue fucked up everything, and then didn't",true,"a10"],
    ["To-do: add a click button",true,"a11"],
    ["lol get rekt",true,"a12"],
    ["<p onclick=\"window.location.href=\"https://www.youtube.com/watch?v=DLzxrzFCyOs\"\">Click me!</p>",true,"a13"],
    ["You can't reach 1.79e308 (yet)",true,"a14"],
    ["That's a lot of b",true,"a15"],
    ["Prestige Game NGUd'^^-----++++ when?",true,"a16"],
    ["It'll be 5 hours until the update",true,"a17"],
    ["Fun fact: This game contains microtransaction repellent",true,"a18"],
    ["This is a bad game",true,"a19"],
    ["This game isn't too short, you're just speedrunning it",true,"a20"],
    ["Thanks to unpingabot for helping (a lot)",true,"a21"],
    ["Ternary operators are the best",true,"a22"],
    ["noice",true,"a23"],
    ["'I fixed the bug and it's now back' -randomtuba",true,"a24"],
    ["Do Alt+F4 for free Vbucks",true,"a25"],
    ["Somebody once told me that functions were gonna roll me",true,"a26"],
    ["Wait, how many news messages are there?",true,"a27"],
    ["Thanks for adding random_library.js",true,"a28"],
    ["*sigh* *sets up the camera* *gets fake tear into focus* I am super duper sorry for shouting 'Auto-Prestige sucks!' during an exam. The goal of my content is always to entertai-",true,"a29"],
    ["OMG HE ADDED MY NEWS TICKER WOAHHHHH",true,"a30"],
    ["[insert text here]",true,"a31"],
    ["showNews();",true,"a32"],
    ["'Can you put an array inside of an array?' -randomtuba",true,"a33"],
    ["'how do i make a table' -randomtuba",true,"a34"],
    ["Take the Banks from the shadow realm, and you're good to go!",true,"a35"],
    ["1e420.69",true,"a36"],
    ["Stop! Wait 5 hours",true,"a37"],
    ["randomtuba was slain by Xx_Ins4n3B4nk3r420_xX using 'Buy a bank for 15000 points'",true,"a38"],
    ["bruh moment",true,"a39"],
    ["Sometimes you just wanna [REDACTED] someone so hard they split into the fifteenth dimension",true,"a40"],
    ["Don't you hate when the message doesn't finish its sente",true,"a41"],
    ["Don't eat points. Eat paper instead.",true,"a42"],
    ["CHOCOLATE",true,"a43"],
    ["Whomst'd've'zh'bh'rh't'd've done this?!",true,"a44"],
    ["Is this good CSS or terrible CSS?",true,"a45"],
    ["ur not an epic gamer chad like me yuo noob",true,"a46"],
    ["pls like and scrubsibe for Prestige Game content",true,"a47"],
    ["'oops I broke it' -randomtuba",true,"a48"],
    ["h",true,"a49"],
    [":ripaarex:",true,"a50"],
    ["Scientists discovered that Banks can contain themselves. Oh no.",true,"a51"],
    ["'shit game remove timewalls' -reda",true,"a52"],
    ["'Just because this game doesn't have polynomial growth doesn't mean that this game is bad!!!' -randomtuba",true,"a53"],
    ["'I need triple exponential growth or else I'm not playing' -someone",true,"a54"],
    ["https://yahtzeemaster26.github.io/Algebraic-Progression/",true,"a55"],
    ["'bet you can't reach 9.99e999' -someone from the AD server",true,"a56"],
    ["Prestige Game??? More like Prestige Gay!!! Am I right guys???          ok now you're supposed to laugh",true,"a57"],
    ["@everyone @everyone @everyone @here",true,"a58"],
    ["j",true,"a59"],
    ["I can't believe this game still doesn't have any onion jokes. Yay!!!",true,"a60"],
    ["Is the next currency c?",true,"a61"],
    ["'YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS' - randomtuba",true,"a62"],
    ["'I'm making the co-devs do the work for me lol' -randomtuba while chatting in a private DM",true,"a63"],
    ["Good b, good b, that's some good b there if I do say so myself",true,"a64"],
    ["This news ticker is not what you anticipated",true,"a65"],
    ["Is this an Exponential Idle reference?",true,"a66"],
    ["'smh my head' -Reinhardt",true,"a67"],
    ["Why did we skip a?",true,"a68"],
    ["'OFFLINE PROGRESS DOESN'T EVEN WORK 0/5' -some random guy that spends 1 second every day on Prestige Game",true,"a69"],
    ["What if there was an omniverse of points?",true,"a70"],
    ["the box is full of points",true,"a71"],
    ["Hmm yes, the points here are made out of points",true,"a72"],
    ["The secret to making points is preons, so maybe that's why the Pre-Bank timewall is slow. It's because of Nanofield!",true,"a73"],
    ["Did you just say that Antimatter Dimensions has better than Prestige Game? Are you seriously?!?!?! Prestige Game are much so better than Antimatter Dimensions. You be must taking drugs or something. go commit toaster bath",true,"a74"],
    ["wuantum when",true,"a75"],
    ["sowwy for kiwwing youw famiwwy, it's time to weave youw mowtal fwesh *stabs you cutely* OwO 5x",true,"a76"],
    ["Nerf derivatives pls",true,"a77"],
    ["No, I think that mechanic's too overpowered, it'll cause inflatio-hahaha PU3 go BRRRRRRRRR-",true,"a78"],
    ["No, you shouldn't do that in a mechanic, that'll make the players quit playi-hahaha derivative power nerfs go BRRRRRRRRR-",true,"a79"],
    ["No, that's too grindy and timewally, don't be like Patcai-hahaha Pre-Bank timewall go BRRRRRRRRR-",true,"a80"],
    ["hhostify coming 2023",true,"a81"],
    ["When life gives you b, you SACRIFICE IT",true,"a82"],
    ["When is the next update, you ask? It'll be released in about 4.9999 hours!",true,"a83"],
    ["can u dont",true,"a84"],
    ["'I DID NOT STEAL FROM AP' -randomtuba",true,"a85"],
    ["Fuck you, MORE TIMEWALLS",true,"a86"],
    ["Can a fish bounce?",true,"a87"],
    ["You will arrive at your destination in: 5 1/2 cooked timewalls, medium rare, with a side of steak and mashed-up green beans",true,"a88"],
    ["Jokes? Half of these news tickers aren't even jokes.",true,"a89"],
    ["#news-ticker-suggestions when? Oh wait-",true,"a90"],
    ["Completing the game isn't really much of an Achievement",true,"a91"],
    ["too short 1/0",true,"a92"],
    ["Word of the day: poggers",true,"a93"],
    ["If I'm not mistaken, today is [insert date here]",true,"a94"], //If I'm not mistaken 1
    ["'What's the 4th building?' -everyone at some point",true,"a95"],
    ["378-667-7036",true,"a96"],
    ["Haha 69 funni numb3r!!1!1",true,"a97"],
    ["#not-funny-didnt-laugh",true,"a98"],
    ["''Need more quotes!' -Hevipelle' -AD news ticker",true,"a99"],
    ["BREAKING NEWS: randomtuba has been kidnapped and is being forced to update the game",true,"a100"],
    ["Cookies? There are no cookies here.",true,"a101"],
    ["We need at least 1000 news tickers before the players stop playing",true,"a102"],
    [":thonk:",true,"a103"],
    ["Don't worry, we'll add a button to disable the news ticker eventually",true,"a104"],
    ["Here, have a Sprite b",true,"a105"],
    ["1,000,000,000 Zeroes when?",true,"a106"],
    ["Prestige Points will be the next currenc-wait what? It's gonna be called...'b'? Wow, people are so unoriginal nowadays.",true,"a107"],
    ["unfuckemup",true,"a108"],
    ["We're not reviving Algebraic Progression (or are we?)",true,"a109"],
    ["OMG PETER GRIFIN FROM GUYY FAMILY SAID THE P**** WORD!!1!1",true,"a110"],
    ["Ness isn't Sans, Tuba is",true,"a111"],
    ["Achievements++",true,"a112"],
    ["Discord doesn't like swears, accoring to The Nefarious DDT",true,"a113"],
    ["nitro is waste of money lol",true,"a114"],
    ["Will Tuba copy Distance Incremental next??? No one knows!",true,"a115"],
    ["Putting more exclamation marks at the end of your sentence doesn't make it have more emphasis, instead, it makes you look stupid",true,"a116"],
    ["The 4th building will be [REDACTED]. It will cost NaNeNaN^NaNeNaN points.",true,"a117"],
    ["If I'm not mistaken, there are currently 285 news tickers.",true,"a118"], //If I'm not mistaken 2
    ["Jadronize coming 2029",true,"a119"],
    ["In the beginning, there was nothingness. There was white space, and the only message there was was 'Welcome to Prestige Game'. It was in bold text, and it looked really dumb. But then a rift appeared, and randomtuba emerged from the rift. He created some cool shit like Points, Incrementers, Workers, and Banks. He made Banks really powerful, so powerful that it crashed the fucking stock market. But randomtuba didn't care, he was too busy fucking up the game until unpingabot had to fix the absolute doodoo water that randomtuba created. Then randomtuba made 'b' that could be used for cool stuff like upgrades and these super expensive things called 'Derivatives'. He also created some useless automation crap, whatever that means. Then randomtuba said he was done, and he created Google Chrome so unpingabot could host the Glitch project on GitHub. He called it 'Prestige Game', an unoriginal title for a game that doesn't need to exist. The game? It's a load of shit, 1/10",true,"a120"],
    ["join the discord server or else bad luck for life",true,"a121"],
    ["It took 6 years for v1.2.0 to come out...just why",true,"a122"],
    ["bologna doodoo",true,"a123"],
    ["doodoo water",true,"a124"],
    ["This game is major garbo warbo",true,"a125"],
    ["These news tickers were stolen from AP",true,"a126"],
    ["Reach 1 trillion points to unlock the next prestige layer!!! Don't worry, it's possible!!!",true,"a127"],
    ["Click to disassemble this news ticker for trace amounts of papercli-nah just kidding, this isn't mobile AD",true,"a128"],
    ["I smell...a smelly smell...a smelly smell that smells...smelly......",true,"a129"],
    ["Buy the new KITCHEN GUN today!",true,"a130"],
    ["This is the final news tickern't",true,"a131"],
    ["supercesi pls play my game",true,"a132"],
    ["Points: 99999            You are getting 0 points per second",true,"a133"],
    ["<script>I hope this news ticker doesn't pull an XSS",true,"a134"],
    ["r",true,"a135"],
    ["i like ya cut g",true,"a136"],
    ["Procrastination is fun! Fun until it hunts you down, at least...",true,"a137"],
    ["ha, comedy",true,"a138"],
    ["Are there any duplicate news tickers?",true,"a139"],
    ["Are there any duplicate news tickers?",true,"a140"],
    ["'smh' -smh",true,"a141"],
    ["9tH iNcRemEnteR comInG iN 5 HouRs",true,"a142"],
    ["hey guys make sure to subscribe to Prestige Game, now with only 4.20e69 subscribers!",true,"a143"],
    ["'let's ban randomtuba' -abraham lincoln",true,"a144"],
    ["monkey",true,"a145"],
    ["What if pigs could actually fly? At least, that's what randomtuba's old custom status was.",true,"a146"],
    ["In an alternate universe, all the (softcapped) are replaced with (obscured), the scalings have no names, and {copyright strike by Jacorb's Games}",true,"a147"],
    ["'I'm 4 banks ahead of you' -capitalist mario, probably",true,"a148"],
    ["C is real 2401",true,"a149"],
    ["'pls don't ban me mod' -the banned guy",true,"a150"],
    ["How many ticks can a tick tick at?",true,"a151"],
    ["C does not exist. On the other hand, C++ does.",true,"a152"],
    ["Back to the drawing board. Or, I mean, let's get back to the point. *seinfeld music plays*",true,"a153"],
    ["break_your_sanity.js",true,"a154"],
    ["9th dimesion wehn???",true,"a155"],
    ["Esta oración está en español y no agrega nada a este juego.",true,"a156"],
    ["If I'm not mistaken, the current version number is v1.1.2.",true,"a157"], //If I'm not mistaken 3
    ["Anti-Cars 2 a huge hit",true,"a158"],
    ["Timewalls? Well, this game isn't Ordinal Markup, that's what.",true,"a159"],
    ["Go play outside, you should consider taking a break",true,"a160"],
    ["Kowalski, Prestige.",true,"a161"],
    ["You won't have to break your M key, this game isn't AD",true,"a162"],
    ["Hey look ma, I'm on the news!",true,"a163"],
    ["Mrs. Obama, I've done it, I've stopped racism.",true,"a164"],
    ["It do be like that",true,"a165"],
    ["Every 18000 seconds in Africa, 5 hours pass. Together we can stop this.",true,"a166"],
    ["#randomtubaisoverparty",true,"a167"],
    ["Shrek is love, shrek is life.",true,"a168"],
    ["Eventually randomtuba's gonna make an FE000000 reference. Eventually...",true,"a169"],
    ["Let's get riiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiight into the news!",true,"a170"],
    ["/give randomtuba discord:owner_permissions 1",true,"a171"],
    ["Does randomtuba just pick quotes to put in the game?",true,"a172"],
    ["lasted",true,"a173"],
    ["Supercesi thumbnails be like - Episode 42069: OVERENTHUIASTIC TITLE WITH A LOT OF EXCLAMATION MARKS AT THE END!!!!!!!!",true,"a174"],
    ["ew light theme",true,"a175"],
    ["We're halfway there! OOOOHHHHH, SQUIDWARD ON A CHAIR!",true,"a176"],
    ["What's better, derivatives or dimensions?",true,"a177"],
    ["You can stop now",true,"a178"],
    ["One day, a boy found a mysterious bag in his backward. It labeled: 'Duplicator Food'. There was also a small metallic cube that was called: 'Antimatter Galactic Brand Replicanti'. There was also a small blue spiked sphere that was called: 'Universe Expander Brand Duplicators'. The boy took the replicanti and the duplicator and tried to put them together, but they repelled each other. But then, the boy took the duplicator food within the bag and put it near the duplicator. And then, just like that, the duplicators started replicating. Then the replicanti replicated. The two self-replicating objects attacked each other. The boy heard whispers of 'AD is better!' and 'UE is better!' and then, the replicanti whispered, 'UE got abandoned just like Despacit's other mods!', and the duplicators whispered, 'AD's Reality Update will never come out!', and then the two currencies disappeared. They were never found ever since, and the bag is empty.",true,"a179"],
    ["Hips don't lie, neither does b",true,"a180"],
    ["Show me your war face! AAAAAA! Show me your timewall face! AAAAAAAAAAAAAAAA!!!",true,"a181"],
    ["AP > PG",true,"a182"],
    ["Now, this is a story all about how my save got flipped-turned upside down...",true,"a183"],
    ["Check out randomtuba's YouTube channel, it has absolutely no content at all",true,"a184"],
    ["'no memes in #general' -Discord moderator stereotype",true,"a185"],
    ["You've just been news tickered, send a screenshot of this news ticker to get un-news tickered",true,"a186"],
    ["It's difficult to come up with actually funny news tickers",true,"a187"],
    ["MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM-sorry that wasn't my keyboard, that was actually my microwave. Ooh, my pizza's ready!",true,"a188"],
    ["<i>If this sentence appears italic, then that's intentional</i>",true,"a189"],
    ["No more meta-news, I promise. (ok I don't actually promise that)",true,"a190"],
    ["I didn't steal any news tickers from NG+++",true,"a191"],
    ["Just wait six hours and your package will arrive",true,"a192"],
    ["Anti-Jake from StateFarm says that he is not on your side.",true,"a193"],
    ["Recipe for anti-cereal: it's just the same as the recipe for cereal, but pour the milk before the anti-bowl is even on the table",true,"a194"],
    ["LOOK AT THE MOON-oh wait, this isn't Local58",true,"a195"],
    ["John, I want a divorce.",true,"a196"],
    ["Don't add way too many prestige layers",true,"a197"],
    ["Press F to pay respects",true,"a198"],
    ["LOOK AWAY",true,"a199"],
    ["That's how mafia works",true,"a200"],
    ["Uh oh. We have a problem. The Onionpocalypse has started! Onions are raining from the sky, there are onionadoes and onionamis, people's heads are being turned into onions...this may be my final entry. My hand may have become an onion. AAAAAHHH!",true,"a201"],
    ["The 'D' in Onion stands for Dead Memes.",true,"a202"],
    ["So you thought the 5 hours joke was stupid. Well, I'll give you something stupid-er. *ahem* One day, it was a beautiful day. The birds were singing, the flowers were blooming...and then Aarex said to everyone, 'The update will instead take 5.0000000000000000000001 hours instead of exactly 5.' Everyone screamed. People were terrified. 'AAAAAAAAAAHHHH!' someone yelled. 'WAAAAAAHHH!' a baby cried. 'This is a dream, right?' said an old man. The city fell into anarchy and soon, the evil matter of people's souls took over them, and everyone died except for Aarex. The end.",true,"a203"],
    ["Aw snickerdoodle, the news got filtered again. Fudgecrackers!",true,"a204"],
    ["Oh no, they're making a Shark Tale 2. Everyone run!!!!",true,"a205"],
    ["Anti-Aarex can do side projects earlier.",true,"a206"],
    ["Anti-Virtual Boy amazing console",true,"a207"],
    ["There was an AI made of dust, Whose poetry gained it man's trust, If is follows ought, It'll do what they thought, In the end we all do what we must.",true,"a208"],
    ["I hope you don't refresh. This news is very interesting. It's a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long news ticker. Here. Let me start. Well, I can't go far. If only there was some sort of character limit then I wouldn't be able to go very far. Welp, here we g",true,"a209"],
    ["ti daer t'nac uoy ,esrever ni si egassem sihT",true,"a210"],
    ["Portal 3 announced to release on December 32nd",true,"a211"],
    ["Dohn't yoo haet whenn ppl yooz incurrecct speling?",true,"a212"],
    ["Anti-fortnite flopped",true,"a213"],
    ["Anti-Avengers: Endgame is the worst movie to ever exist. It has been given a -1% on Rotten Tomatoes.",true,"a214"],
    ["1.79e308 NO SCOPED",true,"a215"],
    ["Don't you hate when you suggest a bunch of news tickers and they never get added? Oh wait...this isn't relatable to anyone",true,"a216"],
    ["˙˙˙sᴉɥʇ ʇnoqɐ ʇɥƃᴉɹ lǝǝɟ ʇ,usǝop ƃuᴉɥʇǝɯos 'ʎǝH",true,"a217"],
    ["No microtransactions whatsoever! What a surprise!",true,"a218"],
    ["One of our reporters said to a man, 'How much time did it take for you to get 'Billionaire' on your first run?'. The man replied, 'Yes.'.",true,"a219"],
    ["How am I meant to get pregananant.?",true,"a220"],
    ["WW91IHJlYWxseSB0b29rIHRoZSB0aW1lIHRvIGRlY29kZSB0aGlzIGludG8gbm9ybWFsIHRleHQ/IFdvdy4gVGhhdCBpcyByZWFsbHkgc3R1cGlkLiBBY3R1YWxseSwgSSBoYXZlIGEgc2VjcmV0IGZvciB5b3UuIEFhcmV4IHdpbGwgcmVsZWFzZSB0aGUgR2hvc3RpZnkgdXBkYXRlIGluIDUuMDEgaG91cnMuICBBbmQgQWFyZXgsIGlmIHlvdSBhcmUgcmVhZGluZyB0aGlzLCBhZGQgaW4gbXkgbmV3cyB0aWNrZXJzLiBObywganVzdCBraWRkaW5nLiBZb3UgZG9uJ3QgaGF2ZSB0by4=",true,"a221"]
    ["'Cosmic47 stop DMing me, I have 78 pings' -randomtuba",true,"a222"],
    ["If you ever get to 2^^6 b, you cheated",true,"a223"],
    ["Just monika",true,"a224"],
    ["Big Rip snapped its fingers. 'EP, I don't feel so good,' TT said. 'I don't want to go, I don't want to go...' 'Hey! Get ahold of yourself!' EP said, gripping TT tight. 'I'm sorry,' TT said, and it disintegrated away.",true,"a225"],
    ["Gods have such a short lifespan. They only live up to 10^308 years.",true,"a226"],
    ["Congratulations @idiot, you are now level 9! -MEE6",true,"a227"],
    ["Who the f*ck cares about the 10th dimension? -randomtuba",true,"a228"],
    ["McDonalds has made a new Big Mac, it's so tasty that it dematerializes your jaw",true,"a229"],
    ["This news message is handsome",true,"a230"],
    ["Is this a jojo reference?",true,"a231"],
    ["Another autobuyer bites the dust",true,"a232"],
    ["I dare you to click this news ticker.",true,"a233"],
    ["Don't you hate when people put a period instead of a question mark in their sentence.",true,"a234"],
    ["BREAKING NEWS: This news ticker is mispeled",true,"a235"],
    ["Hlp. Th ky btwn 'w' and 'r' is missing.",true,"a236"],
    ["Do you know why there is no period in this news ticker? It's because there is no period key on our keyboard",true,"a237"],
    ["BREAKING NEWS: News ticker suggestions channel has been lasted for the 89th time, no more news tickers!",true,"a238"],
    ["We decided to kill ourselves so we could Ghostify in real life...",true,"a239"],
    ["Aarex thinks everything is a competition. EVERYTHING.",true,"a240"],
    ["It's funny when you explain the joke",true,"a241"],
    ["Tuba? Awww man. So we back in the salt-",true,"a242"],
    ["Ow, that hurt! Stop clicking me!",true,"a243"],
    ["Click this news ticker for absolutely nothing",true,"a244"],
    ["Fun fact: randomtuba can't count to 4",true,"a245"],
    ["o!echo o!echo o!echo o!echo o!echo @randomtuba#8432",true,"a246"],
    ["In these 'In these trying times' times, we're working hard to find a vaccine for COVID-19.",true,"a247"],
    ["guys help this isn't a news ticker, I'm stuck in randomtuba's basement forced to make news tickers, I've wrote 248 of them, I haven't had food in 5 days, please call 911 before they-HAHAHAHA FUNNY RANDOMTUBA QUOTE JOKE HAHAHAHAHAAHAHAHAHAHAHAHAHA-",true,"a248"],
    ["'I was going to steal Unlimited Alphabets' news ticker code, but then there was the UI overhaul...' -randomtuba",true,"a249"],
    ["Sadly, this game doesn't have Jacorb balancing. Sorry guys!",true,"a250"],
    ["I wanna b the very best, like no one ever was...",true,"a251"],
    ["So no one told me bugs were gonna be this wayyy. *clap clap clap clap* The code's a joke, game broke, a fix is on the wayyy...",true,"a252"],
    ["The letters stand for Park, Reverse, Neutral, Drive, and LOW!",true,"a253"],
    ["ngl that b lookin kinda t h i c c",true,"a254"],
    ["Bee Movie 2 coming in 6 hours",true,"a255"],
    ["https://dan-simon.github.io/misc/fe000000",true,"a256"],
    ["Fuck chroma",true,"a257"],
    ["[REDACTED]",true,"a258"],
    ["randomtuba should stop drinking 10 gallons of valve oil",true,"a259"],
    ["New news company has become rivals with us. The company name is 'Universal Paperclips, Inc.' They also make paperclips that gain a lot of Trust.",true,"a260"],
    ["'we have more news tickers than content, epic' -Cosmic47",true,"a261"],
    ["put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker put this in the news ticker",true,"a262"],
    ["Please hold. *hold music*",true,"a263"],
    ["Bet you can't count to a hundred thousand right now",true,"a264"],
    [":kappa:",true,"a265"],
    ["Incrementers% speedrun when?",true,"a266"],
    ["Hippity hoppity, that bank is now my property",true,"a267"],
    ["Hippity hoppity, that derivative is now my property",true,"a268"],
    ["Ka-chow!",true,"a269"],
    ["guys should I steal some AD news tickers",true,"a270"],
    ["The reason why there aren't many long news tickers is because randomtuba didn't really decide to make a bunch of long news tickers...until now.",true,"a271"],
    ["Pardon me, coming through!",true,"a272"],
    ["Going horizontal is fun! Weeeeeeeeeeeeee!",true,"a273"],
    ["I was planning to make 1,000,000 of these before the update, but I ran out of ideas.",true,"a274"],
    ["wait, what are we supposed to be putting here again? why do people even read these? are you telling me that... all this time... all this time you could've just put nothing here, and people would start listening?! so that's why people didn't care when we put an intricate news ticker here! oh, dang it, and now we've lost our players. guess we need to release the update in six hours, and not five. oh, the irony! ...and my heart! all this time the lazy people have gotten over the intricate news ticker makers! and even if they watched they would stop watching before the end! i'm going to go cry now, this news ticker has now been abandoned, good day!",true,"a275"],
    ["Several people are typing...",true,"a276"],
    ["Thanks, Obama.",true,"a277"],
    ["oh wait wrong discord server",true,"a278"],
    ["I once went into the console and I got a scary message: 'What are you doing here in the console?'",true,"a279"],
    ["never gonna give you up never gonna let you down never gonna run around and desert you *rickroll music plays* never gonna make you cry never gonna say goodbye never gonna tell a lie and hurt you *more rickroll music plays*",true,"a280"],
    ["This ticker is sponsored by Skillshare",true,"a281"],
    ["tick... tick... tick... wait why are we waiting here again? why are we even... well never mind. i think these words are just sponsored by Raid: Shadow Legends and to make the thing longer... wait... what thing... i have confuzzeled myself yet again...",true,"a282"],
    ["Fun fact: Masks are actually gay",true,"a283"],
    ["'someone to die? hehewoowowowowow' - abraham lincoln",true,"a284"],
    ["'fucking eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' -unp©gged™",true,"a285"]
];}

var s;
var scrollTimeouts = [];
var nextMsgIndex;
function doodooWater() {
  s = document.getElementById("news");
  document.addEventListener("visibilitychange", function() {if (!document.hidden) {scrollNextMessage();}}, false);
}
window.onload = doodooWater;
function scrollNextMessage() {
  updateNewsArray();
  //select a message at random

  try {
    do {nextMsgIndex = Math.floor(Math.random() * newsArray.length)} while (!eval(newsArray[nextMsgIndex][1]))
  } catch(e) {
      console.log("Newsarray doesn't work at idx " + nextMsgIndex)
  }

  scrollTimeouts.forEach(function(v) {clearTimeout(v);});
  scrollTimeouts = [];

  //set the text
  s.textContent = newsArray[nextMsgIndex][0];

  //get the parent width so we can start the message beyond it
  let parentWidth = s.parentElement.clientWidth;

  //set the transition to blank so the move happens immediately
  s.style.transition = '';
  //move div_text to the right, beyond the edge of the div_container
  s.style.transform = 'translateX('+parentWidth+'px)';

  //we need to use a setTimeout here to allow the browser time to move the div_text before we start the scrolling
  scrollTimeouts.push(setTimeout( function() {
    //distance to travel is s.parentElement.clientWidth + s.clientWidth + parent padding
    //we want to travel at rate pixels per second so we need to travel for (distance / rate) seconds
    let dist = s.parentElement.clientWidth + s.clientWidth + 20; //20 is div_container padding
    let rate = 140; //change this value to change the scroll speed
    let transformDuration = dist / rate;


    //set the transition duration
    s.style.transition = 'transform '+transformDuration+'s linear';
    let textWidth = s.clientWidth;
    //we need to move it to -(width+parent padding) before it won't be visible
    s.style.transform = 'translateX(-'+(textWidth+5)+'px)';
    //automatically start the next message scrolling after this one finishes
    //you could add more time to this timeout if you wanted to have some time between messages
    scrollTimeouts.push(setTimeout(scrollNextMessage, Math.ceil(transformDuration * 1000)));
  }, 100));
}
