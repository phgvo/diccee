var randomNumber1 = Math.floor(Math.random() * 6) +1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; // this is for image1 index
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // this is for image2 index

// If player Wins
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Pappa wins";
}
else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "🚩 Danny wins";
}
else {
document.querySelector("h1").innerHTML = "🎌 Duels, draw again"
}
