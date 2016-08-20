import socketIo  from 'socket.io-client';
import prompt from 'prompt';
import settings  from '../server/settings';

let io = socketIo.connect(`http://${settings.host}:${settings.port}`);

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
   console.log(`Connected to ${settings.host}`);
}).on('ready', () => {
    doPrompt();
});
