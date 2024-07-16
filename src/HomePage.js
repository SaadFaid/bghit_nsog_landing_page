import React from 'react';
import './HomePage.css';
import logo from './images/logo.png';  // Update with the correct image path
import carImage from './images/car-image.png';  // Update with the correct image path
import facebookIcon from './images/facebook.png';  // Update with the correct image path
import twitterIcon from './images/twitter.png';  // Update with the correct image path
import instagramIcon from './images/instagram.png';  // Update with the correct image path
import envelopeIcon from './images/envelope.png';  // Update with the correct image path
import whatsappIcon from './images/whatsapp.png';  // Update with the correct image path
import scrollTopIcon from './images/up.png';  // Update with the correct image path

const HomePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <div className="social-media-bar">
        <div className="social-links">
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={whatsappIcon} alt="WhatsApp" /></a>
          <a href="#"><img src={envelopeIcon} alt="Envelope" /></a>
        </div>
      </div>
      <div className="homepage-content">
        <div className="header">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="nav-section">
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#" onClick={() => scrollToSection('about')}>About</a>
              <a href="#" onClick={() => scrollToSection('booking')}>Booking</a>
              <a href="#" onClick={() => scrollToSection('cars')}>Cars</a>
              <a href="#" onClick={() => scrollToSection('contacts')}>Contacts</a>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="main-content-left">
            <div className="hero-text">
              <h1 className="main-title">Enjoy your life with our comfortable cars.</h1>
              <p className="main-description">
                Bghit Nsog is ready to serve the best <br /> experience in car rental.
              </p>
              <button className="explore-button" onClick={() => scrollToSection('contacts')}>Explore Now</button>
            </div>
          </div>
          <div className="main-content-right">
            <img src={carImage} alt="Car" className="car-image" />
          </div>
        </div>
      </div>
      <div className="scroll-to-top" onClick={scrollToTop}>
        <img src={scrollTopIcon} alt="Scroll to Top" />
      </div>
    </div>
  );
}

export default HomePage;
