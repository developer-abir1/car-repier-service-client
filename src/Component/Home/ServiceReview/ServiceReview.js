import React from 'react';
import photo from '../../../imge/bg.png'
import './ServiceReview.css'

const ServiceReview = ({ review }) => {
    return (
      <div className=" card-content">
            <div class="card" style={{width: "12rem"}}>
        <img id="img"   src={photo} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{review.name}</h5>
          <p class="card-text">{review.company}</p>
          <p class="card-text">{review.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    );
};

export default ServiceReview;