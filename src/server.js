var http = require('http');

http.createServer(function(request, response) {
  response.send('ok');
}).listen(process.env.PORT || 5000);
