import five from 'johnny-five';

let board = new five.Board();

board.on("ready",() => {
  // Pin only
let led = new five.Led(13);
let relay = new five.Relay(2);
led.blink(500);

setTimeout(() => {relay.toggle();},1000);
setTimeout(() => {relay.toggle();},2000);
setTimeout(() => {relay.toggle();},3000);
setTimeout(() => {relay.toggle();},4000);
setTimeout(() => {relay.toggle();},5000);
setTimeout(() => {relay.toggle();},6000);
});
