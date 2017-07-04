import five from 'johnny-five';
let board = new five.Board();

board.on('ready', () => {
    console.log('Connected');

    let a = new five.Servo({
            address: 0x40,
            controller: 'PCA9685',
            pin: 15,
        }),
        b = new five.Servo({
            address: 0x40,
            controller: 'PCA9685',
            range: [0, 180],
            pin: 11,
        }),
        c = new five.Servo({
            address: 0x40,
            controller: 'PCA9685',
            range: [0, 180],
            pin: 7,
        }),
        d = new five.Servo({
            address: 0x41,
            controller: 'PCA9685',
            pin: 0,
        }),
        e = new five.Servo({
            address: 0x41,
            controller: 'PCA9685',
            range: [0, 180],
            pin: 4,
        }),
        f = new five.Servo({
            address: 0x41,
            controller: 'PCA9685',
            range: [0, 180],
            pin: 8,
        });

    setTimeout(() => {
        a.center();
        b.center();
        c.center();
    }, 1000);
    setTimeout(() => {
        d.center();
        e.center();
        f.center();
    }, 2000);
});