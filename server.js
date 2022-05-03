const WebSocket = require('ws');

const server = new WebSocket.Server({port:3000});

server.on('connection', ws => {
    ws.on('message', function message(data, isBinary) {
        server.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN){
                client.send(data, { binary: isBinary });
            }
        })
    })

    ws.send("This is a chat with other subscribers.");
});