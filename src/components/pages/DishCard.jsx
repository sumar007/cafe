import React from 'react';
import './DishCard.css'; // CSS for styling
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DishCard = ({ dish }) => (
  <div className="dish-card">
    <img src={dish.image} alt={dish.name} className="dish-image" />
    <div className="dish-details">
      <div className="dish-info">
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-price">{dish.price}</p>
      </div>
      <p className="dish-description">{dish.description}</p>
      <div className="dish-meta">

        <div className="dish-rating">Rating: {dish.rating}</div>
        <Link to="/contactus">
        <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white',width: '100%', marginTop: '10px' }} >Add to Cart</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default DishCard;
