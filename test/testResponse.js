const assert = require('assert');
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

describe('Response', () => {
  it('should send response to the socket', () => {
    const mockedSocket = mockSocket();

    const response = new Response(mockedSocket);
    response.send('body');
    const expected = ['HTTP/1.1 200 OK\r\n', 'content-length:4\r\n', '\r\n', 'body'];
    assert.deepStrictEqual(mockedSocket.actualResponse, expected);
  });
});
