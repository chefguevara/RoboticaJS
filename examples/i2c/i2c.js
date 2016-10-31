
import five from 'johnny-five';

let board = new five.Board();
let int16 = function (msb, lsb) {
  let result = (msb << 8) | lsb;
  return result >> 15 ? ((result ^ 0xFFFF) + 1) * -1 : result;
};

board.on("ready", () => {
    board.i2cConfig();
    board.i2cRead(0x0A, 4, function(bytes) {
      console.log("Temp: ", int16(bytes[0], bytes[1]));
    });
});
