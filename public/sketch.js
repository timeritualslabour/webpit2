var socket;
function setup() {
  createCanvas(400, 400);
  //require('dotenv').config();
  //const PORT = process.env.PORT || 3000;
  socket= io.connect("https://incantation1.herokuapp.com/")
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
fill(255);
ellipse(data.x, data.y, 10,10)

}
function mouseDragged(){

  fill(255);
  ellipse(random(width), random(height), 10,10)
  ellipse(mouseX, mouseY, 10,10)
  var data = {
		x: mouseX,
		y: mouseY
  }
  socket.emit('mouse', data)
}
function draw() {
  background(0,10);
}