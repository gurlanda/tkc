import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoTKC from '../layout/LogoTKC';

const Home = () => {
  return (
    <Fragment>
      <div className="section pt-0">
        <LogoTKC className='mt-4 mb-6'/>
        <p className="subtitle has-text-centered">
          Welcome to the <strong>Teen Kitchen Companion App</strong>!
        </p>
        <div className="level">
          <div className="level-item"></div>
          <Link to='/survey' className='button is-link level-item is-narrow'>Begin Survey!</Link>
          <div className="level-item"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
