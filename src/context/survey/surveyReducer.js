import { 
  SET_MULTCHOICE,
  SET_SHORT_ANSWER,
  CLEAR
} from '../types';

import Option from '../../model/survey/Option';

const SurveyReducer = (state, action) => {
  switch(action.type) {
    case SET_SHORT_ANSWER:
      const { shortAnsQuestionName, shortAnsResponse } = action.payload;

      console.log('SurveyReducer:state')
      console.log(state)
      console.log(shortAnsQuestionName)
      console.log(shortAnsResponse)
      return {
        ...state,
          [shortAnsQuestionName]: shortAnsResponse
      };

    case SET_MULTCHOICE:
      const { questionName, selectedOption } = action.payload;

      console.log('action.payload')
      console.log(action.payload)
      console.log('state')
      console.log(state)

      const newOptions = state[questionName].map((option) => {
        const { optionText } = option;

        if (optionText === selectedOption) {
          return new Option(optionText, true); 
        }
        else {
          return new Option(optionText, false); 
        }
      });

      return {
        ...state,
        [questionName]: newOptions
      };

    case CLEAR:
      // initialState from SurveyState was passed into action.payload
      return action.payload;
    default:
      return state;
  }
}

export default SurveyReducer;