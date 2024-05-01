import React from "react";
import "./HomePage.css";
import Header from "../Navbar/Header";
import { Button } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CakeIcon from "@mui/icons-material/Cake";
import { Carousel } from 'react-responsive-carousel'; // Carousel library
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles


const dishes = [
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  // Repeat this object structure for each of the 12 dishes
  {
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 2',
    price: '$15.99',
    description: 'A tasty dish with a mix of spices.',
    rating: 4.7,
  },
  {
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  // Repeat this object structure for each of the 12 dishes
  {
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 2',
    price: '$15.99',
    description: 'A tasty dish with a mix of spices.',
    rating: 4.7,
  },
  {
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  // Repeat this object structure for each of the 12 dishes
  {
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 2',
    price: '$15.99',
    description: 'A tasty dish with a mix of spices.',
    rating: 4.7,
  },
  {
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
  // Repeat this object structure for each of the 12 dishes
  {
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 2',
    price: '$15.99',
    description: 'A tasty dish with a mix of spices.',
    rating: 4.7,
  },
  {
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Dish 1',
    price: '$12.99',
    description: 'A delicious dish with unique flavors.',
    rating: 4.5,
  },
];
const HomePage = () => {
  
  
  return (
    <>
      <section>
        <Header activePage={"home"} />
        <div className="home-section">
          <div className="home-content">
            <h3 className="home-title">
              A place where you can enjoy your coffee
            </h3>
            <p className="home-subtitle">
              A place where you can enjoy your coffee
            </p>
            <div className="home-buttons">
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Book Table
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ borderColor: "green", color: "white" }}
              >
                Order Online
              </Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/19166324/pexels-photo-19166324/free-photo-of-woman-drinking-coffee-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="home"
          />
        </div>
      </section>
      <section className="home-section2">
        <div className="home-content2">
          {/* Flexbox layout with gap between image and card container */}
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="menu image"
              className="home-image2"
            />
          </div>

          <div className="card-container">
            <h1 className="card-title">Lorem ipsum dolor sit amet?</h1>
            {/* Three divs stacked vertically */}
            <div className="home-card">
              <div className="icon-heading-row">
                <div className="icon-container">
                  <FastfoodIcon style={{ fontSize: 60 }} />
                </div>
                <div className="text-container">
                  <h3>Lorem or sit amet conse. Iure</h3>
                  <p>
                    . E ab voluptatum est autem ullam nesciunt odio consequatur,
                    fuga blanditiis eveniet quisquam nihil, sint sequi fugiat.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="home-card">
              <div className="icon-heading-row">
                <div className="icon-container">
                  <DeliveryDiningIcon style={{ fontSize: 60 }} />
                </div>
                <div className="text-container">
                  <h3>Lorem ipsum dolor et conse. Iure te </h3>
                  <p>
                    Lor Eum, ducimus quaerat repellat aperiam aspernatur ab
                    voluptatum est autem ullam nesciunt odio consequatur, fuga
                    blasequi fugiat.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="home-card">
              <div className="icon-heading-row">
                <div className="icon-container">
                  <CakeIcon style={{ fontSize: 60 }} />
                </div>
                <div className="text-container">
                  <h3>Lorem ips sit amet coe Repellat.</h3>
                  <p>
                    Lor Eum, ducimus quaerat repellat aperiam aspernatur ab
                    voluptatum est autem ullam nesciunt odio consequatur, fuga
                    blasequi fugiat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-section">
        <h2 className="section-heading">Our Specialties</h2>
        <p className="section-description">
          Explore our unique offerings crafted with care.
        </p>
        <div className="card-columns">
          {/* First Column */}
          <div className="column">
            <div className="card">
              <div className="card-icon">
                <FastfoodIcon style={{ fontSize: 60 }} />
              </div>
              <div className="card-content">
                <h3 className="card-heading">Fast Food</h3>
                <p className="card-paragraph">
                  Quick and delicious meals for your busy day.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FastfoodIcon style={{ fontSize: 60 }} />
              </div>
              <div className="card-content">
                <h3 className="card-heading">Fast Food</h3>
                <p className="card-paragraph">
                  Quick and delicious meals for your busy day.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FastfoodIcon style={{ fontSize: 60 }} />
              </div>
              <div className="card-content">
                <h3 className="card-heading">Fast Food</h3>
                <p className="card-paragraph">
                  Quick and delicious meals for your busy day.
                </p>
              </div>
            </div>
</div>
<div className="column">
            <div className="card">
              <div className="card-icon">
                <FastfoodIcon style={{ fontSize: 60 }} />
              </div>
              <div className="card-content">
                <h3 className="card-heading">Fast Food</h3>
                <p className="card-paragraph">
                  Quick and delicious meals for your busy day.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <FastfoodIcon style={{ fontSize: 60 }} />
              </div>
              <div className="card-content">
                <h3 className="card-heading">Fast Food</h3>
                <p className="card-paragraph">
                  Quick and delicious meals for your busy day.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FastfoodIcon style={{ fontSize: 60 }} />
              </div>
              <div className="card-content">
                <h3 className="card-heading">Fast Food</h3>
                <p className="card-paragraph">
                  Quick and delicious meals for your busy day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-dishes">
      <h2 className="section-heading">Most Popular Dishes</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        stopOnHover={false}
        autoPlay={true}
        interval={3000} // Slide every 5 seconds
        centerMode // Center the active slide
        centerSlidePercentage={35} // Adjust as needed for the number of visible slides
      >
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <h3 className="dish-name">{dish.name}</h3>
            <p className="dish-description">{dish.description}</p>
            <p className="dish-price">{dish.price}</p>
            <div className="dish-rating">Rating: {dish.rating}</div>
            <button className="dish-button">Order Now</button>
          </div>
        ))}
      </Carousel>
    </section>
    </>
  );
};

export default HomePage;
