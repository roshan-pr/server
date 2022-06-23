const { createServer } = require('net');
const { parseRequest } = require('./parseRequest.js');

class Response {
  #socket;
  constructor(socket) {
    this.#socket = socket;
  }

  #write(response) {
    this.#socket.write(response);
  }

  sent(body) {
    this.#write(`HTTP/1.1 200\r\n\r\n${body}\r\n`);
  }
}

const onNewConnection = (socket, requestHandler) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    const request = parseRequest(chunk);
    const response = new Response(socket);
    requestHandler(request, response);
    socket.end();
  });
};

const startServer = (port, requestHandler) => {
  const server = createServer((socket) =>
    onNewConnection(socket, requestHandler));

  server.listen(port, () => console.log(`Server listening to ${port}`));
};

module.exports = { onNewConnection, startServer };
