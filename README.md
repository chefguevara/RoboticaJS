# RoboticaJS
Desarrollaremos los conceptos básicos de robótica y domótica utilizando tecnologías concidas y componentes de muy bajo presupuesto y al alcance de todos, interconectaremos dispositivos electrónicos caseros con nuestros celulares, apps o apps en la nube.

Utilizaremos JavaScript como lenguaje base de progarmación, tanto para el hardware como el software. 

_Author [Marcos Tomatti](https://github.com/chefguevara/RoboticaJS)_

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7

### Running

1. Run `npm install` to install server dependencies.

2. Run the following lines (linux only):
    - `$ sudo usermod -a -G dialout <username>`
    - `$ sudo chmod a+rw /dev/ttyACM0`
    
Where &lt;username&gt; is your user name in Ubuntu, /dev/ttyACM0 is the detected device of your Arduino board.

### Discussions
- Slack: [&#35;robotica-js](https://vpartners.slack.com/archives/robotica-js)
- Issues: [Git](https://github.com/chefguevara/RoboticaJS/issues)

## Contributing
1. Branch out from master.
2. Commit and push your changes at will.
3. Before pushing run: `npm run lint` (in the absence of proper guidelines we stick to linting before creating PRs). 
4. Once the linter is happy with your code create a Pull request to get your code reviewed.  
5. If you've got enough approvals, we can merge your branch to master. 
6. Profit!

## License
Copyright (c) 2016 Marcos Tomatti <mtomatti@velocitypartners.net>
Licensed under the MIT license.
