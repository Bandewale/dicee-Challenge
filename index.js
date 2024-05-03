var r1 = Math.floor(Math.random() * 6)+1;
var r2 = Math.floor(Math.random() * 6)+1;
var ranimg1 = "./images/dice"+r1+".png";
var ranimg2 = "./images/dice"+r2+".png";
var csrc1 = document.querySelectorAll("img")[0].setAttribute("src",ranimg1);
var csrc2 = document.querySelectorAll("img")[1].setAttribute("src",ranimg2);

if(r1 > r2){
    document.querySelector("h1").innerHTML = " Player 1 Wins!";
}
else if(r1 < r2){
    document.querySelector("h1").innerHTML = " Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}