
var express = require('express');
const fs = require('fs')
var app= express();
require('dotenv').config()
let userall=[];
var placer=0;
var changer=0;

//console.log(process.env)
const PORT = process.env.PORT || 3000;
var server=app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
//var server = app.listen(process.env.PORT, '0.0.0.0')

app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);
console.log('My socket server is running');
io.sockets.on('connection', newConnection);

setInterval(timer,6000);
function timer(){
changer=1;
io.sockets.emit('change',changer)
changer=0;
}
 
fs.readFile('Input.txt', (err, data) => {
    var texter=data.toString();
    var textArray=texter.split(",")    
})


function newConnection(socket) {
//socket.broadcast.emit('name', {namer: socket.id});
    
    console.log('new connection ' + socket.id + userall.length);
    
    // var namer=userall.length;
    // io.sockets.emit('name', namer);

socket.on('mouse', mouseMsg);

function mouseMsg(data) {
    // var comp=data.s;
    // for (i=0; i<userall.length; i++){
    //     if(comp==userall[i].identity){
    //      placer=userall[i].place;
    //     }
    // }
    
    // var dater = {
    // x: data.x,
    // y: data.y,
    // s: data.s,
    // place: placer

    // }


socket.broadcast.emit('mouse', data);

}
}


class User {

constructor(s, l){
    this.place=s;
    this.identity=l;
}

}