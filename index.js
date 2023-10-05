var randomNumber1=6;
var randomNumber2=6;
function myMove(){
  window.location.assign("./win.html");
}

function roll(){
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

 
}
function cmp(){
  if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
    setTimeout(() => {  myMove(); }, 1500);
    
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").textContent = "Draw!";
  }
  
}


