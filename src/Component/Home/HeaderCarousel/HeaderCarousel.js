import React from 'react';
import photo from '../../../imge/carosell1.png'
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
                                <h1 className="text-brand text-uppercase">Perform maintenance and repair on customer vehicles</h1>
                                    <p className="text-secondary mt-5 py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam accusantium provident animi totam vel at optio libero distinctio. Similique commodi sunt doloremque fugiat maiores sapiente aliquid voluptates est laudantium laborum?</p>
                                    <button className="btn btn-success">Shop Now</button>
                                    
                                </div>
                                <div className="col-md-6 mt-5 py-4">
                                <img style={{ width: "500px", height:"100%" }} src={photo} alt="" srcset="" />
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