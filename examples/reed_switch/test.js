import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let reed_switch  = new five.Sensor.Digital(3);

    reed_switch.on('change', () => {
        if (reed_switch.value === 1) {
            console.log('I\'m feeling attracted!!!');
        }
    });
});
