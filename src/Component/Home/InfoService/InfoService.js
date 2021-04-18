import React from 'react';
import image from '../../../imge/allHouseRepier.png'

const InfoService = () => {
    return (
       <section className=" container">
        <div className="row d-flex">
            <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" srcset=""/>
            </div>
            <div className="col-md-6">
            <h1>Emergency need your installation</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero id, similique, necessitatibus culpa voluptas quo amet deleniti vero repellendus rem rerum delectus impedit voluptate earum ex quam odit quis.</p>
            <h1 className="text-primary">01752103786</h1>
            </div>
        </div>
       </section>
    );
};

export default InfoService;