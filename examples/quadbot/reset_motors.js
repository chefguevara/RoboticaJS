import five from 'johnny-five';
let board = new five.Board();

board.on('ready', () => {
    console.log('Connected');

    let a = new five.Servo({
            address: 0x40,
            controller: 'PCA9685',
            pin: 0,
        }),
        b = new five.Servo({
            address: 0x40,
            controller: 'PCA9685',
            range: [0, 180],
            pin: 4,
        }),
        b = new five.Servo({
            address: 0x40,
            controller: 'PCA9685',
            range: [0, 180],
            pin: 5,
        });
    a.center();
    b.center();
    c.center();

});