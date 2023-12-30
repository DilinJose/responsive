import React from 'react';

const Section3 = () => {
  return (
    <div className='d-flex flex-column justify-content-around align-items-center m-5 p-5'>
      <h1 className="section3-heading">Our Contribution</h1>
      <p className="section3-para w-75">
        Our core offering extends beyond mere profit generation; we emphasize
        the growth and active involvement of our user community. Collaborating
        with us represents an investment, rather than a mere expenditure. Our
        dedication to providing distinctive digital interactions guarantees
        unparalleled benefits for our clientele.
      </p>
      <div className="section3-main-card d-flex flex-wrap justify-content-around align-items-center m-4 p-3 ">
        <div className="section3-card d-flex align-items-center flex-column mb-4">
          <h1 className="section3-card-heading mb-3">5M</h1>
          <p className="section3-card-para mt-3 w-75">Daily User Engagements</p>
        </div>
        <div className="section3-card d-flex align-items-center flex-column mb-4">
          <h1 className="section3-card-heading mb-3">$500K</h1>
          <p className="section3-card-para mt-3 w-75">Revenue Surge for an Platform</p>
        </div>
        <div className="section3-card d-flex align-items-center flex-column mb-4">
          <h1 className="section3-card-heading mb-3">10X</h1>
          <p className="section3-card-para mt-3 w-75">
            ROAS on all our marketing campaigns
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
