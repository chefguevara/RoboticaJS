import socketIo  from 'socket.io-client';
import inquirer from 'inquirer';
import five from 'johnny-five';

let board = new five.Board();

let host = process.argv[2] || '127.0.0.1',
    port = process.argv[3] || 24772,
    io ,
    clients = [],
    photoresistor;

let doPrompt = () => {
        let promptQuestions = [
            {
                type: 'list',
                name: 'target',
                message: 'select a client from the list',
                choices: clients,
            }
        ];
        inquirer.prompt(promptQuestions).then((result) => {
            photoresistor.on("change", function() {
                console.log(this.value);
                let sendData = {
                        target: result.target,
                        value: this.value
                    }
                io.emit('data', sendData);
            });
            // io.emit('data',         result);
        });
    };

    let updateClients = (updatedClients) => {
        clients = updatedClients;
    };


board.on("ready", () => {

    io  = socketIo.connect(`http://${host}:${port}`);
     photoresistor = new five.Sensor({
        pin: "A0",
        freq: 250
    });

    
    board.repl.inject({
        pot: photoresistor
    });

    io.on('connect', () => {
       console.log(`Connected to ${host}`);
    }).on('update-clients', (clients) => {
        updateClients(clients);
    }).on('ready', () => {
        doPrompt();
    }).on('data', (data) => {
        console.log(data);
    });

});




