console.log('My socket server is running');
var express = require('express');
var app= express();
require('dotenv').config()
console.log(process.env)
const port = process.env.PORT || 3000
var server = app.listen(process.env.PORT || 3000)

app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);
function newConnection(socket) {
console.log('new connection' + socket.id);
socket.on('mouse', mouseMsg);

function mouseMsg(data) {
socket.broadcast.emit('mouse', data);
}
}