import React from 'react';
import ac from '../../../imge/ac.png';
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
                                    <img style={{ width: "450px", height:"100%" }} src={ac} alt="" srcset="" />
                                </div>
                                <div className="col-md-6 mt-5 py-4">
                                    <h1 className="text-primary">In-depth Knowledge and experience to install, maintain and repair AC</h1>
                                    <p className="text-secondary mt-5 py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam accusantium provident animi totam vel at optio libero distinctio. Similique commodi sunt doloremque fugiat maiores sapiente aliquid voluptates est laudantium laborum?</p>
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