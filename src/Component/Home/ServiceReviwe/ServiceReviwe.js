import React from 'react';
import photo from '../../../imge/bg.png'
import './ServiceRivew.css'

const ServiceReviwe = ({ data }) => {
    return (
      <div className=" card-content">
            <div class="card" style={{width: "12rem"}}>
        <img id="img"   src={photo} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">{data.massege}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    );
};

export default ServiceReviwe;