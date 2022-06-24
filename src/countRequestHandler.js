const countRequest = () => {
  let count = 0;
  return ({ uri }, response) => {
    count++;
    if (uri === '/count') {
      const responseBack = `Count of response served is ${count}`
      response.send(responseBack);
      return true;
    }
    return false;
  };
};

module.exports = { countRequest };
