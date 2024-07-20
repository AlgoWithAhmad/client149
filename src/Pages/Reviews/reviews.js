import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import './reviews.css';

const sessionCategories = [
  { value: 'Initial Consultation', label: 'Initial Consultation' },
  { value: 'Personal Development', label: 'Personal Development' },
  { value: 'Relational Issues', label: 'Relational Issues' },
  { value: 'Work Related Stress', label: 'Work Related Stress' },
  { value: 'Behavioural Issues', label: 'Behavioural Issues' },
  { value: 'Bereavement', label: 'Bereavement' },
  { value: 'Others', label: 'Others' }
];

const Reviews = () => {
  const [starRating, setStarRating] = useState(0);
  const [sessionCategory, setSessionCategory] = useState([]);
  const [remarks, setRemarks] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [sessionDate, setSessionDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (selectedOptions) => {
    setSessionCategory(selectedOptions || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (starRating === 0 || sessionCategory.length === 0 || !remarks || recommend === null || !sessionDate) {
      alert('All fields are required.');
      return;
    }

    const emailData = {
      starRating,
      sessionCategory: sessionCategory.map(option => option.value).join(', '),
      remarks,
      recommend,
      sessionDate: sessionDate.toLocaleDateString()
    };

    emailjs.send('service_tq8ecrh', 'template_uzlmnyu', emailData, 'ss6LgX2p-UwU6SM03')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setStarRating(0);
        setSessionCategory([]);
        setRemarks('');
        setRecommend(null);
        setSessionDate(null);
        setTimeout(() => setSubmitted(false), 3000); // Clear the form after 3 seconds
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="reviews-container">
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit} className="reviews-form">
      <div className="form-groupR">
          <label htmlFor="sessionDate">Session Date</label>
          <DatePicker
            id="sessionDate"
            selected={sessionDate}
            onChange={(date) => setSessionDate(date)}
            dateFormat="MMMM d, yyyy"
            required
          />
        </div>
        

        <div className="form-groupR">
          <label htmlFor="sessionCategory">Session Category</label>
          <Select
            id="sessionCategory"
            isMulti
            options={sessionCategories}
            value={sessionCategory}
            onChange={handleCategoryChange}
            required
          />
          {/* <div className="selected-categories">
            Selected Categories: <span>{sessionCategory.map(option => option.label).join(', ')}</span>
          </div> */}
        </div>

        <div className="form-groupR">
          <label>Rate session</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${starRating >= star ? 'filled' : ''}`}
                onClick={() => setStarRating(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className="form-groupR">
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-groupR">
          <label>Would you recommend this to anyone?</label>
          <div className="recommend-options">
            <label>
              <input
                type="checkbox"
                name="recommend"
                value="yes"
                checked={recommend === 'yes'}
                onChange={() => setRecommend('yes')}
                
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                name="recommend"
                value="no"
                checked={recommend === 'no'}
                onChange={() => setRecommend('no')}
                
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Review</button>
      </form>

      {submitted && <div className="popup">Thank you for your review!</div>}
    </div>
  );
};

export default Reviews;
