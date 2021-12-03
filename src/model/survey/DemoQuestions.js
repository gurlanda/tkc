import MultChoiceQuestion from './question-types/MultChoiceQuestion';
import ShortAnswerQuestion from './question-types/ShortAnswerQuestion';

const demoQuestionArray =
[
  new ShortAnswerQuestion(true, 'name', 'What is your name?'),
  
  new ShortAnswerQuestion(true, 'favColor', 'What is your favorite color?'),

  new ShortAnswerQuestion(true, 'favGame', 'What is your favorite video game?'),

  new ShortAnswerQuestion(true, 'whyChocolate', 'Why does chocolate taste like chocolate?'),

  new MultChoiceQuestion
  (
    true, 
    'livesIn',
    'What city in Santa Cruz County do you live in?',
    'Santa Cruz',
    'Watsonville',
    'Scotts Valley',
    'Capitola',
    'I don\'t live in Santa Cruz County.'
  ),

  new MultChoiceQuestion
  (
    true, 
    'likesCandy',
    'Do you like to eat candy?',
    'Yes',
    'No',
    'Sometimes'
  )
];

export { demoQuestionArray };