import five from 'johnny-five';

let board = new five.Board();

board.on("ready", () => {

    let thermistor = new five.Sensor({
        pin: 'A0'
    });

    thermistor.on("change", (data) => {
	console.log(`Raw: ${thermistor.raw}`);
	console.log(`Value: ${thermistor.value}`);
	console.log(`Analog: ${thermistor.analog}`);
        voltToTemp(thermistor.raw);
    });

});

function voltToTemp(reading) {
    let thermistorOhm = 10000, 
	resistanceOhm = 10000,
	bcoefficient = 3435,
	tempNominal = 25,
	resistance,
	temp;
    console.log(`reading: ${reading}`);

    resistance = resistanceOhm / ((1023/reading));
    console.log(`resistance: ${resistance}`);


    temp = (1 / ((Math.log(resistance / thermistorOhm) / bcoefficient) + (1 / (tempNominal + 273.15)))) - 273.15;
    console.log(`Temperature: ${temp}`);
    //return
}
