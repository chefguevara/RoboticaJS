import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let green_led  = new five.Led(10),
        red_led  = new five.Led(11),
        direction = 1;
    green_led.brightness(255);
    red_led.brightness(0);
    board.loop(5000, () => {

        if (direction > 0) {
            green_led.fade(0, 4000);
            red_led.fade(255, 4000);
            direction = -1;
        } else {
            green_led.fade(255, 4000);
            red_led.fade(0, 4000);
            direction = 1;
        }
    });
});
