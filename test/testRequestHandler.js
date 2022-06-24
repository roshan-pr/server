const assert = require('assert');
const { requestHandler } = require('../src/requestHandler.js');
const { Response } = require('../src/response.js');

describe('requestHandler', () => {
  it.only('Should give response for root /', () => {
    const mockedSocket = {
      actualResponse: '',
      isEnd: false,
      write: function (response) {
        this.actualResponse = response;
      },
      end: function () {
        this.isEnd = true;
      }
    };
    const response = new Response(mockedSocket);
    requestHandler({ uri: '/' }, response);

    const expectedResponse = 'HTTP/1.1 200\r\n\r\n<html><body><h1>Hello</h1></body></html>\r\n';
    assert.strictEqual(mockedSocket.actualResponse, expectedResponse);
  });

  it('Should give unknown and set status code for wrong uri', () => {
    let actualResponse;
    const mockedResponse = {
      statusCode: null,
      sent: (response) => {
        actualResponse = response;
      }
    };

    requestHandler({ uri: '/missing' }, mockedResponse);
    const expectedResponse = '<html><body><h1>unknown</h1></body></html>';
    assert.strictEqual(actualResponse, expectedResponse);
    assert.strictEqual(mockedResponse.statusCode, 404);
  });
});
