// src/App.js
import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import CarsInfosPage from './CarsInfosPage';
import ContactsPage from './ContactsPage';
import './App.css';


const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <BookingPage />
      <CarsInfosPage />
      <ContactsPage />
    </div>
  );
}

export default App;
