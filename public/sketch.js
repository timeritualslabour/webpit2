


var socket;
var sounder;
var w,h;
var sck = [];
var bunch = [];
var old;
let time;
var l;
function setup() {
  createCanvas(windowWidth, windowHeight);
  w=windowWidth;
  h=windowHeight;
  //socket= io.connect("https://incantation1.herokuapp.com/")
  socket= io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);
  old=false;
  time=0;
  //socket.on('name', adder)
}
// function adder(namer) {
// sck.push(namer);
// }



//}
function draw() {
  background(0,20);
  fill(255);
stroke(255);
textSize(10);
//var l1=lerp(l1, )
text('you',mouseX, mouseY);
  //ellipse(mouseX, mouseY, 2,2);
  var dis=dist(w/2, h/2, mouseX, mouseY);
if(dis<100){
  line(w/2, h/2, mouseX, mouseY);
}
for(k=0; k<bunch.length; k++){
bunch[k].display();

}
if(millis()-time>100){
var data = {
		x: mouseX,
    y: mouseY, 
    s: socket.id
  }
  
  socket.emit('mouse', data);
  time=millis();
}
}

function newDrawing(data){
   //var ider=data.s;
   old=false;
for(i=0; i<bunch.length; i++){
  if(data.s===bunch[i].id){
  old=true;
  bunch[i].move(data.x, data.y);
  for(z=0; z<bunch.length; z++){
    if(bunch[i].intersect(bunch[z])&&bunch[k]!==bunch[z]){
  bunch[i].check(bunch[z]);
    }
  }
}
}

if(old==false){
  bunch.push(new Bunch(data.s));
}

}

class Bunch {
  
  constructor(s) {
    this.pos = createVector(0,0);
    this.id=s;
    this.l=createVector(0,0);
    this.dis1=0;
    this.dis2=0;
  }

  move(xnew, ynew) {
    this.pos.set(xnew, ynew);
    fill(255);
      stroke(255);
      textSize(5);
  }

    display(){
      fill(255);
      stroke(255);
      textSize(5);
      
      this.l = p5.Vector.lerp(this.l, this.pos, 0.5);
      text('other', this.l.x, this.l.y);
      this.dis1=dist(this.l.x, this.l.y, mouseX, mouseY);
if(this.dis1<200){
line(this.l.x, this.l.y, mouseX, mouseY);
}
    }
    
    intersect(other){
    this.dis2=dist(this.l.x, this.l.y, other.l.x, other.l.y);
    return(this.dis2<200);
    }
    
    check(other){
        stroke(255);
        strokeWeight(2);
        line(this.l.x, this.l.y, other.l.x, other.l.y);
  }

  
}