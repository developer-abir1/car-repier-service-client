import React from 'react';
import plumber from './img/plumber.png';
import electrician from './img/electrician-construction-worker-overalls-with-drill-during-installation-sockets-home-renovation-concept_169016-8630.png';
import houseRepei from './img/allHouseRepier.png'

const HeaderCarousel = () => {
    return (
        <div className="container">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="row">
                      <div className="col-md-6">
                       <img style={{height:"500px"}} src={plumber} class="d-block w-100" alt="..."/>

                       </div>
                       <div className="col-md-6 mt-5">
                          <h1>Do You expect and  need a plumber </h1>
                          <br/>
                          <button className="btn btn-outline-success">Call Now</button>
                       </div>
                      </div>
                         </div>
                        <div class="carousel-item">
                           <div className="row">
                           <div className="col-md-6">
                           <h1 className="text-primary">Do You need an electrician ?</h1>
                           </div>
                           <div className="col-md-6 ">
                           <img style={{height:"500px"}} src={electrician} class="d-block w-100" alt="..."/>

                           </div>
                           </div>
                         </div>
                            <div class="carousel-item">
                               <div className="row">
                               <div className="col-md-6">
                               <img style={{height:"500px"}} src={houseRepei} class="d-block w-100" alt="..."/>
                      
                               </div>
                               <div className="col-md-6">
                               <h1>Choose any on follow and haier  </h1>
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
    );
};

export default HeaderCarousel;