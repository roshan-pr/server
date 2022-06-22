const assert = require('assert');
const {
  parseRequest,
  parseHeaders,
  parseRequestLine } = require('../src/server.js');

describe('parseRequest', () => {
  it('should parse the given request line', () => {
    const actual = parseRequest('GET / HTTP/1.1');
    const expected = {
      method: 'GET',
      uri: '/',
      httpVersion: 'HTTP/1.1',
      headers: {}
    };
    assert.deepStrictEqual(actual, expected);
  });

  it('should parse the given request with headers', () => {
    const actual = parseRequest('GET / HTTP/1.1\r\nHost: localhost:8000');
    const expected = {
      method: 'GET',
      uri: '/',
      httpVersion: 'HTTP/1.1',
      headers: { Host: 'localhost:8000' }
    };
    assert.deepStrictEqual(actual, expected);
  });
});

describe('parseRequestLine', () => {
  it('should parse the given request line', () => {
    const actual = parseRequestLine('GET / HTTP/1.1');
    const expected = { method: 'GET', uri: '/', httpVersion: 'HTTP/1.1' };
    assert.deepStrictEqual(actual, expected);
  });
});

describe('parseHeaders', () => {
  it('should parse the given header', () => {
    const actual = parseHeaders(['accept: */*']);
    const expected = { accept: '*/*' };
    assert.deepStrictEqual(actual, expected);
  });

  it('should parse header with multiple ":"', () => {
    const actual = parseHeaders(['Host: localhost:8000']);
    const expected = { Host: 'localhost:8000' };
    assert.deepStrictEqual(actual, expected);
  });

  it('should parse multiple headers', () => {
    const actual = parseHeaders(['Host: localhost:8000', 'User-Agent: curl/7.64.1']);
    const expected = { Host: 'localhost:8000', 'User-Agent': 'curl/7.64.1' };
    assert.deepStrictEqual(actual, expected);
  });
});
