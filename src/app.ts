import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {

    console.log(ws)

    console.log('Client Connected');

    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('Server Message');

    ws.on('close', () => {
        console.log('Cient Disconnected')
    })
});

console.log('http://localhost:3000');