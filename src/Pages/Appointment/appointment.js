import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './appointment.css';
import Behaviour from '../../assets/behaviour.jpeg'
import other from '../../assets/others.jpeg'
import inital from '../../assets/initialC.jpeg'
import Bereavement from '../../assets/bereavement.jpeg'
import Relational from '../../assets/Relational.jpeg'
import PersonalDevelopment from '../../assets/personalD.jpg'
import Work from '../../assets/workstress.jpeg'
// import what from '../../assets/resentment.png'

const categories = [
  { id: 1, title: 'Initial Consultation', duration: '20 mins', price: 'Contact For Pricing', image: inital },
  { id: 2, title: 'Personal Development', duration: '50 mins', price: 'Contact For Pricing', image: PersonalDevelopment },
  { id: 3, title: 'Relational Issues', duration: '50 mins', price: 'Contact For Pricing', image: Relational },
  { id: 4, title: 'Work Related Stress', duration: '50 mins', price: 'Contact For Pricing', image: Work },
  { id: 5, title: 'Behavioural Issues', duration: '50 mins', price: 'Contact For Pricing', image: Behaviour },
  { id: 6, title: 'Bereavement', duration: '50 mins', price: 'Contact For Pricing', image: Bereavement },
  { id: 7, title: 'Others', duration: '50 mins', price: 'Contact For Pricing', image: other },
  // Add more categories as needed
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'
];

const Appointment = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [timeSlot, setTimeSlot] = useState('');
  const [basicDetails, setBasicDetails] = useState({ name: '', email: '' });
  const [summary, setSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const handleCategorySelect = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(categories.map(cat => cat.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategories.length === 0 || !timeSlot || !basicDetails.name || !basicDetails.email || !summary) {
      alert('All fields are required.');
      return;
    }

    // const emailParams = {
    //   categories: selectedCategories.join(', '),
    //   timeSlot,
    //   ...basicDetails,
    //   summary,
    // };

    const emailParams = {
      categories: selectedCategories.map(id => categories.find(cat => cat.id === id).title).join(', '),
      timeSlot,
      ...basicDetails,
      summary,
    };



    emailjs.send('service_tq8ecrh', 'template_4jmy91d', emailParams, 'ss6LgX2p-UwU6SM03')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setSelectedCategories([]);
        setShowPopup(true);
        setTimeSlot('');
        setBasicDetails({ name: '', email: '' });
        setTimeout(() => {
          setShowPopup(false);
        }, 10000);
        setSummary('');
      }, error => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="appointment-container">
      <h1>Appointment Registration Form</h1>
      {showPopup && <div className="popup">Request for Appointment sent. Please check your email.</div>}
      <div className='btn-headingDiv'>
        <h3 className='categorySelection'>Select from following categories:</h3>
        <button onClick={handleSelectAll}>
          {selectedCategories.length === categories.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      <div className="categories">
        {categories.map(category => (
          <div
            key={category.id}
            className={`category-card ${selectedCategories.includes(category.id) ? 'selected' : ''}`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <p><strong>Duration: </strong>{category.duration}</p>
            <p><strong>Price: </strong>{category.price}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="timeSlot">Select Time Slot</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          >
            <option value="" disabled>Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot} disabled={submitted && slot === timeSlot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={basicDetails.name}
            onChange={(e) => setBasicDetails({ ...basicDetails, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={basicDetails.email}
            onChange={(e) => setBasicDetails({ ...basicDetails, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* {submitted && <div className="popup">Data for Appointment sent. Please check your email.</div>} */}
    </div>
  );
};

export default Appointment;
