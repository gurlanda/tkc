import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { useLiveQuery } from 'dexie-react-hooks';
import { demoSurveyDB_v1 as db } from '../../model/database/Database';

const ShortAnswerInput = ({ questionKey }) => {
  const stateData = useLiveQuery(() =>
    db.state.get(questionKey), []);

  if (!stateData) {
    return null;
  }

  const { questionText, response } = stateData.questionData;

  const onChange = (event) => {
    let newResponse = event.target.value;

    // Dexie requires this dot notation when updating properties that are nested within other properties
    db.state.update(questionKey, {
      "questionData.response": newResponse
    });
  }

  return (
    <Fragment>
      <label className="label">{questionText}</label>
      <div className="field">
        <div className="control">
          <input 
            className='input' 
            type="text"
            value={response}
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
