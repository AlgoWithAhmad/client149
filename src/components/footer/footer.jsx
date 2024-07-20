import React from 'react';
import { FaLinkedin, FaInstagram , FaFacebook} from 'react-icons/fa';
import './footer.css';
import RegisterMember from '../../assets/member.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <img src={logo} alt="Your Logo" className="footer-logo" />
      </div>
      <div className="footer-left">
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/mindsmatternet/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=100095609318581" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
        <p>Email: <a href="mindsmatternet@gmail.com">mindsmatternet@gmail.com</a></p>
        <p>&#169; All Rights Reserved.</p>
        {/* <p>Powered by <a href="https://your-company.com" target="_blank" rel="noopener noreferrer">Your Company</a></p> */}
      </div>
         
      
      <div className="footer-right">
        <img src={RegisterMember} alt="Your Logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
