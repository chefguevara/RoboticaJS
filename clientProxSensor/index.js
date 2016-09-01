import socketIo  from 'socket.io-client';
import inquirer from 'inquirer';
import five from 'johnny-five';

let board = new five.Board();

let host = process.argv[2] || '192.168.30.120',
    port = process.argv[3] || 24772,
    io ,
    clients = [],
    piezoBuzzer ;

let actions = {

    playSong: (buzzer) => {
        console.log('playing song');

        buzzer.play({

        // song is composed by an array of pairs of notes and beats
        // The first argument is the note (null means "no note")
        // The second argument is the length of time (beat) of the note (or non-note)
        song: [
            ["C4", 1 / 4]
            
           
        ],
        tempo: 100
    });
    }
};



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
    piezoBuzzer = new five.Piezo({
        pin: 8
    });

    io.on('connect', () => {
       console.log(`Connected to ${host}`);
    }).on('update-clients', (clients) => {
        updateClients(clients);
    }).on('ready', () => {
        doPrompt();
    }).on('data', (data) => {
           console.log(data.value);
           if (data.value == 1)
            actions.playSong(piezoBuzzer);
    });

});