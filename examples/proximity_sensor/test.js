import five from 'johnny-five';

let board = new five.Board();

board.on("ready", () => {

	var proximity = new five.Proximity({
		controller: "HCSR04",
		pin: 7,
		freq: 1000
	});

  proximity.on("data", function() {
	console.log("Proximity: ");
	console.log("  cm  : ", this.cm);
	console.log("-----------------");
  });

  proximity.on("change", function() {
	console.log("The obstruction has moved.");
  });
	
	
});
