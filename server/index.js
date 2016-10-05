import express from 'express';
import http from 'http';
import Socket from 'socket.io';
import settings from './settings';

let app = express(),
    server = http.createServer(app),
    io = Socket.listen(server),
    clients = {};

io.sockets
    .on('connection', (socket) => {
        clients[socket.id] = socket;
        console.log(`${socket.id} connected.`);
        socket.on('data', (data) => {
            let client = clients[data.target];
            console.log(`Temperature of ${data.value} received from ${socket.id} to ${data.target}`);
            client.emit('data', data);
        });
        socket.on('disconnect', (reason) => {
            console.log(`${socket.id} discconect. ${reason}`);
            delete clients[socket.id];
            io.sockets.emit('update-clients', Object.keys(clients));
        });
        io.sockets.emit('update-clients', Object.keys(clients));
        socket.emit('ready');
    });

server.listen(settings.port, settings.host, () => {
    console.log('listening on *:24772');
});
