import React from 'react';
import PropTypes from 'prop-types';

const MultChoice = ({questionText, values, name, onChange}) => {
  return (
    <div className='field'>
      <div className="control">
        <label className="label">{questionText}</label>

        {values.map(({option, isSelected}) => 
          <div className="control" key={option}>
            <label className="radio">
              <input type="radio" name={name} id={option} value={option} checked={isSelected} onChange={onChange}/> {option}
            </label>
          </div>
        )}
        
      </div>
    </div>
  )
};

MultChoice.propTypes = {
  questionText: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultChoice;
