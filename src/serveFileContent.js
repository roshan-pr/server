const fs = require('fs');

const getExtension = (fileName) => {
  const index = fileName.lastIndexOf('.');
  return fileName.substring(index + 1);
};

const determineContentType = (extension) => {
  const contentTypes = {
    jpeg: 'image/jpeg',
    html: 'text/html'
  };
  return contentTypes[extension] || 'text/plain';
};

const serveFileContent = ({ uri }, response) => {
  const fileName = './public' + uri;

  if (!fs.existsSync(fileName)) {
    response.statusCode = 404;
    response.send('file not found');
    return;
  }

  const extension = getExtension(fileName);
  const contentType = determineContentType(extension);
  response.setHeader('content-type', contentType);

  const content = fs.readFileSync(fileName);
  response.send(content);
};

module.exports = { serveFileContent };
