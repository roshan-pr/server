const { parseRequest } = require('./parseRequest.js');

const html = body => `<html><body><h1>${body}</h1></body></html>`;

const response = html => `HTTP/1.1 200\r\n\r\n${html}\r\n`;

const onNewConnection = (socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    const request = parseRequest(chunk);
    socket.write(response(html('Server')));
    socket.end();
  });
};

module.exports = { onNewConnection };
