import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
