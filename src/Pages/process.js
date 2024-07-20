import React from 'react'
// import Navbar from '../components/Navbar/navbar';
import   '../components/processCard/processCard.css';
import ProcessCard from '../components/processCard/processCard';
import Quote from '../assets/process.jpg'

export default function process() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="process-container">
        <div className="process-image">
          <img src={Quote} alt="Process" />
        </div>
          <div className='Heading'><h1 className="process-Heading"> The Process</h1></div>
        <div className="process-cards">
          <ProcessCard  number='1' title="Free initial consultation " description="Book your online 20-minute consultation. Ask the questions you wish to ask and get to know me to see if I am the right person for you to share your journey with. If everything works out and you are happy to move forward we can set a plan in place that works for you and our sessions going forward. " />
          <ProcessCard number='2' title="Initial assessment " description="We will complete a small informal therapeutic assessment and go through our therapeutic agreement. In the assessment we may discuss relevant history and your current situation. This can set the foundation for where you'd like the focus of our sessions to be. This is flexible and can vary depending on where life takes you during our time together. " />
          <ProcessCard number='3' title="1st Therapy appointment " description="Once the assessment has been conducted we will have a good idea on the direction you would like to take and the aims you would like to achieve by the end of our relationship." />
        </div>
      </div>
    </div>
  )
}
