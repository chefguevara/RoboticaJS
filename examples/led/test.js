import five from 'johnny-five';

let board = new five.Board({port:'COM8'});

board.on('ready', () => {
    let led = new five.Led(13);
    led.strobe(500);
});
