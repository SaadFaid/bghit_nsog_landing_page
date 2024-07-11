import React, { useState } from 'react';
import './AboutPage.css';
import carImage from './images/220.png';

const AboutPage = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about-content" id="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-section">
        <img src={carImage} alt="About Car" className="about-image" />
        <div className="about-text">
          <p>
            We are a specialized team committed to providing reliable car rental services.
            One of the advantages of renting a car from us is offering competitive and transparent prices.
            By providing services such as comprehensive insurance, 24/7 customer support, and well-maintained vehicles, we ensure a seamless rental experience for our customers.
            {expanded && (
              <span> Additionally, our fleet includes a wide range of cars to cater to different preferences and needs. Whether you need a compact car for city driving or a spacious SUV for a family trip, we have you covered. Our user-friendly booking system makes it easy to reserve a car online, and our flexible rental plans are designed to suit various durations and budgets.</span>
            )}
          </p>
          <a onClick={toggleReadMore} className="read-more">
            {expanded ? 'Read Less' : 'Read More'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
