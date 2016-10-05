import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {
    let led = new five.Led(12);
    led.on();
});
