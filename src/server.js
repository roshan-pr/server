const { createServer } = require('net');
const { parseRequest } = require('./parseRequest.js');

const onNewConnection = (socket, requestHandler) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    const request = parseRequest(chunk);
    requestHandler(request, socket);
    socket.end();
  });
};

const host = (port, requestHandler) => {
  const server = createServer((socket) =>
    onNewConnection(socket, requestHandler));
  server.listen(port, () => console.log(`Server listening to ${port}`));
};

module.exports = { host };
