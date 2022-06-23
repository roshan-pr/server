const fs = require('fs');
const html = header => `<html><body><h1>${header}</h1></body></html>`;

const serveFileContent = (request, response) => {
  let { uri } = request;
  if (uri === '/') {
    uri = 'sample';
  }
  const fileName = './public' + uri;

  if (!fs.existsSync(fileName)) {
    response.statusCode = 404;
    response.sent(html('file not found'));
    return;
  }

  const content = fs.readFileSync(fileName, 'utf8');
  response.sent(html(content));
};

module.exports = { serveFileContent };
