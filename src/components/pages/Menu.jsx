import React, { useState } from 'react';
import Header from '../Navbar/Header';
import './Menu.css'; // CSS for styling
import { Button } from '@mui/material'; // Importing Button component
import DishCard from './DishCard'; // Component for individual dishes
import { Link } from 'react-router-dom';

const menuData = [
  { id: 1, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 1', description: 'A tasty starter', price: '$10.99', rating: 4.5, category: 'Starter' },
  { id: 2, image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 2', description: 'Main course', price: '$15.99', rating: 4.2, category: 'Main Dish' },
  { id: 3, image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 3', description: 'Refreshing drink', price: '$5.99', rating: 4.7, category: 'Drinks' },
  { id: 4, image: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 4', description: 'Decadent dessert', price: '$8.99', rating: 4.8, category: 'Dessert' },
  { id: 5, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 5', description: 'Hearty soup', price: '$9.99', rating: 4.3, category: 'Starter' },
  { id: 6, image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 6', description: 'Savory pasta', price: '$12.99', rating: 4.6, category: 'Main Dish' },
  { id: 7, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 1', description: 'A tasty starter', price: '$10.99', rating: 4.5, category: 'Starter' },
  { id: 8, image: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 2', description: 'Main course', price: '$15.99', rating: 4.2, category: 'Main Dish' },
  { id: 9, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 3', description: 'Refreshing drink', price: '$5.99', rating: 4.7, category: 'Drinks' },
  { id: 10, image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 4', description: 'Decadent dessert', price: '$8.99', rating: 4.8, category: 'Dessert' },
  { id: 11, image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 5', description: 'Hearty soup', price: '$9.99', rating: 4.3, category: 'Starter' },
  { id:12, image: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 6', description: 'Savory pasta', price: '$12.99', rating: 4.6, category: 'Main Dish' },
  { id: 13, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 1', description: 'A tasty starter', price: '$10.99', rating: 4.5, category: 'Starter' },
  { id: 14, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 2', description: 'Main course', price: '$15.99', rating: 4.2, category: 'Main Dish' },
  { id: 15, image: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 3', description: 'Refreshing drink', price: '$5.99', rating: 4.7, category: 'Drinks' },
  { id: 16, image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 4', description: 'Decadent dessert', price: '$8.99', rating: 4.8, category: 'Dessert' },
  { id: 17, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 5', description: 'Hearty soup', price: '$9.99', rating: 4.3, category: 'Starter' },
  { id: 18, image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Dish 6', description: 'Savory pasta', price: '$12.99', rating: 4.6, category: 'Main Dish' },
];

const categories = ['All', 'Starter', 'Main Dish', 'Drinks', 'Dessert']; // Filter categories

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to all categories

  const filteredMenu = menuData.filter(
    (dish) => selectedCategory === 'All' || dish.category === selectedCategory
  ); // Filter dishes based on selected category

  return (
    <>
      <Header activePage={'menu'} />
      <div className="menu-introduction">
  <img
    src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Menu image"
  />
  <div className="menu-overlay">
    <h1>Explore Our Delicious Menu</h1>
    <p>Find your favorite dish from our extensive menu.</p>
    <Link to="/contactus">

    <Button variant="contained" sx={{backgroundColor: 'green', color: 'white'}}>Order Now</Button>
  </Link>
  </div>
</div>


      <div className="menu-filters">
        {categories.map((category) => (
          <Button
          sx={{backgroundColor: category === selectedCategory ? 'green' : 'white', color: category === selectedCategory ? 'white' : 'black',}}
            key={category}
            variant={category === selectedCategory ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
          
        ))}
      </div>

      <div className="menu-content">
        {filteredMenu.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </>
  );
};

export default Menu;
