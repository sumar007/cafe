import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Location icon
import './MapSection.css'; // Custom CSS

const MapSection = () => (
  <div className="map-section">
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12629.048816376623!2d-122.4194186!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f1b15e17%3A0x459f4efae3f5f02!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1641940002626!5m2!1sen!2sus"
      width="100%"
      height="400px"
      frameBorder="0"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
    />
    <LocationOnIcon className="location-icon" />
  </div>
);

export default MapSection;
