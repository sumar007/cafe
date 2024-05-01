
import React from 'react';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Header = ({ activePage }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img className="header-logo" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" />
      </div>

      <div className="header-middle">
        <ul className="header-menu">
          <li className={activePage === 'home' ? 'active' : ''}><Link to="/"> Home</Link></li>
          <li className={activePage === 'menu' ? 'active' : ''}><Link to="/menu">Menu</Link></li>
          <li className={activePage === 'aboutus' ? 'active' : ''}><Link to="/aboutus">About Us</Link></li>
          <li className={activePage === 'contactus' ? 'active' : ''}><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
      <div className="header-right">
        <ul className="header-icons">
          <li><InstagramIcon/></li>
          <li><FacebookIcon/></li>
          <li><XIcon/></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
