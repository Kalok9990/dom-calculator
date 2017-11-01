var screen = document.getElementById("screen");
var Nums =[];

//Get values
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", function(event){
    screen.innerHTML = this.value;
    Nums.push(this.value);
  })
}

//Equation


//Press AC to clear
var ac = document.querySelector(".buttonClear");
debugger
ac.addEventListener("click", clear);

function clear(){
  screen.innerHTML = "Sparta Calculator";
  Nums = [];
}
