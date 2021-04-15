import React from 'react';

const ServiceReviwe = ({ data }) => {
    return (
        <div className="col-md-5">
            <div class="card" >
            <img src="..." class="card-img-top" alt="..."/>
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