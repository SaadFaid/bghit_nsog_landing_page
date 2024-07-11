// src/CarsInfosPage.js
import React from 'react';
import './CarsInfosPage.css';

const CarsInfosPage = () => {
  return (
    <div className="cars-infos-content" id="cars">
      <div className="info-box">
        <h2 className="info-number">450+</h2>
        <p className="info-description">Cars For Rent</p>
      </div>
      <div className="info-box">
        <h2 className="info-number">800+</h2>
        <p className="info-description">Happy Clients</p>
      </div>
      <div className="info-box">
        <h2 className="info-number">750+</h2>
        <p className="info-description">Rental Locations</p>
      </div>
    </div>
  );
};

export default CarsInfosPage;
