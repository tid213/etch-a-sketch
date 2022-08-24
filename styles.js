//Creates a user choice sized grid

function makeRows() {
  let num = 16; //prompt("Please enter how many rows and columns: ");
  var container = document.getElementById("container");
  container.style.setProperty("--grid-rows", num);
  container.style.setProperty("--grid-cols", num);
  for (i = 0; i < num * num; i++) {
    var cell = document.createElement("div");
    cell.id = "grid-item";
    cell.onmouseover = boxColor;
    container.appendChild(cell);
  }
}

//random rainbow color generator

function randColor() {
  let choices = ["blue", "red", "yellow", "green", "purple", "orange"];
  let randomNum = Math.floor(Math.random() * choices.length);
  let randomColor = choices[randomNum];
  return randomColor;
}

//function to change div color to choice

function boxColor() {
  this.style.backgroundColor = colorSelect();
}

function resetPage() {
  window.location.reload();
}

// counter to store user color choice

let counter = 0;

//color changing functions for buttons

function redCount() {
  counter = 1;
}
function blueCount() {
  counter = 2;
}
function greenCount() {
  counter = 3;
}
function purpleCount() {
  counter = 4;
}
function blackCount() {
  counter = 5;
}
function rainbowCount() {
  counter = 0;
}

//color selector function

function colorSelect() {
  let red = "red";
  let blue = "blue";
  let green = "green";
  let purple = "purple";
  let black = "black";
  let colorChoice = [];
  if (counter === 0) {
    colorChoice = randColor();
  } else if (counter === 1) {
    colorChoice = red;
  } else if (counter === 2) {
    colorChoice = blue;
  } else if (counter === 3) {
    colorChoice = green;
  } else if (counter === 4) {
    colorChoice = purple;
  } else if (counter === 5) {
    colorChoice = black;
  } else {
  }

  return colorChoice;
}
