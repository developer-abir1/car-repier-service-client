import React from 'react';
import Navber from '../../Share/Navber/Navber';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';

const Header = () => {
    return (
        <div className="header-container">
            <Navber></Navber>
            <HeaderCarousel></HeaderCarousel>
        </div>
    );
};

export default Header;