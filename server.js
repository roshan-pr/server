const { createServer } = require('net');

response = "HTTP/1.1 200\r\n\r\n<html><body><h1>Hello</h1></body></html>\r\n";

const onNewConnection = (socket) => {

  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    socket.write(response);
    socket.end();
  });
};

const server = createServer(onNewConnection);

const PORT = 8000;
server.listen(PORT, () => console.log(`Server listening to ${PORT}`));
