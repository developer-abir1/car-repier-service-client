import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faStreetView, faPlus, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

  
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/" style={{textDecoration:'none'}} className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Order Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" style={{textDecoration:'none'}} className="text-white">
                            <FontAwesomeIcon icon={faUsers} /><span>Book list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" style={{textDecoration:'none'}} className="text-white">
                            <FontAwesomeIcon icon={faRecycle} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" style={{textDecoration:'none'}} className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" style={{textDecoration:'none'}} className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Admin</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;