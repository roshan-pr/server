const { createServer } = require('net');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');
const { createHandler } = require('./src/handler.js');

const onNewConnection = (socket, requestHandler) => {
  socket.on('error', (err) => console.log(err.message));

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

const PORT = 8000;
startServer(PORT, createHandler(), process.argv[0]);

module.exports = { onNewConnection, startServer };
