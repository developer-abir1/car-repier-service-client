import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../Header/Header';
import InfoService from '../InfoService/InfoService';
import ReviewData from '../ReviewData/ReviewData';
import ServiceData from '../ServiceData/ServiceData';
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
               <Header></Header>
               <ServiceData></ServiceData>
               <InfoService></InfoService>
               <ReviewData></ReviewData>
               <Footer></Footer>
        </div>
    );
};

export default Home;