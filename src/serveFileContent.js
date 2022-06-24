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

const serveFileContent = ({ uri }, response, resourceFrom) => {
  const fileName = resourceFrom + uri;

  if (!fs.existsSync(fileName)) {
    return false;
  }

  const extension = getExtension(fileName);
  const contentType = determineContentType(extension);
  response.setHeader('content-type', contentType);

  const content = fs.readFileSync(fileName);
  response.send(content);
  return false;
};

module.exports = { serveFileContent };
