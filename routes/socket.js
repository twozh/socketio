exports.socketcb = function(socket){

  socket.emit('news', { hello: 'hello world' });
  socket.on('message', function(message){
    console.log(message);
    socket.send(message);
  });




};

