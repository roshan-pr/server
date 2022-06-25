const html = header => `<html><body><h1>${header}</h1></body></html>`;

const handleFacebook = (response) => {
  response.statusCode = 301;
  response.setHeader('content-type', 'text/html');
  response.setHeader('Location', '/meta');
  response.send('');
  return true;
};

const handleMeta = (response) => {
  response.setHeader('content-type', 'text/html');
  response.send(html('This is meta -facebook ;)'));
  return true;
};

const handleHomePage = (response) => {
  response.setHeader('content-type', 'text/html');
  response.send(html('This is home page'));
  return true;
};

const handleGoogle = (response) => {
  response.statusCode = 302;
  response.setHeader('Location', 'https://google.com');
  response.send('');
  return true;
};

const requestHandler = ({ uri }, response) => {
  if (uri === '/') {
    return handleHomePage(response);
  }
  if (uri === '/meta') {
    return handleMeta(response);
  }
  if (uri === '/facebook') {
    return handleFacebook(response);
  }
  if (uri === '/google') {
    return handleGoogle(response);
  }
  return false;
};

module.exports = { requestHandler };
