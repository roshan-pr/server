const html = header => `<html><body><h1>${header}</h1></body></html>`;

const requestHandler = ({ uri }, response) => {
  if (uri === '/') {
    response.sent(html('Hello'));
    return;
  }
  if (uri === '/abc') {
    response.sent(html('Alphabets'));
    return;
  }
  response.sent(html('unknown'));
};

exports.requestHandler = requestHandler;
