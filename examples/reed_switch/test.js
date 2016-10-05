import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let reedSwitch = new five.Sensor.Digital(3);

    reedSwitch.on('change', () => {
        if (reedSwitch.value === 1) {
            console.log('I\'m feeling attracted!!!');
        }
    });
});
