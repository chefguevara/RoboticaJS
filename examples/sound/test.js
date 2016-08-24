import five from 'johnny-five';

let board = new five.Board();
let digital = (process.argv[2] === 1);
board.on("ready", () => {

    let sensor = (digital) ?
            new five.Sensor.Digital(3) :
            new five.Sensor('A3');

    sensor.on('change', () => {
        //console.log((digital) ? sensor.value : sensor.scaleTo(0,10));
        console.log(sensor.value);
    });
});
