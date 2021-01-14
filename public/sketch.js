var socket;
var sounder;

function preload(){

  sounder=new Audio ("1.mp3")
}
function setup() {
  createCanvas(400, 400);
  
  socket= io.connect("https://incantation1.herokuapp.com/")
  //socket= io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
fill(255,100);
ellipse(data.x, data.y, 2,2)
// if(data.x>200){
//   background(255);
//   sounder.play();
// }
stroke(255);
var dis=dist(data.x, data.y, x, y);
if(dis<30){
  line(data.x, data.y, x, y);
}
}

function mouseDragged(){
  
}

function draw() {
  background(0,10);
  fill(255);
  //ellipse(random(width), random(height), 10,10)
  ellipse(mouseX, mouseY, 2,2)
  
  var data = {
		x: mouseX,
    y: mouseY
  }
  
  socket.emit('mouse', data)
}