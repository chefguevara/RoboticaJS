import five from 'johnny-five';

let board = new five.Board();
let configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;
board.on('ready', () => {
    let motor = new five.Motor(configs.M1);

    motor.start(100);


    board.wait(3000, function() {
        motor.start(150);
    });

    board.wait(6000, function() {
        motor.start(250);
    });

    board.wait(15000, function() {
        motor.stop();
    });
});
