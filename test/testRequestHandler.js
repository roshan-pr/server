const assert = require('assert');
const { requestHandler } = require('../src/requestHandler.js');

describe('requestHandler', () => {
  it.only('Should give response for root /', () => {
    let actualResponse;
    const mockedResponse = {
      sent: (response) => {
        actualResponse = response;
      }
    };

    requestHandler({ uri: '/' }, mockedResponse);
    const expectedResponse = '<html><body><h1>Hello</h1></body></html>';
    assert.strictEqual(actualResponse, expectedResponse);
  });
});
