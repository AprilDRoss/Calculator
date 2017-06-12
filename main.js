const clearBtn = document.querySelector(".clearbutton");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");
const dividerBtn = document.querySelector(".dividerBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const multiplierBtn = document.querySelector(".multiplierBtn");
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const subtractorBtn = document.querySelector(".subtractorBtn");
const zeroBtn = document.querySelector(".zeroBtn");
const decimalBtn = document.querySelector(".decimalBtn");
const equalBtn = document.querySelector(".equalBtn");
const adderBtn = document.querySelector(".adderBtn");

let buttons = document.getElementsByClassName('calculatorContainer');
// //create a for loop to click buttons
//
for (let i = 0; i < buttons.length; i++){
  let btn = buttons;
}

//add eventlisterner
//btn.addEventListener("click", function(event){

function getButtonTextContent(btn) {
//var buttons = document.querySelectorAll('.calculatorContainer');
for (var i=0, l=buttons.length; i<l; i++) {
var input = buttons[i].innerHTMl;
var calc = document.querySelector('.window');
calc.innerHTMl = input.innerHTMl;
   }
 }
