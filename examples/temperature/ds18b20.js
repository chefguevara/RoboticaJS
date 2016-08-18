import five from 'johnny-five';

let board = new five.Board();

board.on("ready", () => {

    let temperature = new five.Thermometer({
        controller: "DS18B20",
        pin: 8,
        freq: 1000
    });

    temperature.on("data", function() {
        console.log(`${this.celsius}°C on 0x${this.address.toString(16)}`);
    });

});
