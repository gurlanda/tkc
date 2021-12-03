import React, { useReducer } from 'react';
import SurveyContext from './surveyContext';
import SurveyReducer from './surveyReducer';
import { 
  CLEAR,
  SET_SHORT_ANSWER,
  SET_MULTCHOICE
} from '../types';

import { MULT_CHOICE, SHORT_ANSWER } from '../../model/survey/questionTypes';

import { demoSurveyDB_v1 as db } from '../../model/database/Database';

const SurveyState = ({ questionsArray, children }) => {
  // Set the initial state dynamically
  let initialState = {};
  questionsArray.forEach((question) => {
    const { questionType, questionName } = question;

    switch(questionType) {
      case MULT_CHOICE:
        initialState = {
          ...initialState,
          // Deep copy the array
          [questionName]: question.options.map(opt => {return {...opt}})
        };
        break;

      case SHORT_ANSWER:
        initialState = {
          ...initialState,
          [questionName]: ''
        };
        break;

      default:
        // do nothing
    }
  });

  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  // Updates the state of a short answer question
  const setShortAnswer = (questionName, value) => {
    dispatch({
      type: SET_SHORT_ANSWER,
      payload: {
        shortAnsQuestionName: questionName,
        shortAnsResponse: value
      }
    })
  };

  // Updates the state of a multiple choice question
  const setMultChoice = (questionName, selectedOption) => {
    dispatch({
      type: SET_MULTCHOICE,
      payload: { 
        questionName: questionName, 
        selectedOption: selectedOption }
    });
  }

  // Submit
  const submit = async () => {
    let questionResponses = [];

    // Convert the state object to an array of responses
    for (const [questionName, response] of Object.entries(state)) {
      questionResponses.push({
        [questionName]: response
      });
    }

    await db.responses.add({ responseData: questionResponses });
    clear();
  }

  const deleteItem = (id) => {
    db.responses.delete(id);
  }

  // Clear
  const clear = () => {
    dispatch({
      type: CLEAR,
      payload: initialState
    });
  }

  // Dynamically set the provider's values
  // The Provider updates whenever providerValue changes, so wrap this logic in a function so that providerValue updates only once
  const setProviderValues = (qArray, initProviderValues) => {
    let newValues = {...initProviderValues};
    qArray.forEach(question => {
      newValues = {
        ...newValues,
        [question.questionName]: state[question.questionName]
      }
    })

    return newValues;
  }

  const functionSet = {
    setMultChoice,
    setShortAnswer,
    submit,
    deleteItem,
    clear
  }

  // Dynamically set the provider's values
  const providerValues = setProviderValues(questionsArray, functionSet);

  return (
    <SurveyContext.Provider value={providerValues}>
      {children}
    </SurveyContext.Provider>
  );
}

export default SurveyState;
