import express from 'express';
import http from 'http';
import Socket from 'socket.io';
import settings  from './settings';

let app = express(),
    server = http.createServer(app),
    io = Socket.listen(server);

io.sockets
    .on('connection', (socket) => {
        console.log(`${socket.id} connected.`);
        socket.on('data', (data) => {
            console.log(`Temperature of ${data} received from ${socket.id}`);
        });
        socket.on('disconnect', (reason) => {
            console.log(`${socket.id} discconect. ${reason}`);
        });
        socket.emit('ready');
    });

server.listen(settings.port, settings.host, () => {
    console.log('listening on *:24772');
});
