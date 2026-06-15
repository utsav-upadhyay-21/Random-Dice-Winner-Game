let random1 = Math.floor(Math.random()*6)+1;
let random2 = Math.floor(Math.random()*6)+1;

let diceImage1 = "images/dice"+random1+".png";
let diceImage2 = "images/dice"+random2+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceImage1);
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

if (random1 > random2) { 
    document.querySelector("h1").innerHTML = "🚩Player1 wins"; 
} else if(random2>random1){ 
    document.querySelector("h1").innerHTML = "Player2 wins🚩"; 
}
else{
    document.querySelector("h1").innerHTML = "No Winner"; 
}
