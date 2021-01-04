var socket;
function setup() {
  createCanvas(400, 400);
  socket= io.connect('http://localhost:3000')
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