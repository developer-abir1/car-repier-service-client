import React, { useEffect, useState } from 'react';
import ServiceReview from '../ServiceReview/ServiceReview';

const Testmonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
     const url =`http://localhost:4500/reviews`
     fetch(url)
     .then(res => res.json())
     .then(data => setReviews(data))
    })
        return (
        <section className="mt-3   container">
            <h1 className="text-primary">Testmonial</h1>
           
            <div className="row">
                  
                {
                    reviews.map(review => <ServiceReview review={review}></ServiceReview>)
                }
            </div>
            
        </section>
    );
};

export default Testmonial;