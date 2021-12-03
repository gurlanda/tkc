import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { demoSurveyDB_v1 as db } from '../../model/database/Database';

import { questionStateToInput } from './input-util';

const DexieSurvey = () => {
  const surveyState = useLiveQuery(() => db.state.toArray(), []);

  if (!surveyState) {
    return <h1 className="title">No survey found.</h1>
  }

  const onSubmit = (event) => {
    event.preventDefault();
    db.submit();
  }

  return (
    <form className='form card p-6 sticky' onSubmit={onSubmit} style={dexieSurveyStyles}>
        <h1 className="title">Survey Using Dexie</h1>

        {
          surveyState.map(stateItem => 
            <Fragment key={stateItem.questionID}>
              {questionStateToInput(stateItem)}
            </Fragment>
          )
        }

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

const dexieSurveyStyles = {
  position: 'sticky',
  top: '30px'
};

export default DexieSurvey
