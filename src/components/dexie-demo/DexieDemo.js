import React, { Fragment } from 'react'
import { useLiveQuery } from 'dexie-react-hooks';
import SampleItem from './SampleItem';

import Database from '../../database/Database';

const DexieDemo = () => {
  const allItems = useLiveQuery(() => Database.answers.toArray(), []);
  console.log(allItems);

  if (!allItems) return <h1 className='title'>No items yet!</h1>;

  else {
    return (
      <Fragment>
        {allItems.length > 0 ?
          allItems.map(
            (item) => 
            {return <SampleItem item={item} key={item.id}/>})
          : <h1 className='title'>No items yet!</h1>}
      </Fragment>
    )
  }
  
}

export default DexieDemo;
