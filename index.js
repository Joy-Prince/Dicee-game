
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage = "images/dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomdiceimage);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2);




if (randomnumber1 > randomnumber2){
	document.querySelector("h2").innerHTML = "Player One Wins!! 🏁 "
}
else if (randomnumber2 > randomnumber1){
	document.querySelector("h2").innerHTML = "Player Two Wins!! 🏁"
}
else {
	document.querySelector("h2").innerHTML = "Draw"
}