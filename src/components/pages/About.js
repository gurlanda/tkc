import React, {Fragment} from 'react';
import LogoTKP from '../layout/LogoTKP';

const About = () => {
  return (
    <Fragment>
      <div className="section pt-0">
        <LogoTKP className='mt-4 mb-5' />
        <h1 className="title">About the Teen Kitchen Project</h1>
        <p className="block">The Teen Kitchen Project is a nonprofit organization that brings young people into the kitchen to learn to cook delicious and nourishing food. The meals they prepare are delivered to individuals and families who are in crisis due to a life-threatening illness like cancer. We serve families in Santa Cruz County, California.</p>
        <p className="block">The teens gain skills in cooking healthy food, learn about the impact of their food choices, and are offered an opportunity to build connections through community service.</p>
        <p className="block">The Teen Kitchen Project operates on Monday, Tuesday, and Wednesday afternoons, out of commercial kitchens in Soquel and Watsonville, California. We are supported through donations from the community.</p>
        <p className="block">Teen Kitchen Project hosts cooking classes and camps for ages 8 and up. We also have a robust catering program. Both the classes and catering program offer us an opportunity to generate revenue to support feeding more families in crisis.</p>
      </div>
    </Fragment>
  )
};

export default About;