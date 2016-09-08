'use strict';

import socket from './socket-handler';
import clientsHandler from './clients-handler';
import five from 'johnny-five';
import bicolorLed from './mods/bicolor-led'

const io = socket.io;
let board = new five.Board();

board.on("ready", () => bicolorLed.init());

io.on('connect', () => {
   console.log(`Connected to ${socket.host}`);
});

io.on('update-clients', (clients) => {
    socket.clients = clients;
});

io.on('ready', () => {
  clientsHandler.selectClient(socket.clients, (result) => {
    socket.target = result.target;
  })
});

io.on('data', (data) => {
    console.log(data);

    if (data.value < 50) {
      bicolorLed.turnOff();
    } else if (data.value < 150) {
      bicolorLed.turnOn('green');
      bicolorLed.turnOff('red');
    } else if (data.value >= 150) {
      bicolorLed.turnOff('green');
      bicolorLed.turnOn('red');
    }
});










