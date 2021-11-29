// Object should contain the question text, the choices, and the state variables
// Choices: array of option objects, where each object contains the option text and an isSelected boolean

import Option from './Option';

let cityQuestion = {
  questionName: 'City',
  questionText: 'What city in Santa Cruz County do you live in?',
  options: 
    [new Option('Santa Cruz'), 
    new Option('Watsonville'), 
    new Option ('Scotts Valley'), 
    new Option('Capitola'), 
    new Option('I don\'t live in Santa Cruz County.')]
};

export default cityQuestion;