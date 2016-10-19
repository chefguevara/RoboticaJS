import five from 'johnny-five';

let board = new five.Board();
let int16 = function (msb, lsb) {
  var result = (msb << 8) | lsb;

  // Check highest bit for sign. If on, value is negative
  return result >> 15 ? ((result ^ 0xFFFF) + 1) * -1 : result;
};
board.on("ready", () => {
  board.i2cConfig({address: 0x0A});
  board.loop(5000, () => {
    board.i2cReadOnce(0x0A, 8, function(bytes) {
      console.log("Humidity", int16(bytes[0], bytes[1])/100);
      console.log("Ambience", int16(bytes[2], bytes[3])/100);
      console.log("Temp1", int16(bytes[4], bytes[5])/100);
      console.log("temp2", int16(bytes[6], bytes[7])/100);
    });
  });
});
