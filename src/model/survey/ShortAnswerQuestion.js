import Question from "./Question";
import { SHORT_ANSWER } from './questionTypes';

class ShortAnswerQuestion extends Question {
  constructor(isRequired, questionName, questionText, response = '') {
    super(SHORT_ANSWER, isRequired, questionName, questionText);
    
    this.response = response;
  }
}

export default ShortAnswerQuestion;
