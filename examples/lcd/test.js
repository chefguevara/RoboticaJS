import five from 'johnny-five';

let board = new five.Board();

board.on("ready", () => {

  let random = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 15).toUpperCase();

  let lcd = new five.LCD({
    controller: 'PCF8574'
  })

  lcd.useChar('heart')
  lcd.cursor(0, 0).print('Hello world!')
  lcd.blink()
  lcd.cursor(1, 0).print(random);
  
  setTimeout(function() {
    process.exit(0);
  }, 3000);

});
