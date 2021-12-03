import MultChoiceQuestion from './MultChoiceQuestion';
import ShortAnswerQuestion from './ShortAnswerQuestion';

const nameQuestion = new ShortAnswerQuestion(true, 'name', 'What is your name?');

const favColorQuestion = new ShortAnswerQuestion(true, 'favColor', 'What is your favorite color?');

const favGameQuestion = new ShortAnswerQuestion(true, 'favGame', 'What is your favorite video game?');

const cityQuestion = new MultChoiceQuestion
(
  true, 
  'livesIn',
  'What city in Santa Cruz County do you live in?',
  'Santa Cruz',
  'Watsonville',
  'Scotts Valley',
  'Capitola',
  'I don\'t live in Santa Cruz County.'
);

const candyQuestion = new MultChoiceQuestion
(
  true, 
  'likesCandy',
  'Do you like to eat candy?',
  'Yes',
  'No',
  'Sometimes'
);

const demoQuestionArray = [ nameQuestion, favColorQuestion, favGameQuestion, cityQuestion, candyQuestion ];

export { demoQuestionArray, nameQuestion, favColorQuestion,cityQuestion, candyQuestion };