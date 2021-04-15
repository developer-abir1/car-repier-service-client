import React from 'react';
import ServiceData from '../ServiceData/ServiceData';
import plumber from './img/construction-group-home-tools-wooden-background_72679-1290.png'

const HomeService = () => {

    const serviceData =[
        {
            name: 'house plumber',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, velit?',
            price: 800,
            photo:{plumber},
            work:8, 
            location: 'Dhaka'
        },
        {
            name: 'house plumber',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, velit?',
            price: 800,
            photo:{plumber},
            work:8, 
            location: 'Dhaka'
        },
        {
            name: 'house plumber',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, velit?',
            price: 800,
            photo:{plumber},
            work:8, 
            location: 'Dhaka'
        },
        {
            name: 'house plumber',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, velit?',
            price: 800,
            photo:{plumber},
            work:8, 
            location: 'Dhaka'
        },
        {
            name: 'house plumber',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, velit?',
            price: 800,
            photo:{plumber},
            work:8, 
            location: 'Dhaka'
        }
    ]


    return (
        <section className="container mt-5">
            <h1 className="text-primary">Services data</h1> 
            <div className="row">
            { 
                serviceData.map(data =><ServiceData data={data}></ServiceData>)
            }
            </div>

        </section>
    );
};

export default HomeService;