var WebSocketServer = require('websocket').server;


module.exports = function (server) {

    wsServer = new WebSocketServer({
        httpServer: server
    });


    wsServer.on('request', function(r){
        var connection = r.accept('echo-protocol', r.origin);

        // Create event listener
        connection.on('message', function(message) {

            // The string message that was sent to us
            var msgString = message.utf8Data;

            //send message to all clients
            connection.sendUTF(msgString);

        });

        connection.on('close', function(reasonCode, description) {
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });


    });

}

