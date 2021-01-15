//const { text } = require("express");

var socket;
var sounder;
var w,h;
function preload(){

  sounder=new Audio ("1.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  w=windowWidth;
  h=windowHeight;
  //socket= io.connect("https://incantation1.herokuapp.com/")
  socket= io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);
}

function draw() {
  background(0,10);
  fill(255);
stroke(255);
textSize(20);
text('you',mouseX, mouseY);
  ellipse(mouseX, mouseY, 2,2)
  var dis=dist(w/2, h/2, mouseX, mouseY);
if(dis<100){
  line(w/2, h/2, mouseX, mouseY);
}
  var data = {
		x: mouseX,
    y: mouseY
  }
  
  socket.emit('mouse', data)
}

function newDrawing(data){
fill(255);
stroke(255);
textSize(20);
text('someone',data.x, data.y);
ellipse(data.x, data.y, 2,2)
var dis1=dist(data.x, data.y, mouseX, mouseY);
var dis2=dist(data.x, data.y, data.x, data.y);
if(dis2<100&&dis2>0){
  line(data.x, data.y, data.x, data.y);
}

if(dis1<100){
  line(data.x, data.y, mouseX, mouseY);
}
//ellipse(random(windowWidth),random(windowHeight), 10,10 );
// if(data.x>200){
//   background(255);
//   sounder.play();
// }
stroke(255);

}

function mouseDragged(){
  
}

