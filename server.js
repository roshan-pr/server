const { createServer } = require('net');

const html = body => `<html><body><h1>${body}</h1></body></html>`;

const response = html => `HTTP/1.1 200\r\n\r\n${html}\r\n`;

const onNewConnection = (socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    socket.write(response(html('Server')));
    socket.end();
  });
};

const PORT = 8000;
const server = createServer(onNewConnection);
server.listen(PORT, () => console.log(`Server listening to ${PORT}`));
