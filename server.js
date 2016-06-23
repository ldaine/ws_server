//based on tutorial 
//http://codular.com/node-web-sockets
//https://www.npmjs.com/package/websocket

var http = require('http');
var server = http.createServer(function(request, response) {});

require('./server/websocket')(server);

server.listen(1234, function() {
    console.log((new Date()) + ' Server is listening on port 1234');
});


