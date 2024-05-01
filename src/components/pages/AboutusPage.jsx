import React from 'react';
import './AboutusPage.css'; // Custom CSS for styling
import Header from '../Navbar/Header';
import { Button } from '@mui/material'; // Importing Material UI components
import StarIcon from '@mui/icons-material/Star'; // Example icon for section 3


// Sample array of cooks
const cooks = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'Chef John Doe',
    experience: '10 years',
    designation: 'Executive Chef',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Chef Jane Smith',
    experience: '8 years',
    designation: 'Pastry Chef',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Chef Mike Brown',
    experience: '5 years',
    designation: 'Sous Chef',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Chef Lisa White',
    experience: '12 years',
    designation: 'Head Chef',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Chef Sam Green',
    experience: '6 years',
    designation: 'Grill Chef',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Chef Emma Black',
    experience: '7 years',
    designation: 'Sauté Chef',
  },
];
// Sample array of customer reviews
const reviews = [
  {
    image: 'https://via.placeholder.com/100',
    name: 'Customer 1',
    comment: 'Great service and delicious food!',
    rating: 5,
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Customer 2',
    comment: 'Loved the atmosphere!',
    rating: 4,
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Customer 3',
    comment: 'Excellent customer service.',
    rating: 4.5,
  },
  {
    image: 'https://via.placeholder.com/100',
    name: 'Customer 4',
    comment: 'A memorable dining experience.',
    rating: 5,
  },
];
const AboutusPage = () => {
  return (
    <>
      <Header activePage={'aboutus'} />

      {/* Section 1: Full-width image with heading, description, and button */}
      <div className="full-width-image">
        <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about us" />
        <div className="full-width-content">
          <h1>About Us</h1>
          <p>Learn more about our story and mission.</p>
          <Button variant="contained" color="primary">Learn More</Button>
        </div>
      </div>

      {/* Section 2: Two columns layout */}
      <div className="two-columns-section">
        <div className="image-column">
          <img src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about us right image" />
        </div>
        <div className="text-column">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae alias deserunt ipsum non quidem dolor ipsa nam, totam ab quaerat repudiandae corrupti officiis quod consectetur, itaque magnam, delectus doloremque!</p>
        </div>
      </div>

      {/* Section 3: 6 cards in two columns */}
      <h2 className="cards-heading">Card 1</h2>
      <div className="six-cards-section">
       
          
        <div className="card-column">
          <div className="icon-card">
            <StarIcon /> {/* Example icon */}
            <div>
              <h3>Our Mission</h3>
              <p>We strive to provide the best service and quality products to our customers.</p>
            </div>
          </div>
          <div className="icon-card">
            <StarIcon /> {/* Example icon */}
            <div>
              <h3>Our Values</h3>
              <p>We believe in honesty, integrity, and customer satisfaction.</p>
            </div>
          </div>
          <div className="icon-card">
            <StarIcon /> {/* Example icon */}
            <div>
              <h3>Innovation</h3>
              <p>We constantly seek new ways to improve and innovate.</p>
            </div>
          </div>
          </div>
          <div className="card-column">
          <div className="icon-card">
            <StarIcon /> {/* Example icon */}
            <div>
              <h3>Innovation</h3>
              <p>We constantly seek new ways to improve and innovate.</p>
            </div>
          </div>
          <div className="icon-card">
            <StarIcon /> {/* Example icon */}
            <div>
              <h3>Innovation</h3>
              <p>We constantly seek new ways to improve and innovate.</p>
            </div>
          </div>
          <div className="icon-card">
            <StarIcon /> {/* Example icon */}
            <div>
              <h3>Innovation</h3>
              <p>We constantly seek new ways to improve and innovate.</p>
            </div>
          </div>
        </div>

        </div>
       {/* Section 4: Our Team */}
       <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {cooks.map((cook, index) => (
            <div key={index} className="team-card">
              <img src={cook.image} alt={cook.name} />
              <h3>{cook.name}</h3>
              <p>Experience: {cook.experience}</p>
              <p> {cook.designation}</p>
            </div>
          ))}
        </div>
      </div>
       {/* Section 5: Customer Reviews */}
       <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.image} alt={review.name} className="review-image" />
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
              <div className="review-rating">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <StarIcon key={i} sx={{ color: 'green' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
