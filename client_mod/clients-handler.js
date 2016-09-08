'use strict';

import inquirer from 'inquirer';

const clientsHandler = {

  selectClient: (clients, callback) => {

    let promptQuestions = [
      {
        type: 'list',
        name: 'target',
        message: 'Select a client from the list',
        choices: clients,
      }
    ];

    inquirer.prompt(promptQuestions).then((result) => {
        callback(result);
    });
  }
}

module.exports = clientsHandler;
