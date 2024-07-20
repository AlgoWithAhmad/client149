import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';
import Behaviour from '../../assets/behaviour.jpeg'
import other from '../../assets/others.jpeg'
import inital from '../../assets/initialC.jpeg'
import Bereavement from '../../assets/bereavement.jpeg'
import Relational from '../../assets/Relational.jpeg'
import PersonalDevelopment from '../../assets/personalD.jpg'
import Work from '../../assets/workstress.jpeg'
const categories = [
  {
    id: 1,
    title: 'Initial Consultancy',
    image: inital,
    duration: '20 mins',
    price: 'Contact for pricing',
  },
  {
    id: 2,
    title: 'Personal Development',
    image: PersonalDevelopment,
    duration: '50 mins',
    price: 'Contact for pricing',
  },
  // Add more categories as needed
  {
    id: 3,
    title: 'Relational issue',
    image: Relational,
    duration: '50 mins',
    price: 'Contact for pricing',
  },
  {
    id: 4,
    title: 'Behaviour issue',
    image: Behaviour,
    duration: '50 mins',
    price: 'Contact for pricing',
  },
  {
    id: 5,
    title: 'Work Stress',
    image: Work,
    duration: '50 mins',
    price: 'Contact for pricing',
  },
  {
    id: 6,
    title: 'Bereavement',
    image: Bereavement,
    duration: '50 mins',
    price: 'Contact for pricing',
  },
  {
    id: 7,
    title: 'Others',
    image: other,
    duration: '50 mins',
    price: 'Contact for pricing',
  },
];

const Categories = (props) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const toggleCategory = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(categoryId => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const selectAllCategories = () => {
    setSelectedCategories(categories.map(category => category.id));
  };

  const handleNext = () => {
    navigate('/booking');
  };

  return (
    <div className="categories-container">
      <div className="btn-start">
      <button onClick={selectAllCategories} className="select-all-button">Select All Categories</button></div>
      <div className='categories'>
        {categories.map((category) => (
          <div
            className={`category-card ${selectedCategories.includes(category.id) ? 'selected' : ''}`}
            key={category.id}
            onClick={() => toggleCategory(category.id)}
          >
            <img src={category.image} alt={category.title} />
            <div className="category-info">
              <h3>{category.title}</h3>
              <p>Duration: {category.duration}</p>
              <p>Price: {category.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-next"><button onClick={handleNext} className="next-button">Next</button></div> 
    </div>
  );
};

export default Categories;
