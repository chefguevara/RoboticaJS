import five from 'johnny-five';

let board = new five.Board(),
    configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;
board.on('ready', () => {
    let motor = new five.Motor(configs.M1);

    motor.start(100);


    board.wait(3000, function wait3sec() {
        motor.start(150);
    });

    board.wait(6000, function wait6sec() {
        motor.start(250);
    });

    board.wait(15000, function wait15sec() {
        motor.stop();
    });
});
