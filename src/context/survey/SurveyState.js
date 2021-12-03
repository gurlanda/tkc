import React, { useReducer } from 'react';
import SurveyContext from './surveyContext';
import SurveyReducer from './surveyReducer';
import { 
  SET_NAME, 
  SET_COLOR, 
  CLEAR,
  SET_SHORT_ANSWER,
  SET_MULTCHOICE
} from '../types';

import { Database } from '../../model/database/Database';

import  { candyQuestion } from '../../model/survey/DemoQuestions';

const SurveyState = (props) => {
  const appendMultChoiceToState = (multChoiceQ, state) => {
    // Append the options to the state
    let newState = {
      ...state,
      // Deep copy the array
      [multChoiceQ.questionName]: multChoiceQ.options.map(opt => {return {...opt}})
    };

    return newState;
  };

  // eslint-disable-next-line
  const appendShortAnswerToState = (shortAnswerQ, state) => {
    let newState = {
      ...state,
      [shortAnswerQ.questionName]: ''
    }

    return newState;
  }

  const initialState = {
    name: '',
    color: ''
  };

  const [state, dispatch] = useReducer(SurveyReducer, 
    appendMultChoiceToState(candyQuestion, initialState));

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

  const setShortAnswer = (questionName, value ) => {
    dispatch({
      type: SET_SHORT_ANSWER,
      payload: {
        shortAnsQuestionName: questionName,
        value: value
      }
    })
  };

  // Updates the state of a multiple choice question
  const setMultChoice = (questionName, selectedOption) => {
    dispatch({
      type: SET_MULTCHOICE,
      payload: { 
        arrayName: questionName, 
        selectedOption: selectedOption }
    });
  }

  // Submit
  const submit = async () => {
    const { name, color } = state;
    const candy = state[candyQuestion.questionName];

    // Find which option is selected
    var likesCandy = '';
    for (var i = 0; i < candy.length; i++) {
      if (candy[i].isSelected === true) {
        likesCandy = candy[i].optionText;
        break;
      }
    }

    await Database.answers.add({
      name, color, likesCandy
    });
    clear();
  }

  const deleteItem = (id) => {
    Database.answers.delete(id);
  }

  // Clear
  const clear = () => {
    dispatch({
      type: CLEAR,
      payload: candyQuestion.questionName
    });
  }

  return (
    <SurveyContext.Provider
      value={{
        name: state.name,
        color: state.color,
        [candyQuestion.questionName]: state[candyQuestion.questionName],
        setName,
        setColor,
        setMultChoice,
        setShortAnswer,
        submit,
        deleteItem,
        clear
      }}
    >
      {props.children}
    </SurveyContext.Provider>
  );
}

export default SurveyState;
