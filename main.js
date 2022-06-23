const { requestHandler } = require('./src/requestHandler.js');
const { startServer } = require('./src/server.js');

const main = () => {
  const PORT = 8000;
  startServer(PORT, requestHandler);
};

main();
