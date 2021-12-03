import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SurveyContext from '../../context/survey/surveyContext';

const SampleItem = ({ item }) => {
  const surveyContext = useContext(SurveyContext);

  const { id, name, color, likesCandy } = item;

  const onClickDelete = () => {
    surveyContext.deleteItem(id);
  }

  return (
    <div className="card ">
      <div className="card-header is-shadowless pr-3">
        <h1 className="card-header-title title mb-0">{name}</h1>
        <button className='button is-danger card-header-icon my-auto' onClick={onClickDelete}>Delete</button>
      </div>
      <div className="card-content">
        <div className="level">
          <div className="level-left">
            <h1 className="level-item has-text-weight-bold">Favorite Color</h1>
          </div>
          <div className="level-right">
            <p className="level-item is-italic has-text-weight-light">{color}</p>
          </div>
        </div>
        <div className="level">
          <div className="level-left">
            <h1 className="level-item has-text-weight-bold">Likes candy?</h1>
          </div>
          <div className="level-right">
            <p className="level-item is-italic has-text-weight-light">{likesCandy}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

SampleItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default SampleItem;
