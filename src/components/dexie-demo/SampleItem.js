import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SurveyContext from '../../context/survey/surveyContext';

const SampleItem = ({ response }) => {
  const surveyContext = useContext(SurveyContext);

  const { responseID, responseData } = response;

  const onClickDelete = () => {
    surveyContext.deleteItem(responseID);
  }

  console.log('responseData')
  console.log(responseData)

  const renderedResponse = 
    responseData.length > 0 ? 
    responseData.map((dataItem) => {
      const [[questionName, response]] = Object.entries(dataItem);

      console.log(questionName);
      const responseString = JSON.stringify(response)

      return (<div className="level" key={questionName}>
        <div className="level-left">
          <h1 className="level-item has-text-weight-bold">{questionName}</h1>
        </div>
        <div className="level-right">
          <p className="level-item is-italic has-text-weight-light">{responseString}</p>
        </div>
      </div>)
    }) : (<div>No data in this response.</div>);

  return (
    <div className="card ">
      <div className="card-header is-shadowless pr-3">
        <h1 className="card-header-title title mb-0">Item</h1>
        <button className='button is-danger card-header-icon my-auto' onClick={onClickDelete}>Delete</button>
      </div>

      <div className="card-content">
        {renderedResponse}
      </div>
    </div>
  );
}

SampleItem.propTypes = {
  response: PropTypes.object.isRequired
}

export default SampleItem;
