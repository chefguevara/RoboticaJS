# RoboticaJS
Desarrollaremos los con conceptos básicos de robótica y domótica utilizando tecnologías de muy bajo presupuesto y al alcance de todos, interconectaremos dispositivos electrónicos caseros con nuestros celulares, apps o apps en la nube.

Utilizaremos JavaScript como lenguaje base de progarmación, tanto para el hardware como el software. 

_Author [Marcos Tomatti](https://github.com/chefguevara/RoboticaJS)_

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7

### Running

1. Run `npm install` to install server dependencies.

2. Run the following lines (linux only):
    `$ sudo usermod -a -G dialout <username>`
    `$ sudo chmod a+rw /dev/ttyACM0`
    Where <username> is your user name in Ubuntu, /dev/ttyACM0 is the detected device of your Arduino board.

<!--/* 3. Configure your app:
    - using example file: conf/app.conf.example.json
    - create conf/app.conf.json and edit secret, appid, etc */-->


<!--## Testing _(pending)_

Running `npm test` will run the unit tests with karma.-->

## License
Copyright (c) 2016 Marcos Tomatti <mtomatti@velocitypartners.net>
Licensed under the MIT license.
