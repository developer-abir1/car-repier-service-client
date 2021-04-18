import React from 'react';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';
import InfoService from '../InfoService/InfoService';
import Testmonial from '../Testmonial/Testmonial';
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
               <Header></Header>
               <HomeService></HomeService>
               <InfoService></InfoService>
               <Testmonial></Testmonial>
        </div>
    );
};

export default Home;