import React from 'react';
import PropTypes from 'prop-types';

import { useLiveQuery } from 'dexie-react-hooks';
import { demoSurveyDB_v1 as db } from '../../model/database/Database';
import Option from '../../model/survey/Option';

const MultChoiceInput = ({ questionKey }) => {
  const stateData = useLiveQuery(() => 
    db.state.get(questionKey), []);

  if (!stateData) {
    return null;
  }

  const { questionName, questionText, options } = stateData.questionData;

  const onChange = (event) => {
    let selectedOption = event.target.value;
    const updatedOptions = options.map(({ optionText }) => {
      if (optionText === selectedOption) {
        return new Option(optionText, true);
      }
      else {
        return new Option(optionText, false);
      }
    });

    // Dexie requires this dot notation when updating properties that are nested within other properties
    db.state.update(questionKey, {
      "questionData.options": updatedOptions
    });
  };

  return (
    <div className='field'>
      <div className="control">
        <label className="label">{questionText}</label>

        {options ? options.map(({ optionText, isSelected }) =>
          <div className="control" key={optionText}>
            <label className="radio">
              <input type="radio" name={questionName} id={optionText} value={optionText} checked={isSelected} onChange={onChange}/> {optionText}
            </label>
          </div>
        ) : null}
        
      </div>
    </div>
  )
};

MultChoiceInput.propTypes = {
  questionKey: PropTypes.number.isRequired
};

export default MultChoiceInput;
