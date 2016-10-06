import keypress from 'keypress';
import five from 'johnny-five';

const minSpeed = 1000,
    maxSpeed = 250,
    speedStep = 250,
    minDegree = 0,
    maxDegree = 180,
    degreeStep = 10;

keypress(process.stdin);

let board = new five.Board(),
    keys = new Set(['up', 'right', 'down', 'left']),
    currentAngle = 90,
    currentSpeed = 250;

function decreaseAngle() {
    return (currentAngle - degreeStep > minDegree) ?
        currentAngle - degreeStep :
        currentAngle;
}

function increaseAngle() {
    return (currentAngle + degreeStep < maxDegree) ?
        currentAngle + degreeStep :
        currentAngle;
}

function decreaseSpeed() {
    return (currentSpeed + speedStep < maxSpeed) ?
        currentSpeed + speedStep :
        currentSpeed;
}
function increaseSpeed() {
    return (currentSpeed - speedStep > minSpeed) ?
        currentSpeed - speedStep :
        currentSpeed;
}

board.on('ready', function onReady() {
    let servo = new five.Servo({
        id: 'servo1',
        pin: 3,
        range: [0, 180],
        fps: 100,
        startAt: 90
    });

    //optional
    this.repl.inject({
        servo: servo
    });

    process.stdin.on('keypress', (ch, key) => {
        if (!key || !keys.has(key.name)) {
            return;
        }
        switch (key.name) {
            case 'up':
                currentSpeed = (key.ctrl) ? maxSpeed : increaseSpeed();
                break;
            case 'right':
                currentAngle = (key.ctrl) ? maxDegree : increaseAngle();
                break;
            case 'down':
                currentSpeed = (key.ctrl) ? minSpeed : decreaseSpeed();
                break;
            case 'left':
                currentAngle = (key.ctrl) ? minDegree : decreaseAngle();
                break;
        }

        if (key && key.ctrl && key.name === 'c') {
            process.stdin.pause();
        }

        servo.to(currentAngle, currentSpeed);
    });


});

process.stdin.setRawMode(true);
process.stdin.resume();
