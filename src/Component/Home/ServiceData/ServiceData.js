import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';

const ServiceData = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        const url= `https://blooming-spire-22229.herokuapp.com/services`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="container mt-3 ">
              <h1 className="text-uppercase text-center text-brand">Our Service</h1>
           <div className="row">
           {
                services.map(service =><Service service={service}></Service>)
            }
           </div>
        </div>
    );
};

export default ServiceData;