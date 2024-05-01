import React from 'react';
import './Footer.css'; // CSS for footer styling
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        
      <div className="social-media-column">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookIcon className="social-icon" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <TwitterIcon className="social-icon" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramIcon className="social-icon" />
    </a>
  </div>
      </div>

      <div className="footer-section">
        {/* Unordered Lists */}
       
        <ul className="footer-list">
          <li>FAQs</li>
          <li>Terms of Service</li>
          <li>Site Map</li>
        </ul>
        <p className="footer-copyright">© 2024 Your Company. All rights reserved.</p>

      </div>

      <div className="footer-section">
        {/* Page Links and Copyright */}
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
    </footer>
    
  );
};

export default Footer;
