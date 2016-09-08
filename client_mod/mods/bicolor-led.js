'use strict';

import five from 'johnny-five';

const biColorLed = {

    _greenLedHandler: false,
    _redLedHandler: false,
    _ledPinsDefaults: {
      green: 10,
      red: 11
    },
    initialized: false,

    init: (pins) => {

      let ledPins = pins || this._ledPinsDefaults;

      this._greenLedHandler  = new five.Led(ledPins.green);
      this._redLedHandler = new five.Led(ledPins.red);

      this.turnOff();

      this.initialized = true;
    },

    turnOff: (led) => {
      switch (led) {

        case 'red':
          this.redLed = 0;
          break;

        case 'green':
          this.greenLed = 0;
          break;

        default:
          this.redLed = 0;
          this.greenLed = 0;
          break;
      }
    },

    turnOn: (led) => {
      switch (led) {

        case 'red':
          this.redLed = 255;
          break;

        case 'green':
          this.greenLed = 255;
          break;

        default:
          this.redLed = 255;
          this.greenLed = 255;
          break;
      }
    },

    set greenLed (value) {
      if (this.initialized) {
        this._greenLedHandler.brightness(value);
      }
    },

    set redLed (value) {
      if (this.initialized) {
        this._redLedHandler.brightness(value);
      }
    },

};

module.exports = biColorLed;