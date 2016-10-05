import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let ballSwitch = new five.Sensor.Digital(3);

    ballSwitch.on('change', () => {
        console.log('my ball is shaking!!!');
    });
});
