const html = header => `<html><body><h1>${header}</h1></body></html>`;

const requestHandler = ({ uri }, response) => {
  if (uri === '/') {
    response.send(html('Hello'));
    return true;
  }
  if (uri === '/abc') {
    response.send(html('Alphabets'));
    return true;
  }
  return false;
};

module.exports = { requestHandler };
