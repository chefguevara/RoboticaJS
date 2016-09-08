'use strict';

import socketIo  from 'socket.io-client';

const socketHandler = {

  clients: [],

  target: false,

  host: process.argv[2] || '127.0.0.1',

  port: process.argv[3] || 24772,

  get io () {
    return socketIo.connect(this.connectUri);
  },

  get connectUri () {
    return 'http://' + this.host + ':' + this.port;
  }

}

module.exports = socketHandler;
