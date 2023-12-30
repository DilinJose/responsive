import React from 'react';
import Card from './Card';

const Section = () => {
  return (
    <div className='m-5'>
      <div className="d-flex justify-content-around flex-wrap">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section;
