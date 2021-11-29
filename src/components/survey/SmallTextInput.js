import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SmallTextInput = ({ questionText, placeholder, onChange, value }) => {
  return (
    <Fragment>
      <label className="label">{questionText}</label>
      <div className="field">
        <div className="control">
          <input 
            className='input' 
            type="text"
            value={value}
            placeholder={placeholder} 
            onChange={onChange}/>
        </div>
      </div>
    </Fragment>
  );
};

SmallTextInput.propTypes = {
  questionText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SmallTextInput;
