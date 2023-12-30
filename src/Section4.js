import React from 'react';

const Section4 = () => {
  return (
    <div className="d-flex flex-column justify-content-around align-items-center flex-wrap mb-5 w-75">
      <h1 className="section4-heading text-center mb-5">
        Interested in delving deeper into the project?
      </h1>
      <p className="section4-para w-50 mt-2 mb-5">
        If you'd like to explore further details about our initiatives or any of
        our affiliated brands, don't hesitate to connect. You can reach out to
        us via email at <span className="span-one">hello@abc.com</span> or give
        us a call at <span className="span-one">+91 480 20802730</span> .
      </p>
      <div className="mt-3 d-flex flex-wrap justify-content-center align-items-center">
        <button className="section4-button1 m-2 ">Ring us on Skype</button>
        <button className="section4-button2 m-2">Contact Us</button>
      </div>
    </div>
  );
};

export default Section4;
