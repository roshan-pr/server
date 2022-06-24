const fs = require('fs');
const html = header => `<html><body><h1>${header}</h1></body></html>`;

const serveFileContent = ({ uri }, response) => {
  const fileName = './public' + uri;

  if (!fs.existsSync(fileName)) {
    response.statusCode = 404;
    response.send(html('file not found'));
    return;
  }

  const content = fs.readFileSync(fileName);
  response.send(content);
};

module.exports = { serveFileContent };
