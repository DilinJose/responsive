import React from 'react';
import img2 from './assets/img/5daa24d7cc4a0a62650c6b28 1.png';
import img3 from './assets/img/Fortnite_20180630171046 1.png';
import img4 from './assets/img/maxresdefault 1.png';

const Section2 = () => {
    const style = {
        width: '22rem'
    }
  return (
    <div className='d-flex flex-row flex-wrap justify-content-around w-75'>
      <div className="card mb-4" style={style}>
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Explore large, destructible environments where no two games are ever
            the same.
          </p>
        </div>
      </div>
      <div className="card mb-4" style={style}>
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
          </p>
        </div>
      </div>
      <div className="card mb-4" style={style}>
        <img src={img4} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Discover even more ways to play across thousands of creator-made game genres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
