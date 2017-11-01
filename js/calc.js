var screen = document.getElementById("screen");
//Retrieve and store values
function retrieve(){
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function(event){
      screen.innerHTML = this.value;
    })
  }
}

//Define operators
var oper = document.getElementsByClassName("operator");

//AC function
// var ac = document.getElementsByClassName("buttonClear")
// ac.addEventListener("click", function(event){
//   screen.innerHTML = "Sparta Calculator";
// })

//Display values
