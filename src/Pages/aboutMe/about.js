import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutme.css';
import profile from '../../assets/profile.jpg';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/appointment');
  };

  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-info">
          <div className="about-me-header">
            <h1 className="about-me-name">Iman Ali</h1>
            <h2 className="about-me-designation">Counsellor & psycotherapist</h2>
          </div>
          <div className="about-me-paragraphs">
            <p><strong>Welcome, </strong> thank you for taking the time out to go through my website. My name is <strong>Iman</strong>  and I am a <strong>BACP registered counsellor and psychotherapist </strong> providing online counselling for people struggling to cope with their mental health.(For more information, visit <a href="https://www.bacp.co.uk/">www.bacp.co.uk</a>)  </p>
            <p>I work as an integrative Psychotherapist believing strongly in your ability to achieve inner peace and my ability to help you get there. I am currently based in Islamabad, Pakistan. I have worked within the field of Psychology for <strong> 10 years </strong> now having completed a <strong>degree</strong> in both <strong>applied psychology and psychological studies </strong>. It was not until enrolling in a certification course for Humanistic therapy that my own trajectory shifted from clinical psychology to psychotherapy. I went on to complete my <strong>Mastrer's </strong>  in <strong>Counselling and Psychotherapy </strong> from <strong> Newcastle, UK </strong> before coming to settle back in Pakistan. </p>
  
          </div>
          <button className="appointments-button" onClick={handleAppointmentClick}>
            Book Appointment
          </button>
        </div>
        <div className="about-me-picture">
          <img src={profile} alt="Iman Ali" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
