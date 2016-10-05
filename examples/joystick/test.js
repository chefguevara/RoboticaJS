import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let joystick = new five.Joystick({
        //   [ x, y ]
        pins: ['A0', 'A1']
    });

    joystick.on('change', function () {
        console.log('Joystick');
        console.log('  x : ', this.x);
        console.log('  y : ', this.y);
        console.log('--------------------------------------');
    });
});