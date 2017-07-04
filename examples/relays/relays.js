import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {
    let relay = new five.Relay({pin: 2, type: 'NC'});
    board.repl.inject({
        relay: relay
    });
});
