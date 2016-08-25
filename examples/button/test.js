import five from 'johnny-five';

let board = new five.Board();

board.on("ready", () => {
  let button = new five.Button({
    pin: 6, 
    invert: true
  });

  button.on("hold", function() {
    console.log("Button held" );
  });

  button.on("press", function() {
    console.log("Button pressed" );
  });

  button.on("release", function() {
    console.log("Button released" );
  });

});
