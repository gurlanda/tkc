import { MULT_CHOICE, SHORT_ANSWER } from './questionTypes';

class Response {
  constructor(questionType, questionName, response) {
    this.questionType = questionType;
    this.questionName = questionName;
    this.response = response;
  }
}

const getResponse = (question) => {
  const { questionType, questionName } = question;

  switch(questionType) {
    case MULT_CHOICE:
      let multChoiceResponse = 'None selected';
      for (let option in question.options) {
        if (option.isSelected) {
          multChoiceResponse = option.optionText;
          break;
        }
      }

      return new Response(questionType, questionName, multChoiceResponse);

    case SHORT_ANSWER:
      return new Response(questionType, questionName, question.response);

    // Otherwise, the argument was not a Question
    default:
      throw new Error('getResponse(): Passed argument is not of type Question.');
  }
}

export default Response;
export { getResponse };