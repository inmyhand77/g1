var net = require('net');
var server = net.createServer(function(socket) {
  console.log('client connected.');
  socket.write('Welcome to Socket Server');
    
  socket.on('data', function(chunk) {
    console.log('client sent : ',
      chunk.toString());
  });

  socket.on('end', function() {
    console.log('클라이언트 접속 종료');
  });
});

server.on('listening', function() {
  console.log('Server is listening');
});

server.on('close', function() {
  console.log('Server closed');
});

port =3000 
console.log('port:'+port)    
server.listen(port);
