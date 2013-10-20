var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(307, {
    'Location': 'https://careers.stackoverflow.com/mariosal'
  });
  response.end();
}).listen(process.env.PORT || 5000);
