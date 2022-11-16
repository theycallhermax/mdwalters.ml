const motdText = ["HELLO IT'S ME M.D. WALTERS AND WELCOME BACK TO ANOTHER VIDEO", "Haha LOL *dry laugh*", "UwU"];
const motd = document.getElementById("motd");
motd.innerHTML = motdText[Math.floor(Math.random() * motdText.length)];
