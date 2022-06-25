const parseUri = (paramString) => {
  const queryParams = {};
  const [uri, queryStrings] = paramString.split('?');

  if (queryStrings) {
    const queries = queryStrings.split('&');
    queries.forEach(query => {
      const [param, value] = query.split('=');
      queryParams[param] = value;
    });
  }
  return { uri, ...queryParams };
};

const parseRequestLine = (line) => {
  const [method, rawUri, httpVersion] = line.split(' ');
  return { method, ...parseUri(rawUri), httpVersion };
};

const parseHeader = (line) => {
  const indexOfSeparator = line.indexOf(':');
  const header = line.substring(0, indexOfSeparator).trim();
  const value = line.substring(indexOfSeparator + 1).trim();
  return [header, value];
};

const parseHeaders = (lines) => {
  const headers = {};
  let index = 0;
  while (index < lines.length && lines[index].length > 0) {
    const [header, value] = parseHeader(lines[index]);
    headers[header.toLowerCase()] = value;
    index++;
  }
  return headers;
};

const parseRequest = (chunk) => {
  const lines = chunk.split('\r\n');
  const parsedRequestLine = parseRequestLine(lines[0]);
  const headers = parseHeaders(lines.slice(1));
  return { ...parsedRequestLine, headers };
};

module.exports = { parseHeaders, parseRequestLine, parseRequest };
