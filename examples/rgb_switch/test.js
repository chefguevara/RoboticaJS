import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {
    let button = new five.Button({
        pin: 3,
    });

    button.on('hold', function onHold() {
        console.log('Button held');
    });

    button.on('press', function onPress() {
        console.log('Button pressed');
    });

    button.on('release', function onRelease() {
        console.log('Button released');
    });

});