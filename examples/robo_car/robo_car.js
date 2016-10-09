import five from 'johnny-five';
import xbox from 'xbox-controller-node';


let board = new five.Board(),
    configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;

board.on('ready', () => {
    let motor1 = new five.Motor(configs.M1);
    let motor2 = new five.Motor(configs.M2);
    let motor3 = new five.Motor(configs.M3);
    let motor4 = new five.Motor(configs.M4);
    console.log('start your engines!');

    xbox.on('leftstickMove', function (position) {
        console.log('[LEFTSTICK] position:', position);
    });
});
