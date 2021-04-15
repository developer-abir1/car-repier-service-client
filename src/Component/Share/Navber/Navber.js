import React from 'react';
import logo from '../img/Capture.PNG'

const Navber = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light py-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img style={{width:"100px"}} src={logo} alt="" srcset=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link ms-3 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Deshboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Admin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Contact us </a> 
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;