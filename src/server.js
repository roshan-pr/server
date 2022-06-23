const { parseRequest } = require('./parseRequest.js');

const html = body => `<html><body><h1>${body}</h1></body></html>`;

const response = html => `HTTP/1.1 200\r\n\r\n${html}\r\n`;

const requestHandler = ({ uri }, socket) => {
  if (uri === '/') {
    socket.write(response(html('Hello')));
    return;
  }
  socket.write(response(html('unknown')));
};

const onNewConnection = (socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    const request = parseRequest(chunk);
    requestHandler(request, socket);
    socket.end();
  });
};

module.exports = { onNewConnection };
