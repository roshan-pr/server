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

  sent(body) {
    this.#write(`HTTP/1.1 ${this.#statusCode}\r\n\r\n${body}\r\n`);
    this.#socket.end();
  }
}

module.exports = { Response };
