const { startServer } = require('./src/server.js');

const html = header => `<html><body><h1>${header}</h1></body></html>`;

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
  startServer(PORT, requestHandler);
};

main();
