import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MultChoiceInput from './MultChoiceInput';
import ShortAnswerInput from './ShortAnswerInput';

import SurveyContext from '../../context/survey/surveyContext';
import { nameQuestion, favColorQuestion, candyQuestion } from '../../model/survey/DemoQuestions';

/**
  Refactoring steps for ShortAnswerInput:
  - Create a ShortAnswerQuestion class

  Refactoring steps for Dexie:
  - Create a table that stores an array of questions
    - 
  - Create a table that stores the current state
 */

const SampleSurvey = () => {
  const surveyContext = useContext(SurveyContext);
  const {
    name,
    color,
    setName,
    setColor,
    submit
  } = surveyContext;

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onColorChange = (e) => {
    setColor(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  }

  return (
      <form className='form card p-6 sticky' onSubmit={onSubmit} style={sampleSurveyStyles}>
        <h1 className="title">Sample Survey</h1>

        <ShortAnswerInput shortAnswerQuestion={nameQuestion} value={name} onChange={onNameChange}/>
        <ShortAnswerInput shortAnswerQuestion={favColorQuestion} value={color} onChange={onColorChange}/>
        <MultChoiceInput multChoiceQuestion={candyQuestion} />

        <div className="field is-grouped">
          <div className="control">
            <input className='button is-link' type='submit' value='Submit'/>
          </div>
          <div className="control">
            <Link to='/' className='button is-light'>Cancel</Link>
          </div>
        </div>
      </form>
  )
}

const sampleSurveyStyles = {
  position: 'sticky',
  top: '30px'
};

export default SampleSurvey;