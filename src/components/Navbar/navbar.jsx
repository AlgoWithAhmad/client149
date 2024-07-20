import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/drawer';
import './navbar.css';
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img className='img' src={Logo} alt="Logo" /></div>
      <div className="menu-icon" onClick={toggleDrawer}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Me</Link> 
        <Link to="/work">My Work</Link>
        <Link to="/process">Our Process</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/reviews">Feedback</Link>
      </div>
      {isOpen && <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}
    </nav>
  );
};

export default Navbar;
