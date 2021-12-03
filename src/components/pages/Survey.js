import React from 'react';
import DexieSurvey from '../survey/DexieSurvey';
import DexieDemo from '../dexie-demo/DexieDemo';

const Survey = () => {
  return (
    <div className='columns m-3'>
      <div className='column'><DexieSurvey /></div>
      <div className='column'><DexieDemo /></div>
    </div>
  )
}

export default Survey;
