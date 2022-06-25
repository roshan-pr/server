const handleSearch = (request, response) => {
  const { src, q } = request;
  if (src && q) {
    response.statusCode = 302;
    response.setHeader('Location', `https://${src}.com/search?q=${q}`);
    response.send('');
    return true;
  }
  return false;
};

const queryHandler = (request, response) => {
  const { uri } = request;

  if (uri === '/search') {
    return handleSearch(request, response);
  }
  return false;
};

module.exports = { queryHandler };
