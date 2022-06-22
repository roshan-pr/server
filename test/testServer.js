const assert = require('assert');
const { parseRequest, parseRequestLine } = require('../src/server.js');

describe('parseRequest', () => {
  it('should parse the given request', () => {
    const actual = parseRequest('GET / HTTP/1.1');
    const expected = { method: 'GET', uri: '/', httpVersion: 'HTTP/1.1' };
    assert.deepStrictEqual(actual, expected)
  });
});

describe('parseRequestLine', () => {
  it('should parse the given request line', () => {
    const actual = parseRequestLine('GET / HTTP/1.1');
    const expected = { method: 'GET', uri: '/', httpVersion: 'HTTP/1.1' };
    assert.deepStrictEqual(actual, expected);
  });
});
