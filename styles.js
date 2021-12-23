function makeRows(rows, cols){
    var container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i=0; i<(rows * cols); i++){
        var cell = document.createElement("div");
        cell.id = "grid-item";
        cell.onmouseover = randomColor;
        container.appendChild(cell);
    }
}

function generateColor(){
    let choices = ['blue', 'red', 'yellow', 'green', 'purple', 'orange'];
    let randomNum = Math.floor(Math.random()*choices.length);
    let randomColor =  choices[randomNum];
    return randomColor;
}


function randomColor(){
    this.style.backgroundColor = generateColor();
}




