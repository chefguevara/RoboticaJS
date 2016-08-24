import socketIo  from 'socket.io-client';
import prompt from 'prompt';

let host = process.argv[2] || '127.0.0.1',
    port = process.argv[3] || 24772,
    io = socketIo.connect(`http://${host}:${port}`);

    let doPrompt = () => {
    let schema = {
        properties: {
            temperature: {
                pattern: /^\d+$/,
                message: 'The temperature must be a number.',
                required: true
            }
        }
    };

    prompt.start();

    prompt.get(schema, (err, result) => {
        io.emit('data', result.temperature);
        doPrompt();
    });
};


io.on('connect', () => {
   console.log(`Connected to ${host}`);
}).on('ready', () => {
    doPrompt();
});
