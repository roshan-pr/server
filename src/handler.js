const { requestHandler } = require('./requestHandler.js');
const { serveFileContent } = require('./serveFileContent.js');
const { noFileHandler } = require('./noFileHandler.js');
const { countRequest } = require('./countRequestHandler.js');

const createHandler = () => {
  const handlers = [countRequest(), serveFileContent, requestHandler, noFileHandler];
  return (request, response, resourceFrom) => {
    for (const handler of handlers) {
      if (handler(request, response, resourceFrom)) {
        return true;
      }
    }
    return false;
  }
};

module.exports = { createHandler };
