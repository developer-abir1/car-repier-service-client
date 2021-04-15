import React from 'react';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';
import Testmonial from '../Testmonial/Testmonial';
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
               <Header></Header>
               <HomeService></HomeService>
               <Testmonial></Testmonial>
        </div>
    );
};

export default Home;