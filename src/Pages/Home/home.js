import React from 'react';
import './home.css';
import Img from '../../assets/home.jpg'
// import { redirect } from 'react-router-dom';
import member from '../../assets/member.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="poster">
        <h1 className="poster-text">UK Certified International Integrative Counsellor And Psychotherapist</h1>
        <img src={member} alt="Bacp Registered" className="member-logo"/>
      </div>
      <div className="content">
        <div className="quote">
          <p className='quote-para'> "The act of revealing oneself fully to another and still being accepted may be the major vehicle
        of therapeutic help  
"</p>
          <div className="appointment-button">
            <button onClick={() => window.location.href = '/appointment'}>Book Appointment</button>
          </div>
        </div>
        <div className="image">
          <img src={Img} alt="Counsellor" />
        </div>
      </div>
      {/* <div className="appointment-button">
        <button onClick={() => window.location.href = '/appointment'}>Book an Appointment</button>
      </div> */}
    </div>
  );
};

export default Home;
