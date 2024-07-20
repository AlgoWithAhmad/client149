import React from 'react';
import { Link } from 'react-router-dom';
import './drawer.css';

const Drawer = ({ isOpen, toggleDrawer }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
            <div className="drawer">
                <button onClick={toggleDrawer} className="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav className="drawer-links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/work">My Work</Link>
                    <Link to="/proess">Our Process</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/appointment">Appointment</Link>
                </nav>
            </div>
        </div>
    );
};

export default Drawer;
