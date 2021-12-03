import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLiveQuery } from 'dexie-react-hooks';

import SurveyContext from '../../context/survey/surveyContext';
import { demoSurveyDB_v1 as db } from '../../model/database/Database';

const ShortAnswerInput = ({ questionKey }) => {
  const surveyContext = useContext(SurveyContext);

  const stateData = useLiveQuery(() =>
    db.state.get(questionKey), []);

  if (!stateData) {
    return null;
  }

  const { questionText, questionName } = stateData.questionData;

  const onChange = (event) => {
    let response = event.target.value;
    surveyContext.setShortAnswer(questionName, response);
  }

  return (
    <Fragment>
      <label className="label">{questionText}</label>
      <div className="field">
        <div className="control">
          <input 
            className='input' 
            type="text"
            value={surveyContext[questionName]}
            onChange={onChange}/>
        </div>
      </div>
    </Fragment>
  );
};

ShortAnswerInput.propTypes = {
  questionKey: PropTypes.number.isRequired
};

export default ShortAnswerInput;
