const html = body => `<html><body><h1>${body}</h1></body></html>`;

const response = html => `HTTP/1.1 200\r\n\r\n${html}\r\n`;

const parseRequestLine = (line) => {
  const [method, uri, httpVersion] = line.split(' ');
  return { method, uri, httpVersion };
};

const parseRequest = (chunk) => {
  const lines = chunk.split('\r\n');
  const { method, uri, httpVersion } = parseRequestLine(lines[0]);
  return { method, uri, httpVersion };
};

const onNewConnection = (socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    const request = parseRequest(chunk);
    socket.write(response(html('Server')));
    socket.end();
  });
};

module.exports = { parseRequest, parseRequestLine, onNewConnection };
