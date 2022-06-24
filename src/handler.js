const { requestHandler } = require('./requestHandler.js');
const { serveFileContent } = require('./serveFileContent.js');
const { noFileHandler } = require('./noFileHandler.js');

const handleRequest = (request, response) => {
  const handlers = [serveFileContent, requestHandler, noFileHandler];
  for (const handler of handlers) {
    if (handler(request, response)) {
      return true;
    }
  }
  return false;
};

module.exports = { handleRequest };
