import React from 'react';
import Header from '../Navbar/Header';
import { TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Icon for address
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for phone number
import EmailIcon from '@mui/icons-material/Email'; // Icon for email
import './Contactus.css'; // Custom CSS for styling
import MapSection from './Mapsection';

const Contactus = () => {
  return (
    <>
      <Header activePage={'contactus'} />

      {/* Section 1: Image with heading and description */}
      <div className="contact-header">
        <img
          src="https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Contact us"
          className="contact-header-image"
        />
        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Reach out with any questions or feedback.</p>
        </div>
      </div>

      {/* Section 2: Image on the left and a form on the right */}
      <div className="contact-form-section">
        <div className="contact-image-column">
          <img
            src="https://media.istockphoto.com/id/884374384/photo/contact-us-email-phone-message-contact-communication-web-landing-page-cover-page-background.jpg?b=1&s=612x612&w=0&k=20&c=HSwtd1TGgmkXdbC6KfTO-mM8WVM47YW9hbUm1z3-N6k="
            alt="Contact form"
          />
        </div>
        <div className="contact-form-column">
          <h2>Get in Touch</h2>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" sx={{backgroundColor: 'green', color: 'white'}}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <div className="contact-cards-section">
      <div className="contact-card">
        <LocationOnIcon fontSize="large" sx={{ color: 'green' }} className="contact-icon" />
        <div className="contact-info">
          <h3>Welcome</h3>
          <p>123 Main Street, Hometown, USA</p>
        </div>
      </div>
      <div className="contact-card">
        <PhoneIcon fontSize="large" sx={{ color: 'green' }} className="contact-icon" />
        <div className="contact-info">
          <h3>Call</h3>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="contact-card">
        <EmailIcon fontSize="large" sx={{ color: 'green' }} className="contact-icon" />
        <div className="contact-info">
          <h3>Write</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
    <MapSection />
    </>
  );
};

export default Contactus;
