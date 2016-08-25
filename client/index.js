import socketIo  from 'socket.io-client';
import inquirer from 'inquirer';

let host = process.argv[2] || '127.0.0.1',
    port = process.argv[3] || 24772,
    io = socketIo.connect(`http://${host}:${port}`),
    clients = [];

let doPrompt = () => {
    let promptQuestions = [
        {
            type: 'list',
            name: 'target',
            message: 'select a client from the list',
            choices: clients,
        },
        {
            type: 'input',
            name: 'value',
            message: 'Current Temperature',
            validate: function validate(input) {
                let regexp = /^\d+$/;
                return (regexp.test(input)) ? true : 'The temperature must be a number';
            }
        }
    ];

    inquirer.prompt(promptQuestions).then((result) => {
        io.emit('data', result);
        doPrompt();
    });
};

let updateClients = (updatedClients) => {
    clients = updatedClients;
};

io.on('connect', () => {
   console.log(`Connected to ${host}`);
}).on('update-clients', (clients) => {
    updateClients(clients);
}).on('ready', () => {
    doPrompt();
}).on('data', (data) => {
    console.log(data);
});
