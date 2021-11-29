import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MultChoice from './MultChoice';
import SmallTextInput from './SmallTextInput';

import SurveyContext from '../../context/survey/surveyContext';

/**
 
  Goals:  
  - Implement dynamic keys and dynamic questions
    - Hard-code more sample questions into the Dexie database (Only text inputs and multiple choice)
    - Push to the github
    - Take the first question and implement dynamic state variables
  
  Experiments to run:
  - Does using square brackets to dynamically call variables work?
  - Can we use square brackets to store variables?

 */

const SampleSurvey = ({ style }) => {
  const surveyContext = useContext(SurveyContext);
  const {
    name,
    color,
    candy,
    setName,
    setColor,
    setCandy,
    submit
  } = surveyContext;

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onColorChange = (e) => {
    setColor(e.target.value);
  }

  const onCandyChange = (e) => {
    setCandy(e.target.value);
  }  

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  }

  return (
      <form className='form card p-6 sticky' onSubmit={onSubmit} style={sampleSurveyStyles}>
        <h1 className="title">Sample Survey</h1>
        <SmallTextInput questionText='What is your name?' value={name} onChange={onNameChange}/>
        <SmallTextInput questionText='What is your favorite color?' value={color} onChange={onColorChange}/>
        <MultChoice 
          questionText='Do you like to eat candy?' 
          name='test' 
          values={candy}
          onChange={onCandyChange}
        />
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