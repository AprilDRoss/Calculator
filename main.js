const clearBtn = document.querySelector(".clearbutton");
const equalBtn = document.querySelector(".equalBtn");

//getting buttons for the loop
let buttons = document.getElementsByClassName('buttons');
let calc = document.getElementById('window');
// //create a for loop to click buttons
for (let i = 0; i < buttons.length; i++){
  let btn = buttons;
}

//make window accept operator characters
document.addEventListener("click", function(q) {
  if(q.target.className === "operator") {
    var operatorCharacters = q.target.innerHTML;
    calc.innerHTML += operatorCharacters;
    return calc.innerHTML;
  }
  else{
    event.stopPropagation();
    return false;
  }
});

//get the value of each button when clicked
document.addEventListener("click", function(e) {
  console.log(e);
  if(e.target.className === "button"){
    var textContent = e.target.innerHTML;
    console.log(e.target.innerHTML);
    calc.innerHTML += textContent;
  }
});

clearBtn.addEventListener('click', function(e){
  if(e.target.className === "clearbutton"){
    calc.innerHTML = "";
  }
});

document.addEventListener("click", function(a){
  if(a.target.className === "equalBtn"){
    let answer = eval(calc.innerHTML);
    calc.innerHTML = answer;
  }
});
