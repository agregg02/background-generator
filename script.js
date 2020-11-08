var css = document.querySelector("h3");
var in1 = document.querySelector(".color1");
var in2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btnRandom = document.getElementById("btnRandom")

console.log(css);
console.log(in1);
console.log(in2);
console.log(btnRandom);

in1.addEventListener("input",setColor);
in2.addEventListener("input",setColor);
window.addEventListener("load",setColorInputs);
btnRandom.addEventListener("click",randomColor)

function setColorInputs(){
        in1.value='#FF0000'
        in2.value='#FFFF00'
        setColor()
}

function setColor(){
        body.style.background= 
        'linear-gradient(to right, '
        + in1.value 
        +', '
        + in2.value
        +')';
        console.log(in1.value);
        console.log(in2.value);
        css.textContent=body.style.background;

}

function randomColor(){
        in1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
        in2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
        setColor();
}