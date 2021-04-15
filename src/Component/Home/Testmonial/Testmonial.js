import React from 'react';
import ServiceReviwe from '../ServiceReviwe/ServiceReviwe';

const Testmonial = () => {
    const reviweData =[
        {
            name: 'jhanker mahabunb',
            massege: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet non! Totam, dolorum voluptatum perferendis molestias ipsum fugit architecto sapiente?',
            photo: ''
        },
        {
            name: 'jhanker mahabunb',
            massege: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet non! Totam, dolorum voluptatum perferendis molestias ipsum fugit architecto sapiente?',
            photo: ''
        },
        {
            name: 'jhanker mahabunb',
            massege: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet non! Totam, dolorum voluptatum perferendis molestias ipsum fugit architecto sapiente?',
            photo: ''
        },
        {
            name: 'jhanker mahabunb',
            massege: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet non! Totam, dolorum voluptatum perferendis molestias ipsum fugit architecto sapiente?',
            photo: ''
        }
        ,{
            name: 'jhanker mahabunb',
            massege: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, amet non! Totam, dolorum voluptatum perferendis molestias ipsum fugit architecto sapiente?',
            photo: ''
        }
    ]
    return (
       <section className="mt-3   container">
           <h1 className="text-primary">Testmonial</h1>

         <div className="row">
         {
               reviweData.map(data => <ServiceReviwe data={data}></ServiceReviwe>)
           }
         </div>
       </section>
    );
};

export default Testmonial;