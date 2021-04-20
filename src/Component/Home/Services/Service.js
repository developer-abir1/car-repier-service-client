import { Button } from '@material-ui/core';
import React from 'react';


const Service = ({ service }) => {


    return (

        <div className="col-md-4 mt-4">

            <div class="card" style={{width:"18rem"}} >
                <img src={service.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 class="card-text text-card text-uppercase">{service.name}</h3>
                    <p class="card-text text-secondary"> <small><strong>{service.description}</strong> </small> </p>
                    <p class="card-text text-price">$ {service.price}</p>
                    <Button variant="contained" color="secondary">
                        Add to cart
                     </Button>
                </div>

            </div>
        </div>
    );
};

export default Service;