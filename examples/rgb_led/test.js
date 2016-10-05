import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let rgb_led  = new five.Led.RGB([9, 10, 11]);
        //i = 0,
        //rainbow = ['FF0000', 'FF7F00', 'FFFF00', '00FF00', '0000FF', '4B0082', '8F00FF'];
    rgb_led.on();
    rgb_led.color('#ff0000');
/*    board.loop(1000, () => {
        if (i + 1 === rainbow.length) {
            i = 0;
        }
        rgb_led.color(rainbow[i++]);
    });*/
});
