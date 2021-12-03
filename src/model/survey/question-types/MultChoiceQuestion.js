import Option from '../Option';
import Question from '../Question';
import { MULT_CHOICE } from '../questionTypes';

class MultChoiceQuestion extends Question{
  constructor(isRequired, questionName, questionText, ...optionTexts) {
    super(MULT_CHOICE, isRequired, questionName, questionText)
    this.options = [];

    optionTexts.forEach(
      optionText => this.options.push(new Option(optionText))
    );
  }
} 

export default MultChoiceQuestion;