var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var diceImgSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var diceImgSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImgSource2);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="🏳 Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🏳"
}
else
{
    document.querySelector("h1").innerHTML="It's a draw!!"
}