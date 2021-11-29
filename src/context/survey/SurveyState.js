import React, { useReducer } from 'react';
import SurveyContext from './surveyContext';
import SurveyReducer from './surveyReducer';
import { 
  SET_NAME, 
  SET_COLOR, 
  SET_CANDY ,
  CLEAR
} from '../types';

import Database from '../../database/Database';

const SurveyState = (props) => {
  const initialState = {
    name: '',
    color: '',
    candy: [
      {option: 'Yes', isSelected: false},
      {option: 'No', isSelected: false},
      {option: 'Sometimes', isSelected: false}
    ]
  };

  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  // Update name
  const setName = (name) => {
    dispatch({
      type: SET_NAME,
      payload: name
    });
  }

  // Update color
  const setColor = (color) => {
    dispatch({
      type: SET_COLOR,
      payload: color
    });
  }

  // Update candy
  const setCandy = (candy) => {
    dispatch({
      type: SET_CANDY,
      payload: candy
    });
  }

  // Submit
  const submit = async () => {
    const { name, color, candy } = state;

    // Find which option is selected
    var likesCandy = '';
    for (var i = 0; i < candy.length; i++) {
      if (candy[i].isSelected === true) {
        likesCandy = candy[i].option;
        break;
      }
    }

    await Database.answers.add({
      name, color, likesCandy
    });
    clear();
  }

  // Clear
  const clear = () => {
    dispatch({
      type: CLEAR
    });
  }

  return (
    <SurveyContext.Provider
      value={{
        name: state.name,
        color: state.color,
        candy: state.candy,
        setName,
        setColor,
        setCandy,
        submit,
        clear
      }}
    >
      {props.children}
    </SurveyContext.Provider>
  );
}

export default SurveyState;
