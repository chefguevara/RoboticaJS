import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let ball_switch  = new five.Sensor.Digital(3);

    ball_switch.on('change', () => {
        console.log('my ball is shaking!!!');
    });
});
