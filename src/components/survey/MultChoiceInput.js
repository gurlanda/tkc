import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLiveQuery } from 'dexie-react-hooks';

import SurveyContext from '../../context/survey/surveyContext';
import { demoSurveyDB_v1 as db } from '../../model/database/Database';

const MultChoiceInput = ({ questionKey }) => {
  const surveyContext = useContext(SurveyContext);

  const stateData = useLiveQuery(() => 
    db.state.get(questionKey), []);

  if (!stateData) {
    return null;
  }

  const { questionName, questionText } = stateData.questionData;
  const options = surveyContext[questionName];

  const onChange = (event) => {
    let selectedOption = event.target.value;
    console.log(event.target)
    surveyContext.setMultChoice(questionName, selectedOption);
  };

  return (
    <div className='field'>
      <div className="control">
        <label className="label">{questionText}</label>

        {options ? options.map(({ optionText, isSelected }) =>
          <div className="control" key={optionText}>
            <label className="radio">
              <input type="radio" name={questionName} value={optionText} checked={isSelected} onChange={onChange}/> {optionText}
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
