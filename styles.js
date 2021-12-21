function makeRows(rows, cols){
    var container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i=0; i<(rows * cols); i++){
        var cell = document.createElement("div");
        /*cell.innerText = (i + 1);*/
        container.appendChild(cell).id = "grid-item";
    }
}

function generateColor(){
    let choices = ['blue', 'red', 'yellow', 'green', 'purple', 'orange'];
    let randomNum = Math.floor(Math.random()*choices.length);
    let randomColor =  choices[randomNum];
    return randomColor;
}


function randomColor(){
    var container = document.getElementById("container");
    container.style.backgroundColor = generateColor();
}


