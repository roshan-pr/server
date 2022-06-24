const { createServer } = require('net');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');
const { createHandler } = require('./src/handler.js');

const onNewConnection = (socket, requestHandler, resourceFrom) => {
  socket.on('error', (err) => console.log(`\n${err.message}\n`));

  socket.on('data', (chunk) => {
    const request = parseRequest(chunk.toString());
    console.log(request.method, request.uri);
    const response = new Response(socket);
    requestHandler(request, response, resourceFrom);
  });
};

const startServer = (port, requestHandler, resourceFrom) => {
  const server = createServer((socket) =>
    onNewConnection(socket, requestHandler, resourceFrom));

  server.listen(port, () => console.log(`Server listening to ${port}`));
};

const main = (resourceFrom) => {
  const PORT = 8000;
  startServer(PORT, createHandler(), resourceFrom);
};

main(process.argv[2]);

module.exports = { onNewConnection, startServer };
