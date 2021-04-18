import React from 'react';

const ServiceData = ({ data }) => {
    return (
        <div className="col-md-4 my-3 p-4 ">
            <div class="card" >
                <img src={data.photo} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    <p class="card-text">{data.description}</p>
                    <p class="card-text">$ {data.price}</p>

                    <button class="btn btn-primary">Contact me</button>
                </div>
               
            </div>
        </div>
    );
};

export default ServiceData;