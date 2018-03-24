var colorsArray = new Array();

var squares = document.getElementsByClassName("square");


window.onload = generateColorsArray();


function generateRGB() {
    var r = Math.floor(Math.random()*256);          // Random between 0-255
    var g = Math.floor(Math.random()*256);          // Random between 0-255
    var b = Math.floor(Math.random()*256);          // Random between 0-255
    return ('rgb(' + r + ',' + g + ',' + b + ')');  // Collect all to a string
}

function generateColorsArray() {
    for (var i = 0 ; i < squares.length ; i++) {
        colorsArray[i] = generateRGB();
        squares[i].style.background = colorsArray[i];
    }
}
