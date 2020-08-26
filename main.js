// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
<<<<<<< HEAD
  response.end("Hello getintodevops.com\n");
=======
  response.end("Hello www.releaseworksacademy.com\n");
>>>>>>> f51b0516afa750b4dea3fb27f7a6dd73e870179c
});

// listen on localhost:8000
server.listen(8000);
<<<<<<< HEAD
console.log("Server listening at http://192.168.33.10:8000/");
=======
console.log("Server listening at http://127.0.0.1:8000/");
>>>>>>> f51b0516afa750b4dea3fb27f7a6dd73e870179c
