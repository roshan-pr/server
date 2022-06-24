const { createServer } = require('net');
const { parseRequest } = require('./parseRequest.js');
const { Response } = require('./response.js');

const onNewConnection = (socket, requestHandler) => {
  socket.on('error', (err) => console.log(err));

  socket.on('data', (chunk) => {
    const request = parseRequest(chunk.toString());
    console.log(request.method, request.uri);

    const response = new Response(socket);
    requestHandler(request, response);
  });
};

const startServer = (port, requestHandler) => {
  const server = createServer((socket) =>
    onNewConnection(socket, requestHandler));

  server.listen(port, () => console.log(`Server listening to ${port}`));
};

module.exports = { onNewConnection, startServer };
