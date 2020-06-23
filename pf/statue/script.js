// When true, moving the mouse draws on the canvas
var isDrawing = false;
var x = 0;
var y = 0;
var color = "red";

const myPics = document.getElementById('canvas');
const context = myPics.getContext('2d');

window.onload = function () {
  var image = document.getElementById("butthole");
  context.drawImage(image, 0, 0);
}

myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function setColor(string) {
  document.getElementById(string).onclick = function () {
    color = string;
  }
}

setColor("red");
setColor("black");
setColor("blue");
setColor("green");
setColor("gold");
setColor("white");

document.getElementById("reset").onclick = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var image = document.getElementById("butthole");
  context.drawImage(image, 0, 0);
}