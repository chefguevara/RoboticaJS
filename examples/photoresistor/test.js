import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let photoresistor = new five.Sensor({
        pin: 'A0',
        freq: 250
    });

    photoresistor.on('change', function() {
        console.log(this.value);
    });

    board.repl.inject({
        pot: photoresistor
    });

    photoresistor.on('data', function() {
        console.log(this.value);
    });

});
