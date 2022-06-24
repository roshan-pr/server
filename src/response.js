const EOF = '\r\n';

const getCodeMessage = (code) => {
  const codeMessage = {
    200: 'OK',
    404: 'file not found'
  };
  return codeMessage[code];
};

const getStatusLine = (code) => {
  const message = getCodeMessage(code);
  return ['HTTP/1.1', code, message, EOF].join(' ');
};

class Response {
  #socket;
  #statusCode;
  constructor(socket) {
    this.#socket = socket;
    this.#statusCode = 200;
  }

  set statusCode(code) {
    this.#statusCode = code;
  }

  #write(response) {
    this.#socket.write(response);
  }

  #end() {
    this.#socket.end();
  }

  sent(body) {
    this.#write(getStatusLine(this.#statusCode));
    this.#write(EOF);
    this.#write(body);
    this.#end();
  }
}

module.exports = { Response };
