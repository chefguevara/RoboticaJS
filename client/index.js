import socketIo from 'socket.io-client';

let host = process.argv[2] || '127.0.0.1',
    port = process.argv[3] || 24772,
    io = socketIo.connect(`http://${host}:${port}`);

io.on('connect', () => {
    console.log(`Connected to ${host}`);
}).on('ready', () => {
    console.log('waiting for sensor data...');
}).on('data', (data) => {
    console.log(data);
});
