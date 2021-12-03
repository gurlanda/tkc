import { MULT_CHOICE, SHORT_ANSWER } from "../../model/survey/questionTypes"
import MultChoiceInput from './MultChoiceInput';
import ShortAnswerInput from './ShortAnswerInput';

const questionStateToInput = (questionStateItem) => {
  const { questionData, questionID } = questionStateItem;
  const { questionType } = questionData;

  switch(questionType) {
    case MULT_CHOICE:
      return <MultChoiceInput questionKey={questionID} />
    case SHORT_ANSWER:
      return <ShortAnswerInput questionKey={questionID} />
    default:
      return null;
  }
}

export { questionStateToInput };