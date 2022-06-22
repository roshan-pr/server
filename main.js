const { createServer } = require('net');
const { onNewConnection } = require('./src/server.js');

const main = () => {
  const PORT = 8000;
  const server = createServer(onNewConnection);
  server.listen(PORT, () => console.log(`Server listening to ${PORT}`));
};

main();
