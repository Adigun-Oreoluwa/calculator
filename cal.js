let op;
let canclear=false;
let display1= document.getElementById('display1');
let display2 = document.getElementById('display2');
let str;
let firstval;
let x;
let y ="square(2)";
let w;
// console.log(textbox.(textbox))

function sign(sign){
display2.innerText += display1.innerText + sign;  
 if (op) {
   calculate();
 }

firstval=display1.innerHTML;
op = sign;
canclear=true;

display2.innerHTML=display2.innerHTML
}

function hype(numba) {
if (canclear){
    display1.innerText = "" ;
    canclear = false;
}
display1.innerText += numba;
secondval = display1.innerHTML
// display1.innerHTML= display2.innerHTML + op
    }
// function results () {
// text.innerHTML;
// textbox.innerHTML += text +  '=';
// text.innerHTML="";
// if (op == "+"){
//     text box.innerHTML= Number(text.innerHTML) + Number(textbox.innerHTML)
// }
// textbox.innerHTML += text.innerHTML;
// }
function calculate () {
    
    if (op=="+") {
        // console.log('textbox');
        display1.innerHTML= Number(firstval) + Number(display1.innerHTML)
    } else if (op == "-") {
        display1.innerHTML= Number(firstval) - Number(display1.innerHTML)
    } else if (op == "/") {
        display1.innerHTML= Number(firstval) / Number(display1.innerHTML)
    } else if (op == "*"){
        display1.innerHTML= Number(firstval) * Number(display1.innerHTML)
    }
}

function fun () {
str=display1.innerHTML.slice(0,-1)
display1.innerHTML=str
}
function ter() {
    display1.innerHTML=""
    display2.innerHTML=""

}
function book(){
    display2.innerHTML = `square (${display1.innerHTML})`,
    display1.innerHTML= display1.innerHTML * display1.innerHTML
    
}
function rot() {
    display2.innerHTML = `sqrt(${display1.innerHTML})`,
    display1.innerHTML=display1.innerHTML**0.5;
}
function box() {
    display2.innerHTML = `1 /(${display1.innerHTML})`,
    display1.innerHTML = 1 / display1.innerHTML;
}
function fan () {
    display1.innerHTML=  -display1.innerHTML
}
function ced() {
    display1.innerHTML=""
}
function per() {
    display2.innerHTML = `percentage (${display1.innerHTML})`,
    display1.innerHTML= display1.innerHTML /100;
    // display2.innerHTML = display2.innerHTML/ 100;
}
// function font() {
//     display1.innerHTML = +display1.innerHTML
// }
//  function dot(){
//     x=document.getElementById('dot');
// x.toExponetial(1,2,3,4,5,6,7,8,9,0);
//  }
