# TODO

  - [ ] Handle server crash for wrong input
    - [ ] Redirect to same page

# CONSIDER

  - [ ] Introduce handler for logging the requests

# DONE

  - [x] Implement form 
    - [x] Accept request from form
  - [x] Take query parameters from the request
  - [x] Redirect requests
  - [x] Load all content of files to memory upfront
  - [x] Parameterize the path of the server, where to serve files from
  - [x] Handle dynamic handler like count
  - [x] Utilize multiple handlers, to handle different requests
  - [x] Add test for response
  - [x] Add test for server with event emitter
  - [x] Add headers to the response
  - [x] Introduce end method in response
  - [x] Handle images 
  - [x] Introduce serving file content
  - [x] Make the socket secure, now socket is exposed to any actions
  - [x] Enclose the socket in a class and give behaviors on socket
  - [x] Introduce status code to the response
  - [x] Move the response class to separate file
  - [x] Introduce response entity
  - [x] Separate request handler to separate file
  - [x] Make the server independent
    - [x] Pass the request handler from the main
    - [x] Server takes arguments port and request handler
  - [x] Add request handler
  - [x] Move parser to separate file
  - [x] Parse header to lower case
  - [x] Parse the request from the client
  - [x] Moved server to src
  - [x] Write test for parseRequestLine
  - [x] Separate html and response independent.
