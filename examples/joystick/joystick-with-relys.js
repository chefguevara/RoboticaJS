import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let joystick = new five.Joystick({
        //   [ x, y ]
        pins: ['A0', 'A1']
    });

    let relays = new five.Relays([2, 3, 4, 5]);
    relays.close();

    // Relays 1 for positive X and 2 for negative X
    // Relays 3 for positive Y and 4 for negative Y

    let lastValX = 0; 
    let lastValY = 0;
    let currentValX = 0;
    let currentValY = 0;
    let deltaX = 0;
    let deltaY = 0;

    joystick.on('change', function () {
        currentValX = this.x.toFixed(2);
        currentValY = this.y.toFixed(2);

        deltaX = Math.abs(currentValX - lastValX);
        deltaY = Math.abs(currentValY - lastValY);

        if(currentValX > 0.5) {
            relays[0].open();
        } else if(currentValX < -0.5) {
            relays[1].open();
        } else {
            relays[0].close();
            relays[1].close();
        }

        if(currentValY > 0.5) {
            relays[2].open();
        } else if(currentValY < -0.5) {
            relays[3].open();
        } else {
            relays[2].close();
            relays[3].close();
        }

        if(deltaX > 0.1 || deltaY > 0.1) {
            console.log('Joystick');
            console.log('  x : ', currentValX);
            console.log('  y : ', currentValY);
            console.log('--------------------------------------');

            lastValX = currentValX;
            lastValY = currentValY;  
        }        
    });
});