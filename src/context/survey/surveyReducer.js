import { 
  SET_MULTCHOICE,
  SET_SHORT_ANSWER,
  CLEAR
} from '../types';

import Option from '../../model/survey/Option';

const SurveyReducer = (state, action) => {
  switch(action.type) {
    case SET_SHORT_ANSWER:
      const { shortAnsQuestionName, value } = action.payload;

      return {
        ...state,
        [shortAnsQuestionName]: value
      };
    case SET_MULTCHOICE:
      const { arrayName, selectedOption } = action.payload;

      const newOptions = state[arrayName].map((option) => {
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
        [arrayName]: newOptions
      };

    case CLEAR:
      // action.payload contains the name of the property we want
      const questionName = action.payload;
      
      const clearedCandy = state[questionName].map((opt) => {
        const { optionText } = opt;
        return {optionText: optionText, isSelected: false};
      });

      return {
        ...state,
        name: '',
        color: '',
        [questionName]: clearedCandy
      };
    default:
      return state;
  }
}

export default SurveyReducer;