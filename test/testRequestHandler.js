const assert = require('assert');
const { requestHandler } = require('../src/requestHandler.js');
const { Response } = require('../src/response.js');

const mockSocket = () => {
  return {
    actualResponse: [],
    isEnd: false,
    write: function (response) {
      this.actualResponse.push(response);
    },
    end: function () {
      this.isEnd = true;
    }
  };
};

describe('requestHandler', () => {
  it('Should give response for root /', () => {
    const mockedSocket = mockSocket();
    const response = new Response(mockedSocket);
    requestHandler({ uri: '/' }, response);

    const expectedResponse = ['HTTP/1.1 200 OK\r\n', 'content-length:40\r\n', '\r\n', '<html><body><h1>Hello</h1></body></html>'];
    assert.deepStrictEqual(mockedSocket.actualResponse, expectedResponse);
    assert.ok(mockedSocket.isEnd);
  });

  it('Should give unknown and set status code for wrong uri', () => {
    const mockedSocket = mockSocket();
    const response = new Response(mockedSocket);
    requestHandler({ uri: '/missing' }, response);

    const expectedResponse = ['HTTP/1.1 404 file not found\r\n', 'content-length:42\r\n', '\r\n', '<html><body><h1>unknown</h1></body></html>'];
    assert.deepStrictEqual(mockedSocket.actualResponse, expectedResponse);
    assert.strictEqual(response.statusCode, 404);
  });
});
