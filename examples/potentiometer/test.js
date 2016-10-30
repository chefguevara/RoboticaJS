import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {
    let potentiometer_1 = new five.Sensor({
            pin: 'A0',
            freq: 250 
        }),
        potentiometer_2 = new five.Sensor({
            pin: 'A1',
            freq: 250 
        }),
        greenLed = new five.Led(10),
        redLed = new five.Led(11);
    
    potentiometer_1.on('data', () => {
        greenLed.brightness(potentiometer_1.scaleTo(0, 255));
    });
    potentiometer_2.on('data', () => {
        redLed.brightness(potentiometer_2.scaleTo(0, 255));
    });
    
    greenLed.brightness(potentiometer_1.scaleTo(0, 255) || 0);
    redLed.brightness(potentiometer_2.scaleTo(0, 255) || 0);
});
