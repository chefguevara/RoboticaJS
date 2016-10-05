import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let sensor = new five.Sensor({
        pin: 'A0',
        //freq: 250,
        //threshold: 5
    });

    sensor.on('change', function() {
        console.log(this.value);
    });
});
