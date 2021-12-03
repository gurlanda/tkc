import React, { Fragment } from 'react'
import { useLiveQuery } from 'dexie-react-hooks';
import SampleItem from './SampleItem';

import { demoSurveyDB_v1 as db } from '../../model/database/Database';

const DexieDemo = () => {
  const allResponses = useLiveQuery(() => db.responses.toArray(), []);

  if (!allResponses) return <h1 className='title'>Loading...</h1>;

  else {
    return (
      <Fragment>
        {allResponses.length > 0 ?
          allResponses.map(
            (response) => 
            {return <SampleItem response={response} key={response.responseID}/>})
          : <h1 className='title'>No items yet!</h1>}
      </Fragment>
    )
  }
  
}

export default DexieDemo;
