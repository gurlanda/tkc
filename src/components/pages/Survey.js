import React from 'react';
import SampleSurvey from '../survey/SampleSurvey';
import DexieDemo from '../dexie-demo/DexieDemo';

const Survey = () => {
  return (
    <div className='columns m-3'>
      <div className='column'><SampleSurvey /></div>
      <div className='column'><DexieDemo /></div>
    </div>
  )
}



export default Survey;
