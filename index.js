// write your code here
var http = require('http');

http.createServer(function (req, res) { // go get http, create a server req-request, res-response
  res.writeHead(200, {'Content-Type': 'text/plain'}); // text/plain could be json, whatever you're calling
  res.end('Hello World'); // where it ends
})
.listen(8080);
console.log('Server is running.');