import { 
  SET_NAME, 
  SET_COLOR, 
  SET_CANDY,
  CLEAR
} from '../types';

const SurveyReducer = (state, action) => {
  switch(action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload
      };
    case SET_CANDY:
      const newCandy = state.candy.map((pair) => {
        const { option } = pair;

        // action.payload contains the selected key
        if (option === action.payload) {
          return {option: option, isSelected: true};
        }
        else {
          return {option: option, isSelected: false};
        }
      });

      return {
        ...state,
        candy: newCandy
      };
    case CLEAR:
      const clearedCandy = state.candy.map((pair) => {
        const { option } = pair;
        return {option: option, isSelected: false};
      });

      return {
        ...state,
        name: '',
        color: '',
        candy: clearedCandy
      };
    default:
      return state;
  }
}

export default SurveyReducer;