import five from 'johnny-five';

let board = new five.Board();

board.on("ready", () => {

    let collision  = new five.Sensor.Digital(3);

    collision.on('change', () => {
        if (collision.value === 0) {
            console.log('Brace for impact!!!!');
        }
    });
});
