const html = header => `<html><body><h1>${header}</h1></body></html>`;

const requestHandler = ({ uri }, response) => {
  if (uri === '/') {
    response.send(html('Hello'));
    return;
  }
  if (uri === '/abc') {
    response.send(html('Alphabets'));
    return;
  }
  response.statusCode = 404;
  response.send(html('unknown'));
};

module.exports = { requestHandler };
