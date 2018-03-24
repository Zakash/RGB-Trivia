var colorsArray = new Array();
var pickedColor;
var gameMode = 6;
var backgroundColor = document.body.style.background;

var squares = document.getElementsByClassName("square");
var colorDisplay =  document.getElementById("pickedColorSpan");
var resultDisplay = document.getElementById("result");
var headerDisplay = document.querySelector("h1");

var newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", initSquares);

var easyModeButton = document.getElementById("easyMode")

easyModeButton.addEventListener("click", function() {
    gameMode = 3;
    easyModeButton.classList.add("selected");
    hardModeButton.classList.remove("selected");

    for (var i = 3 ; i < 6 ; i++) {
        squares[i].style.display = "none";
    }

    initSquares();
});

var hardModeButton = document.getElementById("hardMode");

hardModeButton.addEventListener("click", function() {
    gameMode = 6;
    hardModeButton.classList.add("selected");
    easyModeButton.classList.remove("selected");

    for (var i = 3 ; i < 6 ; i++) {
        squares[i].style.display = "block";
    }

    initSquares();
});

initSquares();


// Function that Generates an RGB Color
function generateRGB() {
    var r = Math.floor(Math.random()*256);          // Random between 0-255
    var g = Math.floor(Math.random()*256);          // Random between 0-255
    var b = Math.floor(Math.random()*256);          // Random between 0-255
    return ("rgb(" + r + ", " + g + ", " + b + ")");  // Collect all to a string
}

// Function that initialize/reset the colors
function initSquares() {
    colorsArray = [];                               // Empty the Array
    generateColors(gameMode);
    resultDisplay.textContent = "";
    newGameButton.textContent = "New Colors";
    headerDisplay.style.background = backgroundColor;
    for (var i = 0 ; i < gameMode ; i++) {
        squares[i].style.background = colorsArray[i];
        squares[i].addEventListener("click", function() {
            if (this.style.background === colorsArray[pickedColor]) {
                newGameButton.textContent = "Play Again?";
                resultDisplay.textContent = "Yey! Correct";
                changeColors(colorsArray[pickedColor]);
            }
            else {
                this.style.background = backgroundColor;
                resultDisplay.textContent = "Wrong! Try Again";
            }
        });
    }

    pickedColor = Math.floor(Math.random()*gameMode);
    colorDisplay.textContent = colorsArray[pickedColor];
}

// Function that changing the colors of the squares and the header
function changeColors (color) {
    for (var i = 0 ; i < gameMode ; i++) {
        squares[i].style.background = color;
        headerDisplay.style.background = colorsArray[pickedColor];
    }
}

function generateColors(numOfSquares) {
    for (var i = 0 ; i < numOfSquares ; i++) {
        colorsArray[i] = generateRGB();
    }
}
