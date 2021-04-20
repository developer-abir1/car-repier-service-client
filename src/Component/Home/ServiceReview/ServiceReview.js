import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import photo from '../../../imge/bg.png'
import './ServiceReview.css'

const ServiceReview = ({ review }) => {
    
    return (
     <div className="col-md-3 mr-3 py-3">
        <div className="card shadow-sm" > 
      <div className="card-body">
          <p className="card-text text-center text-secondary">{review.description}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
          <img className="mx-3" src={photo} alt="" width="60" style={{height:"50"}}/>
          <div>
              <h6 className="text-card">{review.name}</h6>
              <p className="m-0 text-brand">{review.company}</p>
          </div>
      </div>
 </div>
     </div>
    );
};

export default ServiceReview;