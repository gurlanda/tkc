import React from 'react';
import DexieSurvey from '../survey/DexieSurvey';
import DexieDemo from '../dexie-demo/DexieDemo';
import SurveyState from '../../context/survey/SurveyState';

import { demoSurveyDB_v1 as db } from '../../model/database/Database';
import { useLiveQuery } from 'dexie-react-hooks';

const Survey = () => {
  let questionsArray = useLiveQuery(() => {
    return db.state.toArray().then((dataArray) => {
      return dataArray.map(dataItem => dataItem.questionData);
    })
  })



  if (!questionsArray) {
    return <h1 className="title">Loading...</h1>
  }

  return (
    <SurveyState questionsArray={questionsArray}>
    <div className='columns m-3'>
      <div className='column'><DexieSurvey /></div>
      <div className='column'><DexieDemo /></div>
    </div>
    </SurveyState>
  )
}

export default Survey;
