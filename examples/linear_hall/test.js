import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let hall = new five.Sensor.Digital(3);

    hall.on('change', () => {
        console.log(hall.value);

    });
});
