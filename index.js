//Now that express is installed we can create an index.js file that will setup our application.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.get('/', function(req, res){
//  res.send('<h1>Hello world</h1>');
//});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    });

//io.on('connection', function(socket){
//    console.log('a user connected');
//    socket.on('disconnect', function(){
//        console.log('user disconnected');
//      });
//});
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);//自分も含めて送る場合
      //socket.broadcast.emit('chat message', msg);//自分には表示させない
    });
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
/*


*/