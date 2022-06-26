const html = header => `<html><body><h1>${header}</h1></body></html>`;

const redirect = (response, src, q) => {
  location = `https://${src}.com/search?q=${q}`;

  response.statusCode = 302;
  response.setHeader('Location', location);
  response.send('');
  return true;
};

const handleError = (response) => {
  response.statusCode = 400;
  response.setHeader('content-type', 'text/html');
  response.send(html('400 error! Wrong query'));
  return true;
};

const handleSearch = ({ queryParams }, response) => {
  const { src, q } = queryParams;
  if (src && q) {
    return redirect(response, src, q);
  }
  handleError(response);
};

const queryHandler = (request, response) => {
  const { uri } = request;

  if (uri === '/search') {
    return handleSearch(request, response);
  }
  return false;
};

module.exports = { queryHandler };
