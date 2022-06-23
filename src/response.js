class Response {
  #socket;
  constructor(socket) {
    this.#socket = socket;
  }

  #write(response) {
    this.#socket.write(response);
  }

  sent(body, statusCode = 200) {
    this.#write(`HTTP/1.1 ${statusCode}\r\n\r\n${body}\r\n`);
    this.#socket.end();
  }
}

module.exports = { Response };
