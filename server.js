
//modules, these are pre-installed, but node has many more, more tha other languages
var fs =  require('fs'); //allow access to file system
var path = require('path'); //
var http = require('http');
var url = require('url');
//var mime = require('./src/mime.js');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


//console.log(poster);

var port = 8014;
//files we want to serv will be in this dir
var public_dir = path.join(__dirname, 'public');
var src_dir = path.join(__dirname, 'src');

app.get('/', function(req, res){
    res.sendFile(public_dir +'/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
     io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
//app.listen(port, ()=> console.log('ITS WORKING... on port: ' + port));
