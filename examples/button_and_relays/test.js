import five from 'johnny-five';

let board = newfive.Board();

board.on('ready', () => {
  let button = new five.Button({
    pin: 6, 
    invert: true
  });

  let relays = five.Relays([8,9,10,11]);

  button.on('hold', function() {
    console.log('Button held - Toogle Relay 2' );
    relays[1].toggle();
  });

  button.on('press', function() {
    console.log('Button pressed - Toogle Relay 1' );
    relays[0].toggle();
  });

  button.on('release', function() {
    console.log('Button released' );
  });
  
});
