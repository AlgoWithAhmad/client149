import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './booking.css';

Modal.setAppElement('#root');

const Booking = () => {
  const initialSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
  ];
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [availableSlots, setAvailableSlots] = useState(initialSlots);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevState => 
      prevState.includes(category) 
        ? prevState.filter(item => item !== category)
        : [...prevState, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      alert('Please select a time slot.');
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
      summary,
      slot: selectedSlot,
      categories: selectedCategories.join(', '),
    };

    emailjs.send(
      'service_tq8ecrh', // Replace with your EmailJS service ID
      'template_4jmy91d', // Replace with your EmailJS template ID for the main email
      templateParams,
      'ss6LgX2p-UwU6SM03' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your appointment has been submitted!');
      setAvailableSlots(availableSlots.filter(slot => slot !== selectedSlot));
      setSelectedSlot('');
      setName('');
      setEmail('');
      setPhone('');
      setSummary('');
      setSelectedCategories([]);
    }, (err) => {
      console.log('FAILED...', err);
      alert('Failed to send appointment details. Please try again.');
    });
  };

  return (
    <div className="booking-container">
      <h2>Booking Page</h2>
      <div className="categories">
        <h3>Select Categories</h3>
        {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'].map((category, index) => (
          <div key={index}>
            <input 
              type="checkbox" 
              id={`category-${index}`} 
              value={category} 
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            <label htmlFor={`category-${index}`}>{category}</label>
          </div>
        ))}
      </div>
      <button type="button" onClick={openModal}>Select Date & Time</button>
      <div className="selected-datetime">
        {selectedSlot ? `Selected Slot: ${selectedSlot}` : 'No slot selected'}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <h2>Select Time Slot</h2>
        <select onChange={handleSlotChange} value={selectedSlot}>
          <option value="" disabled>Select a slot</option>
          {availableSlots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
        <button onClick={closeModal}>Close</button>
      </Modal>
      <form className="appointment-details" onSubmit={handleSubmit}>
        <div className="basic-details">
          <h3>Basic Details</h3>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
