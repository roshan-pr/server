const assert = require('assert');
const { EventEmitter } = require('events');
const { onNewConnection } = require('../src/server.js');

describe('onNewConnection', () => {
  it('Should take request from the user', () => {
    const mockedSocket = new EventEmitter();

    const actual = [];
    const handler = (request,) => {
      actual.push(request);
    };
    const expected = [{
      headers: {},
      httpVersion: 'HTTP/1.1',
      method: 'GeT',
      uri: '/'
    }];

    onNewConnection(mockedSocket, handler);
    mockedSocket.emit('data', 'GeT / HTTP/1.1');
    assert.deepStrictEqual(actual, expected);
  });
});
