const { host } = require('./src/server.js');

const html = body => `<html><body><h1>${body}</h1></body></html>`;

const response = html => `HTTP/1.1 200\r\n\r\n${html}\r\n`;

const requestHandler = ({ uri }, socket) => {
  if (uri === '/') {
    socket.write(response(html('Hello')));
    return;
  }
  socket.write(response(html('unknown')));
};

const main = () => {
  const PORT = 8000;
  host(PORT, requestHandler);
};

main();
