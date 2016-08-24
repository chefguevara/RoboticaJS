import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {

    let block  = new five.Sensor.Digital(3);

    block.on('change', () => {
        //if (block.value === 1) {
        //    console.log('I\'m blocked!!!');
        //}
        console.log(block.value);
    });
});
