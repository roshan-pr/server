const { startServer } = require('./server.js');
const { handleRequest } = require('./src/handler.js');

const main = () => {
  const PORT = 8000;
  startServer(PORT, handleRequest);
};

main();
