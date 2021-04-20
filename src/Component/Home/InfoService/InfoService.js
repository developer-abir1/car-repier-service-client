import React from 'react';
import image from '../../../imge/allHouseRepier.png'

const InfoService = () => {
    return (
       <section className=" container">
        <div className="row d-flex">
            <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" srcset=""/>
            </div>
            <div className="col-md-6 mt-5 my-3 py-3">
            <h1 className="text-brand text-uppercase">Automotive body designs are frequently categorized according</h1>
            
            <p className="text-secondary">An Automotive Technician repairs and maintains cars and trucks. Automotive Technicians conduct diagnostic tests on vehicles and replace worn or damaged components. They troubleshoot and repair a variety of engine systems to ensure that the proper repairs may be made to the customer's satisfaction.</p>
            <h1 className="text-primary">01752103786</h1>
            <button className="btn-brand">Learn More</button>
            </div>
        </div>
       </section>
    );
};

export default InfoService;