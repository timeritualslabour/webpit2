var socket;
var sounder;
function setup() {
  createCanvas(400, 400);
  //require('dotenv').config();
  //const PORT = process.env.PORT || 3000;
  socket= io.connect("https://incantation1.herokuapp.com/")
  socket.on('mouse', newDrawing);
  socket.on('mouseoff', newDrawing);
  sounder=loadSound("1.mp3");
}

function newDrawing(data, data1){
fill(255);
ellipse(data.x, data.y, 10,10)
if(data.player==true&&!sounder.isPlaying()){
  sounder.play();
}
}
function mouseDragged(){

  fill(255);
  ellipse(random(width), random(height), 10,10)
  ellipse(mouseX, mouseY, 10,10)
  var data = {
		x: mouseX,
    y: mouseY,
    player: true
  }
  socket.emit('mouse', data)
}

// function mouseReleased(){
//     data.player==false;
//   socket.emit('mouse', data.player)
// }

function draw() {
  background(0,10);
}