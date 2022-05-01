function terning() {
var randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber + 1);
return randomNumber
}

var player1 = terning();
document.querySelector(".image1").setAttribute("src", "images/dice"+player1+".png");

var player2 = terning();
document.querySelector(".image2").setAttribute("src", "images/dice"+player2+".png");

if (player1 > player2) {
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (player2 > player1) {
document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
}
else {
document.querySelector("h1").innerHTML = "🎌 Duels, draw again";
}


/**/
// var randomNum1=Math.floor(Math.random()*6)+1;
// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
/**/
