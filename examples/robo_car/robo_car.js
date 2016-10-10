import five from 'johnny-five';
import xbox from 'xbox-controller-node';

let board = new five.Board(),
    configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;

console.log('start your engines!');


function getSpeed({y}) {
    return (y < 128) ?
        {fwd: 255 - (y * 2)} :
        {rev: ((y - 128) * 2)};
}

function getSteer({x}) {
    let steer = (x < 128) ?
    {left: 255 - (x * 2), right: 0} :
    {left: 0, right: ((x - 128) * 2)};
       // make something more sensible instead of return 0
    return {
        left: steer.right,
        right: steer.left
    };
}

board.on('ready', () => {
    const AXIS_0 = 'none',
        resetPosition = 128;

    let motors = {
            left: [
                new five.Motor(configs.M1),
                new five.Motor(configs.M4)
            ],
            right: [
                new five.Motor(configs.M2),
                new five.Motor(configs.M3)
            ]
        },
        acceleration = {fwd: 0},
        steer = {left: 0, right: 0};

    console.log('go!');

    xbox.on('leftstickMove', (position) => {
        acceleration = (position.y !== AXIS_0 || position.y !== resetPosition) ?
            {fwd: 0} : getSpeed(position);
    });
    xbox.on('rightstickMove', (position) => {
        steer = (position.x !== AXIS_0 || position.x !== resetPosition) ?
        {left: 0, right: 0} : getSteer(position);
    });

    board.loop(100, () => {
        let directionLeft = directionRight = Object.keys(acceleration),
            speed = acceleration[direction];
        if (steer.left !== 0 || steer.right !== 0) {
            /*
            if (steer.left > 0) {
                motors.right[0][direction]
                motors.right[1][direction]
            }
            */

        }
        motors.left[0][directionLeft](speed);
        motors.left[1][directionLeft](speed);
        motors.right[0][directionRight](speed);
        motors.right[1][directionRight](speed);

    });
});
