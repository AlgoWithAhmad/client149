import React from 'react';
import './processCard.css';

const ProcessCard = ({ title, description, number }) => {
  return (
    <div className="process-card">
      <h3 className='processh4'>{number}</h3>     
       <h2 className='processh2'>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProcessCard;
