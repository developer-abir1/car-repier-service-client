import React, { useEffect, useState } from 'react';
import ServiceReview from '../ServiceReview/ServiceReview';

const ReviewData = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
     const url =`https://blooming-spire-22229.herokuapp.com/reviews`
     fetch(url)
     .then(res => res.json())
     .then(data => setReviews(data))
    })
    return (
          <section className="mt-5 my-3 py-3 container">
          <h1 className="text-brand mt-3 text-uppercase text-center">Client Review</h1>
       
           <div className="row">
              
            {
                reviews.map(review => <ServiceReview review={review}></ServiceReview>)
            }

          </div>
        
          </section>
    );
};

export default ReviewData;