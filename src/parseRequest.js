const parseRequestLine = (line) => {
  const [method, uri, httpVersion] = line.split(' ');
  return { method, uri, httpVersion };
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
  const { method, uri, httpVersion } = parseRequestLine(lines[0]);
  const headers = parseHeaders(lines.slice(1));
  return { method, uri, httpVersion, headers };
};

module.exports = { parseHeaders, parseRequestLine, parseRequest };
