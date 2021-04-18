import React from 'react';
import plumber from './img/plumber.png';
import './HeaderCarosole.css'

const HeaderCarousel = () => {
    return (
        <section className="carousel-container">
            <div className="container">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <div className="row">
                                <div className="col-md-6 py-3">
                                    <img style={{ height: "500px" }} src={plumber} alt="" srcset="" />
                                </div>
                                <div className="col-md-6 mt-5 py-3">
                                    <h1 className="text-primary">Plumbing To Electrical Repairs - Apply For Our Services</h1>
                                    <p className="text-secondary mt-5 py-3">We complete critical repairs needed for homeowners to remain in their homes. We offer critical repairs needed for people to remain in their homes safely. Free Home Repairs. Tues and Thurs from 10-3. Veteran Home Repairs. Senior Chore Help.</p>
                                    <button className="btn btn-outline-success">Shop Now</button>

                                </div>
                            </div>
                        </div>
                       
                       
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeaderCarousel;